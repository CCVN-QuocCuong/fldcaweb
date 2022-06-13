import { BIT, DATE, DATETIME, NUMBER, QUICKPICK } from '../config/constants'
import { dateToString, dateTimeToString } from './datetime-service'

/**
 * Get parent level.
 * @param {*} currentLevel The current level. 
 * @returns parent level.
 */
export function getParentLevel(currentLevel) {
  return Math.max(0, currentLevel - 1)
}

export function findAll(listItem, name, level, parent) {
  if (!name) {
    return null
  }

  const classItems = listItem.find(p => p.name === name)

  if (classItems) {
    const objectItems = classItems.items.filter(
      p => (
              (p.parent && p.parent.id && parent.id && (p.parent.id === parent.id)) 
           || (!parent.id && (!p.parent || !p.parent.id))
        ) && (parent.feature ? parent.feature === p.parent.feature : true))
    return objectItems ? objectItems : []
  }

  return []
}

export function getParentOfAnObject(listItem, id, name) {
  const currentObj = getObjectById(listItem, id, name)

  if (currentObj) {
    return currentObj.parent
  }

  return null
}

/**
 *  Get random ID
 */
export function getObjectById(listItem, objectId, objectName, isCloned = false) {
  if (!objectName || !objectId) {
    return null
  }

  const classItem = listItem.find(p => p.name === objectName)

  if (classItem) {
    const objectItem = classItem.items.find(p => p.key === objectId)
    return isCloned ? cloneObject(objectItem) : objectItem
  }

  return null
}

/**
 *  Get random ID
 */
 export function getObjectByParentId(listItem, parentId, objectName, isCloned = false) {
  if (!objectName || !parentId) {
    return null
  }

  const classItem = listItem.find(p => p.name === objectName)

  if (classItem) {
    const objectItems = classItem.items.filter(p => p.parent && p.parent.id === parentId)

    if (objectItems) {
      return objectItems.map(p => { 
        return isCloned ? cloneObject(p) : p
      })
    }
  }

  return null
}

/**
 * Delete reference data.
 * @param {*} listItem datasource
 * @param {*} parentId parent id.
 * @param {*} parentName parent name.
 */
export function deleteReferenceData(listItem, parentId, parentName, isTemp = false) {
  // find children class with parent name = parentName
  const classItems = listItem.filter(p => p.parentName === parentName)

  if (classItems && classItems.length > 0) {
    // loop class.
    for (const classItem of classItems) {
      if (!classItem.items || classItem.items.length == 0) {
        continue
      }

      // find children items by parent-id = parentId
      const deletedItems =  classItem.items.filter(p => p.parent && (p.parent.id === parentId) && (!isTemp || p.temp || p.parent.temp))

      // only delete reference data when existing deleted item.
      if (deletedItems && deletedItems.length > 0) {
        _deleteReferenceOfItems(listItem, deletedItems, classItem.name)
        classItem.items = classItem.items.filter(p => !(p.parent && (p.parent.id === parentId) && (!isTemp || p.temp || p.parent.temp)))
      }
    }
  }
}

/**
 * Delete reference items of these items.
 * @param {*} listItem datasource.
 * @param {*} items deleted items.
 * @param {*} itemName deleted item name.
 * @returns 
 */
function _deleteReferenceOfItems(listItem, items, itemName) {
  if (!items || items.length === 0) {
    return
  }

  for (const item of items) {
    deleteReferenceData(listItem, item.key, itemName)
  }
}

/**
 * Clone an object.
 * @param {*} thisObject this object. 
 * @returns an cloned object.
 */
export function cloneObject(thisObject) {
  let clonedObject = null

  if (thisObject instanceof Array) {
    clonedObject = cloneArray(thisObject)
  } else if (thisObject instanceof Object) {
    clonedObject = {}

    for (const key in thisObject) {
      clonedObject[key] = cloneObject(thisObject[key])
    }
  } else {
    clonedObject = thisObject
  }

  return clonedObject
}

/**
 * Clonse an array.
 * @param {*} thisObject this array. 
 * @returns cloned array.
 */
export function cloneArray(thisObject) {
  if (thisObject == null) {
    return null
  }

  if (!(thisObject instanceof Array)) {
    return null
  }

  let clonedObject = []

  for (const item of thisObject) {
    clonedObject.push(cloneObject(item))
  }

  return clonedObject
}

export function popFeatureStack(featureStack) {
  return featureStack && featureStack.length > 0 ? featureStack.pop() : null
}

export function pushFeatureStack(featureStack, featureStackItem) {
  if(!featureStack) {
    featureStack = []
  }

  featureStack.push(featureStackItem)
}

/**
 * Delete temp datas which are corresponding to parent id.
 * @param {*} listItem list data items.
 * @param {*} parentId the parent id.
 * @param {*} parentName the parent name.
 */
export function deleteTempStorage(listItem, parentId, parentName) {
  deleteReferenceData(listItem, parentId, parentName, true)
}

/**
 * Clear temp tracking of reference data.
 * @param {*} listItem datasource
 * @param {*} parentId parent id.
 * @param {*} parentName parent name.
 */
 export function clearTempTracingStorage(listItem, parentId, parentName) {
  // find children class with parent name = parentName
  const classItems = listItem.filter(p => p.parentName === parentName)

  if (classItems && classItems.length > 0) {
    // loop class.
    for (const classItem of classItems) {
      if (!classItem.items || classItem.items.length == 0) {
        continue
      }

      // find children items by parent-id = parentId
      const clearTrackingItems =  classItem.items.filter(p => p.parent && (p.parent.id === parentId) && (p.temp || p.parent.temp))

      // clear temp tracking of sub-items.
      if (clearTrackingItems && clearTrackingItems.length > 0) {
        _clearTempTrackingReferenceOfItems(listItem, clearTrackingItems, classItem.name)
      }
    }
  }
}

/**
 * Clear reference items of these items.
 * @param {*} listItem datasource.
 * @param {*} items deleted items.
 * @param {*} itemName deleted item name.
 * @returns 
 */
function _clearTempTrackingReferenceOfItems(listItem, items, itemName) {
  if (!items || items.length === 0) {
    return
  }

  for (const item of items) {
    // clear tracking temp.
    if (item.parent) {
      item.parent.temp = undefined
    }

    item.temp = undefined

    // clear sub-items.
    clearTempTracingStorage(listItem, item.key, itemName)
  }
}

export function getAddKeyNavigation(objectName) {
  return `Add-${objectName}`
}

export function getGridKeyNavigation(objectName) {
  return `Grid-${objectName}`
}

export function getMenuKeyNavigation(objectName) {
  return `Menu-${objectName}`
}

export function getText(type, value) {
  switch (type) {
    case DATE:
      return value && dateToString(new Date(value))
    case DATETIME:
      return value && dateTimeToString(new Date(value))
    default:
      return value
  }
}

/**
   * Get default value of a feature.
   * @param {*} feature the current feature.
   * @returns default value of a feature.
   */
 export function buildDefaultArrayItem(feature) {
  let value = feature.default != null && feature.default != undefined ? feature.default : null
  let label = value

  if (value && feature.type === QUICKPICK) {
    const dataItem = feature.items.find(p => p.value === feature.default)

    if (dataItem) {
      label = dataItem.displayName ? dataItem.displayName : null
    } else {
      value = null
    }
  }

  let itemValue = {
    key: feature.name,
    type: feature.type,
    value: {
      value: value,
      label: label
    }
  }

  if (feature.type === QUICKPICK) {
    itemValue.value.id = feature.guid
  }

  return itemValue
}

  /**
   * get value by type.
   * @param {*} value 
   * @param {*} type 
   * @returns 
   */
   export function getValueByType(value, type) {
    switch (type) {
      case BIT:
        return Boolean(value)
      case NUMBER:
        return Number(value)
      default:
        return value
    }
  }

  /**
 * Remove value date and datetime
 * @param {Array} arrayValues 
 * @param {Object} feature 
 * @param {Function} setArrayValues 
 * @param {Function} checkRequired 
 */
  export function removeValueDate(arrayValues, feature, setArrayValues, checkRequired) {
    let propItem = arrayValues.find(p => p.key === feature.name)
    if (propItem) {
      propItem.value = { value: null, label: null}
      setArrayValues(arrayValues)
    }
    if (feature.required) {
      checkRequired(arrayValues)
    }
  }
  