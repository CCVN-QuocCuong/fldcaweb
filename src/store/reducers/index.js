/* eslint-disable consistent-return */
import { handleActions } from 'redux-actions'
import initState from '../initState'
import { logData } from '../../services/logger-service'
import {
  setIsProcessing,
  setOriginalPointType,
  decrement,
  increment,
  addRecord,
  deleteRecord,
  deletePointRecord,
  saveFeatureStack,
  pushFeatureStack,
  emptyStorage,
  setTypeSort,
  setHeaderKey,
  setHeaderKeyMultiSort,
  setDataSortingDefault,
  setIndexSortingDefault,
  setListImage,
} from '../actions'
import { deleteReferenceData, cloneObject } from '../../services/data-service'

export default handleActions(
  {
    [setIsProcessing]: (state, { payload: { isProcessing } }) => ({
      ...state,
      isProcessing
    }),
    [setOriginalPointType]: (state, { payload: { originalPointType } }) => ({
      ...state,
      originalPointType
    }),
    [decrement]: (state, { payload: { step } }) => {
      let { counter } = state
      counter -= step
      return {
        ...state,
        counter,
      }
    },
    [increment]: (state, { payload: { step } }) => {
      let { counter } = state
      counter += step
      return {
        ...state,
        counter,
      }
    },
    /**
     *  
     * @param {String} name
     * @param {Number} level
     * @param {String} parent
     * @param {Array} record
     */
    [addRecord]: (state, { payload: { name, level, parent, record } }) => {
      let { listItem } = state

      if (record && record.length > 0) {
        const idProp = record.find(t => t.key === 'ID')

        if (idProp) {
          let item = {
            key: idProp.value.value,
            parent: parent,
            temp: parent.temp ? parent.temp : undefined,
            data: cloneObject(record)
          }

          let selectedElement = listItem.find(p => p.name === name)

          // First adding for this kind of object.
          if (!selectedElement) {
            listItem.push({
              name: name,
              parentName: parent ? parent.name : null,
              level: level,
              items: [item],
            })
          } else {
            // Second time of adding this object.
            const existedItem = selectedElement.items.find(p => p.key === item.key)

            if (existedItem) {
              existedItem.data = item.data
            } else {
              selectedElement.items.push(item)
            }
          }
        }

        listItem = [...listItem]
        return {
          ...state,
          listItem,
        }
      }
    },
    /**
     *  Delete record on Grid Form
     * @param {String} objectName
     * @param {String} objectID
     */
    [deleteRecord]: (state, { payload: { objectName, objectID } }) => {
      let { listItem } = state
      const selectedObjects = listItem.filter(p => p.name === objectName)
      if (selectedObjects && selectedObjects.length > 0) {
        // delete reference record.
        deleteReferenceData(listItem, objectID, objectName)

        selectedObjects[0].items = selectedObjects[0].items.filter(p => p.key !== objectID)
      }
      listItem = [...listItem]
      return {
        ...state,
        listItem,
      }
    },
     /**
     *  Delete all child records of this point when users change POINT.TYPE
     *  Note: Keep Point data and delete all child records of this point 
     * @param {String} objectName
     * @param {String} objectID
     */
    [deletePointRecord]: (state, { payload: { objectName, objectID } }) => {
      let { listItem } = state
      const selectedObjects = listItem.filter(p => p.name === objectName)
      if (selectedObjects && selectedObjects.length > 0) {
        // delete reference record.
        deleteReferenceData(listItem, objectID, objectName)
      }
      listItem = [...listItem]
      return {
        ...state,
        listItem,
      }
    },
    [saveFeatureStack]: (state, { payload: { newFeatureStack } }) => {
      return {
        ...state,
        featureStack: newFeatureStack,
      }
    },
    [pushFeatureStack]: (state, { payload: { featureStackItem } }) => {
      let { featureStack } = state
      if(!featureStack) featureStack = []
        featureStack.push(featureStackItem)
      return {
        ...state,
        featureStack,
      }
    },
    [emptyStorage]: (state) => {
      logData('Go', 'Empty Storage')
      let { listItem } = state
      listItem = []
      
      return {
        ...state,
        listItem,
      }
    },
    [setTypeSort]: (state, { payload: { typeSort } }) => ({
      ...state,
      typeSort
    }),
    [setHeaderKey]: (state, { payload: { headerKey } }) => ({
      ...state,
      headerKey
    }),
    [setHeaderKeyMultiSort]: (state, { payload: { headerKeyMultiSort } }) => ({
      ...state,
      headerKeyMultiSort
    }),
    [setDataSortingDefault]: (state, { payload: { dataSortingDefault } }) => ({
      ...state,
      dataSortingDefault
    }),
    [setIndexSortingDefault]: (state, { payload: { indexSortingDefault } }) => ({
      ...state,
      indexSortingDefault
    }),
    [setListImage]: (state, { payload: { itemImage } }) => {
      let { listImage } = state
      listImage.push(itemImage)
      listImage = [...listImage]
      return {
        ...state,
        listImage,
      }
    },
  },
  initState.app,
)
