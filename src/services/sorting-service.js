import { SORT_ASC, UNSORTED } from '../config/constants'
import moment from 'moment'

/**
 *  Sort array by text
 *  @param {Array} sortArray
 *  @param {String} sortProperty
 *  @param {String} typeSort
 */
export function sortByText(sortArray, sortProperty, typeSort) {
    return [...sortArray].sort((a, b) => {
        var nameA = a[sortProperty] ? a[sortProperty].toUpperCase() : null// ignore upper and lowercase
        var nameB = b[sortProperty] ? b[sortProperty].toUpperCase() : null // ignore upper and lowercase

        if (typeSort === SORT_ASC || typeSort === UNSORTED) {
            // sort by ascending
            if ( nameA === null) return -1
            if ( nameB === null) return 1
            if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }
        } else {
            // sort by descending
            if ( nameA === null) return 1
            if ( nameB === null) return -1
            if (nameA > nameB) {
                return -1
            }
            if (nameA < nameB) {
                return 1
            }
        }
        return 0
    })
}

/**
 *  Sort array by number
 *  @param {Array} sortArray
 *  @param {String} sortProperty
 *  @param {String} typeSort
 */
export function sortByNumber(sortArray, sortProperty, typeSort) {
    if (typeSort === SORT_ASC || typeSort === UNSORTED) {
        // sort by ascending
        return [...sortArray].sort((a, b) => a[sortProperty] - b[sortProperty])
    } else {
        // sort by descending
        return [...sortArray].sort((a, b) => b[sortProperty] - a[sortProperty])
    }
}

/**
 *  Sort array by date
 *  @param {Array} sortArray
 *  @param {String} sortProperty
 *  @param {String} typeSort
 */
export function sortByDate(sortArray, sortProperty, typeSort) {
    if (typeSort === SORT_ASC || typeSort === UNSORTED) {
        // sort by ascending
        return [...sortArray].sort((a, b) => new Date(...moment(a[sortProperty]).format('DD/MM/YYYY').split('/').reverse()) - new Date(...moment(b[sortProperty]).format('DD/MM/YYYY').split('/').reverse()))
    } else {
        // sort by descending
        return [...sortArray].sort((a, b) => new Date(...moment(b[sortProperty]).format('DD/MM/YYYY').split('/').reverse()) - new Date(...moment(a[sortProperty]).format('DD/MM/YYYY').split('/').reverse()))
    }
}

