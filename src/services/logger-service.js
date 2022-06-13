const enableLog = true

export function logData(param1, param2) {
  if (enableLog) {
    if (param2 && (param2 instanceof Object)) {
      console.log(param1, JSON.stringify(param2))
    } else {
      console.log(param1, param2)
    }
  }
}

