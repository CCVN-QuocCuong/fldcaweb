import { NUMBER } from '../config/constants'

export const countRequired = arrayFeatures => {
    let count = 0
    for (const featureItem of arrayFeatures) {
        if (featureItem.required) {
            count++
        }
    }
    return count
}

export const arrayRequired = (arrayValue, arrayFeatures) => {
    let list = []
    if (arrayFeatures) {
        arrayFeatures.forEach(item => {
            if (item.required) {
                for (const dataItem of arrayValue) {
                    if (item.name === dataItem.key) {
                        if (dataItem.value.value) {
                            list.push(dataItem.key)
                        }
                    }
                }
            }
        })
    }
    return list
}

/**
 * check require of feature 
 * @param {Object} feature
 * @param {*} value
 * @param {Function} setIsRequiredAdd
 * @param {Function} setListRequired
 * @param {Function} removeListRequired
 */
export const checkRequiredFeature = (feature, value, setIsRequiredAdd, setListRequired, removeListRequired) => {
    const checkCondition = feature.type == NUMBER ? (value.indexOf('-') !== 0 && value.indexOf('.') !== 0 || value.length > 1) : true

    if (feature.required && !value) {
        setIsRequiredAdd(false)
    }

    if (feature.required && value && checkCondition) {
        setListRequired(feature.name)
    } else {
        removeListRequired(feature.name)
    }
}