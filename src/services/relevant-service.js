import { logData } from './logger-service'
import { calculateFormula } from './calculate-service'
import { BIT, MEMO, NUMBER, QUICKPICK, TEXT } from '../config/constants'
import { detectWhiteSpace, getConcatenateString, replaceSpaces } from './helpers'

/**
 * Validate displaying with specific condition.
 * @param {*} objectData the current object data.
 * @param {*} condition the relevant condition string.
 * @returns true if satisfying relevant condition or relevant is empty.
 */
export function validateDisplayCondition(datas, condition) {
  if (!condition) {
    return true
  } else if (!datas || !(datas instanceof Array) || datas.length == 0 ) {
    return false
  }
  
  let exp = `${condition}`

  for (const data of datas) {
    for (const itemData of data) {
      if (itemData.key) {
        const value = itemData.value.value != null && itemData.value.value != undefined ? _getComparedValue(itemData) : null
        const indexKeyInExp = exp.indexOf(itemData.key)
        if (indexKeyInExp != -1 && (!exp[indexKeyInExp-1] || exp[indexKeyInExp-1] == ' ')) {
          exp = exp.replace(new RegExp(`${itemData.key}${' '}`, 'g'), value)
        }
      }
    }
  }

  try {
    // logData(`eval(${exp}):`, exp)
    // 'SPT.Blow3+SPT.Blow4+SPT.Blow5+SPT.Blow6'
    // NUMBER: eval(1+2+3+4) = 10
    // TEXT: 'SPT.ReportedCalcHelper / SPT.TotalPenetration mm',
    // '10 / 20 mm'
    const result = eval(exp)
    // logData(`eval(${exp}):`, result)
    return result
  } catch (error) {
    logData(`eval(${exp}):`, exp)
    logData('error:', error)
  }

  return false
}

/**
 * Get compared value.
 * @param {*} itemData 
 * @returns 
 */
function _getComparedValue(itemData) {
  switch (itemData.type) {
    case BIT:
      return Boolean(itemData.value.value)
    case NUMBER:
      return Number(itemData.value.value)
    default:
      return `"${itemData.value.value}"`
  }
}

/**
 * Validate displayed feature corresponding to current object data.
 * @param {*} feature the feature.
 * {
 *    name: 'GEOLOGY.Rock1_LayerType',
 *    type: 'QUICKPICK',
 *    displayName: 'Rock Layer Type',
 *    hint: '',
 *    length: 0,
 *    relevant: 'GEOLOGY.LayerClass1 != "Cohesive" || GEOLOGY.LayerClass1 != "Granular"', // this is the displayable condition for validating.
 *    calc: '',
 *    items: Rock1_LayerType,
 *    order: 750,
 * },
 * @param {*} datas The current object data of which feature.
 * @returns true if satisfying relevant condition or relevant is empty.
 */
export function validateDisplayFeature(feature, datas) {
  if (!feature || !feature.relevant) {
    return true
  }

  return validateDisplayCondition(datas, feature.relevant)
}

/**
 * Validate displayable of quickpick item.
 * @param {*} quickpickItem :
 * {
 *    value: 'PQTT',
 *    displayName: 'PQ triple tube (PQTT)',
 *    order: 60,
 *    displayCondition: 'POINT.Type == "RC"', // this is condition for validating.
 *    selected: false,
  * },
 * @param {*} datas: The current object data of evaluting data which include quickpick type of 'quickpickItem'
 * @returns true if satisfying relevant condition or relevant is empty.
 */
export function validateDisplayQuickpickItem(quickpickItem, datas) {
  if (!quickpickItem || !quickpickItem.displayCondition) {
    return true
  }

  return validateDisplayCondition(datas, quickpickItem.displayCondition)
}

/**
 * Validate constraint.
 * @param {*} objectData the current object data.
 * @param {*} condition the relevant condition string.
 * @returns true if satisfying relevant condition or relevant is empty.
 */
export function validateConstraint(datas, condition) {
  return validateDisplayCondition(datas, condition)
}

/**
 * Validate constraint.
 * @param {*} objectData the current object data.
 * @param {*} condition the relevant condition string.
 * @returns true if satisfying relevant condition or relevant is empty.
 */
export function checkXmlLogic(datas, condition) {
  return validateDisplayCondition(datas, condition)
}

/**
 * Get default value calculated by formula.
 * @param {Object} element
 * @param {Array} arrayValues
 */
export function getDefaultValue(element, arrayValues) {
  if (element && element.isDefaultFormula && element.default && element.default.length > 0 
    && (element.type === NUMBER || element.type === TEXT || element.type === MEMO)) {
    return calculateFormula(element, arrayValues, element.default)
  } else {
    return element && element.default ? element.default : null
  }
}

/**
 * remove value of feature relevant in three-pane
 * @param {Array} features
 * @param {Array} arrayValues
 * @param {Object} parentInfo
 */
export function removeValueRelevant(features, arrayValues, parentInfo) {
  const featuresQuickpick =  features.filter(p => ((p.type == QUICKPICK)) && p.relevant)

  featuresQuickpick.forEach(featureQuickpick => {
    let featureValue  = arrayValues.find(p => p.key == featureQuickpick.name)
    
    if (featureValue.value.value) {
      const ItemsOfFeature = !featureQuickpick.items ? [] : featureQuickpick.items.filter(p => !p.displayCondition ||
        validateDisplayQuickpickItem(p, parentInfo.data && parentInfo.data.data ? [arrayValues, parentInfo.data.data] : [arrayValues]))

      const itemfind = ItemsOfFeature.find(p => p.value == featureValue.value.value)
      // remove value feature
      if(featureValue && featureValue.value.value && !itemfind ) {
        console.log(featureQuickpick)
        featureValue.value = {
          id: undefined,
          value: null,
          label: null
        }
      }
    }
  })
}

/**
 * remove value of feature relevant in three-pane
 * @param {Object} feature
 * @param {Array} features
 * @param {Array} arrayValues
 * @param {Object} parentInfo 
 * @returns return string concatenation to show breadcrumb
 */
export const handleValueAndConcatRelevant = async (feature, features, arrayValues, parentInfo) => {
  let concatenation = ''
  if ( feature.relevant && feature.type == QUICKPICK ) {
    await removeValueRelevant(features, arrayValues, parentInfo)
    arrayValues.forEach(element => {
      if (element && element.value && element.value.value) {
        const featureFind = features.find(p => p.name == element.key && p.concatYN)
        if (featureFind) {
          const string = getConcatenateString(featureFind.concatPrefix, element.value.value, featureFind.concatSuffix)
          if(!detectWhiteSpace(string)) concatenation += string
          concatenation = replaceSpaces(concatenation)
        }
      }
    })
  }
  return concatenation
}
// 1. constraint
//   1.1 SQL max length:
//      + alpha numeric: done.
//      + numeric: done
//   1.2 required: done
//   1.3 constraint: Done
// 2. calculation
// 3. relevant: Displayable depending.
// 4. Multipick free text yes/no.
// 5. Multipick max length.
// 6. Multipick concat char.
// 7. parse sub-layer.
// 8. Current index is NOT reset when adding new point.
// 9. Message popup
//    9.1 Remark message
//    9.2 Take photo.