import { create, all } from 'mathjs'
import { logData } from './logger-service'

// configure the default type of numbers as BigNumbers
const config = {
    // Default type of number
    // Available options: 'number' (default), 'BigNumber', or 'Fraction'
    number: 'BigNumber',
    // Number of significant digits for BigNumbers
    precision: 20
  }
const math = create(all, config)

/**
 *  To calculate values in formulas.
 *  Note: Function `evaluate` accepts a single expression.
 *  @param {String} formula
 *  @returns a numeric or boolean value
 */
export function evalFormula(formula) {
    try {
        if (formula) {
            return math.format(math.evaluate(formula))
        }
    } catch (error) {
        logData('error evalFormula: ', error)
    }
    return false
  }