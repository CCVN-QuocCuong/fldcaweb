import React, { useState, useEffect } from 'react'
import TwoPaneFormComponent from '../components/TwoPaneFormComponent'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { generateObjectID } from '../services/helpers'
import { buildDefaultArrayItem, getObjectById } from '../services/data-service'
import { getDefaultValue } from '../services/relevant-service'
import { GUID, MACADDR } from '../config/constants'
import DeviceInfo from 'react-native-device-info'

export default function AddFormScreen() {
  const route = useRoute()
  const { dataSource, objectID, parent, parentScreen, arrayValue, isCopyLayer } = route.params

  // for sub-features.
  const featureStack = useSelector(state => state.app.featureStack)
  
  const listItem = useSelector(state => state.app.listItem)

  const [arrayValues, setArrayValues] = useState([])
  let thisObject = getObjectById(listItem, objectID, dataSource.name, true)

  // get parent reference object.
  let parentObject = getObjectById(listItem, parent.id, dataSource.parent)

  if (featureStack && featureStack.length > 0) {
    const parentData = featureStack[featureStack.length - 1]

    if (parentData && parentData.dataSource && parentData.dataSource.name === parent.name) {
      const parentItemId = parentData.data ? parentData.data.find(p => p.key === 'ID') : null
      const parentId = parentItemId && parentItemId.value ? parentItemId.value.value : null
  
      parentObject = {
        key: parentId,
        parent: {
          id: parentId,
          name: parentData.dataSource.name,
          level: parentData.dataSource.level
        },
        data: parentData.data
      }
    }
  }

  let parentInfo = {
    id: parent.id,
    name: dataSource.parent,
    data: parentObject ? parentObject : {}
  }
  
  useEffect(() => {
    if(arrayValue && arrayValue.length > 0) setArrayValues(arrayValue)
  }, [arrayValue])

  if(arrayValues.length < 1) {
    if (!thisObject) {
      // add values.
      const uid = generateObjectID()
      arrayValues.push({ key: 'ID', value: { value: uid, label: uid } })

      const refDataValues = parentInfo && parentInfo.data && parentInfo.data.data ? parentInfo.data.data : arrayValues

      dataSource.navigation.add.features.forEach(feature => {
        const arrayItem = buildDefaultArrayItem(feature)
        
        if (feature.isDefaultFormula) {
          arrayItem.value.value = getDefaultValue(feature, refDataValues)
          arrayItem.value.label = arrayItem.value.value
        }

        addItemToArray(arrayValues, arrayItem)
        if(parentInfo && parentInfo.data && parentInfo.data.data) refDataValues.push(arrayItem)
      })
    } else {
      if (thisObject.data instanceof Array) {
        for (const dataItem of thisObject.data) {
          // add type to item in case item don't have.
          if (!dataItem.type && dataItem.key !== 'ID') {
            addTypeToItem(dataItem)
          }

          if (isCopyLayer && dataItem && dataItem.key && dataItem.key === 'ID') {
            const uidCopyLayer = generateObjectID()
            dataItem.value = { value: uidCopyLayer, label: uidCopyLayer }
          }

          const ignoreCopyExisted = dataSource.navigation.add.features.find(p => p.ignoreCopy && p.name === dataItem.key)

          if(isCopyLayer && ignoreCopyExisted){
            if(!ignoreCopyExisted.default) dataItem.value = { value: null, label: null }
          }

          addItemToArray(arrayValues, dataItem)
        }
      }
    }
  }
  
  // Add GUID and MAC address 
  const uniqueId = DeviceInfo.getUniqueId()
  if (arrayValues && arrayValues instanceof Array) {
    const dataFeatures =  arrayValues.filter(p => p.type === GUID || p.type === MACADDR) 
    if (dataFeatures && dataFeatures.length > 1) {
      const itemID = arrayValues.find(p => p.key === 'ID')
      const objectId = itemID && itemID.value ? itemID.value.value : null
      for (const dataFeature of arrayValues) {
        if (dataFeature.type === GUID) {
          dataFeature.value = { value: objectId, label: objectId }
        } else if (dataFeature.type === MACADDR) {
          dataFeature.value = { value: uniqueId, label: uniqueId }
        }
      }
    }
  }

  /**
   * Add type to item.
   * @param {*} dataItem 
   */
  function addTypeToItem(dataItem) {
    const featureItem = dataSource.navigation.add.features.find(p => p.name === dataItem.key)

    if (featureItem) {
      dataItem.type = featureItem.type
    }
  }
  
  /**
   * add item to array.
   * @param {*} array the array object.
   * @param {*} item new item.
   * @returns no return.
   */
  function addItemToArray(array, item) {
    if (!item) {
      return
    }

    if (!array || !(array instanceof Array)) { 
      array = []
    }

    const foundItem = array.find(p => p.key === item.key)
    if (foundItem) {
      foundItem.value = item.value
    } else {
      array.push(item)
    }
  }

  return (
    <TwoPaneFormComponent
    thisObject={{
      parentInfo: parentInfo,
      listItem: listItem,
      dataSource: dataSource,
      objectID: objectID,
      parent: parent,
      parentScreen: parentScreen,
      arrayValue:arrayValue,
    }}
    arrayValues={arrayValues}
    setArrayValues={setArrayValues}
    />
  )
}
