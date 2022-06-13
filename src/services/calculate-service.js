import { NUMBER } from '../config/constants'
import { logData } from './logger-service'

/**
 * order depend features.
 * @param {*} features list of features.
 * @returns 
 */
function _orderDependedFeature(features) {
  // A -> B -> C -> D -> E
  let result = []
  let subDepend = []

  features.forEach(p => {
    if (p.dependCalc instanceof Array) {
      let isDepend = false
      for (const fp of p.dependCalc) {
        if (features.find(p1 => p1.name === fp)) {
          isDepend = true
          break
        }
      }

      if (!isDepend) {
        result.push(p)
      } else {
        subDepend.push(p)
      }
    }
  })

  if (subDepend.length > 0) {
    result = [...result, ..._orderDependedFeature(subDepend)]
  }
  
  return result
}

/**
 * Update values calculated by formula.
 * @param {Array} arrayFormulaOfFeatures
 * @param {Array} arrayValues
 */
export function updateResultCalculatedByFormula(arrayFormulaOfFeatures, arrayValues) {
  try {
    // order depend.
    const orderFeatures = _orderDependedFeature(arrayFormulaOfFeatures)

    orderFeatures.forEach(element => {
      const result = calculateFormula(element, arrayValues, element.calc)

      if (result != null) {
        const valueItem = arrayValues.find(p => p.key === element.name)

        if (valueItem) {
          valueItem.value = { value: result, label: result }
        }
      }
    })
  } catch (error) {
    logData('arrayFormulaOfFeatures error:', error)
  }
}

/**
 * Calculate formula.
 * @param {*} element 
 * @param {*} arrayValues 
 * @param {*} expression 
 * @returns 
 */
export function calculateFormula(element, arrayValues, expression) {
  try {
    let formula = expression

    arrayValues.forEach(e => {
      const value = e.value.value ? e.value.value : 0
      formula = formula.replace(new RegExp(e.key, 'g'), value)
    })

    if (element.type === NUMBER) {
      if (element.isFloat) {
        // return type float
        if (element.length === 0) {
          return String((Math.round(eval(formula) * 100) / 100))
        } else if (!element.pad || element.pad === 0) {
          return String(Math.round(eval(formula)))
        } else {
          return String(eval(formula).toFixed(element.pad))
        }
      } else {
        // return type int
        return String(Math.round(eval(formula)))
      }
    } else {
      return formula
    }
  } catch (error) {
    logData('calculateFormula error:', error)
    return null
  }
}

