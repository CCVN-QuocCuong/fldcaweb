import strings from '../config/strings'
import { format } from 'react-string-format'

/**
 * Build numberic warining message.
 * @param {*} length 
 * @param {*} pad 
 * @returns 
 */
export function buildNumericWarningMessage(value, length, pad) {
    if (value && pad) {
        let tempValue = Math.pow(10, (length - pad))
        let padValue = Math.pow(0.1, pad)
        tempValue = tempValue - padValue
        const min = -1*tempValue
        const max = tempValue
        
        if (value < min || value > max) {
            return format(strings.warningDecimalNumber, -1*tempValue, tempValue)
        }
    }
    
    return null
}

/**
 * Build min, max warning message.
 * @param {*} featureName 
 * @param {*} constraint 
 * @returns 
 */
export function buildMinMaxWarningMessage(featureName, constraint) {
    return format(strings.warningNumberMinMax, featureName, constraint)
}

export function isValidMinMax(value, length, pad) {
    let tempValue = Math.pow(10, (length - pad))
    let padValue = Math.pow(0.1, pad)
    tempValue = tempValue - padValue
    const min = -1*tempValue
    const max = tempValue
    
    return value >= min && value <= max
}

export function validateDecimal(value) {
    if (value.split('.').length <= 2 && value.indexOf('.') !== 0 && value.split('-').length <= 2 ) {
        return true
    }
    return false
}