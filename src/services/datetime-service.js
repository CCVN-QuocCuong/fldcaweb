export function dateToString(date) {
    if (date) {
        const day = `0${date.getDate()}`.slice(-2)
        const month = `0${(date.getMonth() + 1)}`.slice(-2)
        const year = date.getFullYear()
    
        return `${day}/${month}/${year}`
    }
    return ''
}

export function dateTimeToString(date) {
    if (date) {
        const day = `0${date.getDate()}`.slice(-2)
        const month = `0${(date.getMonth() + 1)}`.slice(-2)
        const year = date.getFullYear()
        const hours = `0${date.getHours()}`.slice(-2)
        const minutes = `0${date.getMinutes()}`.slice(-2)
        const seconds = `0${date.getSeconds()}`.slice(-2)

        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
    }
    return ''
}

/**
 *  @returns yyyyMMddhhmmss
 */
export function dateTimeToStringXML(date) {
    if (date) {
        const day = `0${date.getDate()}`.slice(-2)
        const month = `0${(date.getMonth() + 1)}`.slice(-2)
        const year = date.getFullYear()
        const hours = `0${date.getHours()}`.slice(-2)
        const minutes = `0${date.getMinutes()}`.slice(-2)
        const seconds = `0${date.getSeconds()}`.slice(-2)

        return `${year}${month}${day}${hours}${minutes}${seconds}`
    }
    return ''
}

/**
 *  @returns ddMMyyyyHHmmss
 */
export function getDatetimeCurrent() {
    const now = new Date()

    const date = `0${now.getDate()}`.slice(-2)
    const month = `0${(now.getMonth() + 1)}`.slice(-2)
    const year = now.getFullYear()
    const hours = `0${now.getHours()}`.slice(-2)
    const minutes = `0${now.getMinutes()}`.slice(-2)
    const seconds = `0${now.getSeconds()}`.slice(-2)
   
    return `${date}${month}${year}${hours}${minutes}${seconds}`
}

export function toIsoString(date) {
    var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function (num) {
            var norm = Math.floor(Math.abs(num))
            return (norm < 10 ? '0' : '') + norm
        }

    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) +
        dif + pad(tzo / 60) +
        ':' + pad(tzo % 60)
}