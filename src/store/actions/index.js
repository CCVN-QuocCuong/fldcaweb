import { createActions } from 'redux-actions'

const {
    setIsProcessing,
    setOriginalPointType,
    increment,
    decrement,
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
  } = createActions({
    SET_IS_PROCESSING: (isProcessing) => ({ isProcessing }),
    SET_ORIGINAL_POINT_TYPE: (originalPointType) => ({ originalPointType }),
    INCREMENT: (step) => ({ step }),
    DECREMENT: (step) => ({ step }),
    ADD_RECORD: (name, level, parent, record) => ({name, level, parent,  record}),
    DELETE_RECORD: (objectName, objectID) => ({ objectName, objectID }),
    DELETE_POINT_RECORD: (objectName, objectID) => ({ objectName, objectID }),
    SAVE_FEATURE_STACK: (newFeatureStack) => ({ newFeatureStack }),
    PUSH_FEATURE_STACK: (featureStackItem) => ({ featureStackItem }),
    EMPTY_STORAGE: () => ({}),
    SET_TYPE_SORT: (typeSort) => ({ typeSort }),
    SET_HEADER_KEY: (headerKey) => ({ headerKey }),
    SET_HEADER_KEY_MULTI_SORT: (headerKeyMultiSort) => ({ headerKeyMultiSort }),
    SET_DATA_SORTING_DEFAULT: (dataSortingDefault) => ({ dataSortingDefault }),
    SET_INDEX_SORTING_DEFAULT: (indexSortingDefault) => ({ indexSortingDefault }),
    SET_LIST_IMAGE: (itemImage) => ({itemImage}),
  }, {
    prefix: 'app'
  })
  
  export {
    setIsProcessing,
    setOriginalPointType,
    increment,
    decrement,
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
  }
  
