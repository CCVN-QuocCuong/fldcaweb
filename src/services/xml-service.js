import {DATE, DATETIME, QUICKPICK, IMAGE, BIT} from '../config/constants'
import {XmlRef, XmlRoot} from '../config/xmlSchema'
import {getObjectById, getObjectByParentId} from './data-service'
import {toIsoString} from './datetime-service'
import {logData} from './logger-service'
import {checkXmlLogic} from './relevant-service'
import {getBase64String} from './helpers'

/**
 * Project workflow name.
 */
const PROJECT_NAME = 'PROJECT'

/**
 * Point workflow name.
 */
const POINT_NAME = 'POINT'

/**
 * point id key.
 */
const POINT_ID = 'POINT.POINT_ID'

/**
 * Generate xml for a point.
 * @param {*} listItem reference data of the application.
 * @param {*} pointId The point id.
 * @param {boolean} isChecked To check attach all photos.
 * @returns xml string of point-id.
 */
export async function genXml(listItem, pointId, isChecked) {
  try {
    const xml =  XmlRoot.version +
      XmlRoot.xmlStart +
      (await _genContentXml(listItem, pointId, isChecked)) +
      XmlRoot.xmlEnd
    // logData('xml', xml)
    return xml
  } catch (error) {
    logData('error', error)
  }

  return null
}

/**
 * Generate content of this point.
 * @param {*} listItem list of items.
 * @param {*} pointId the point id.
 * @param {boolean} isChecked To check attach all photos.
 * @returns string of xml data.
 */
async function _genContentXml(listItem, pointId, isChecked) {
  let xmlString = ''

  // logData('pointId', pointId)
  // find point.
  const point = getObjectById(listItem, pointId, POINT_NAME)
  if (!point) {
    return ''
  }

  // logData('point.parent.id', point.parent.id)

  // find project.
  const project = getObjectById(listItem, point.parent.id, PROJECT_NAME)
  if (!project) {
    return ''
  }

  // logData('project', project)
  const pointIdItem = point.data.find(p => p.key === POINT_ID)
  const pointIdValue = pointIdItem.value.value

  for (const refItem of XmlRef) {
    if (refItem.name === PROJECT_NAME) {
      xmlString =
        xmlString +
        (await _genClassXml(project, refItem.schema, pointIdValue, isChecked))
    } else if (refItem.name === POINT_NAME) {
      xmlString =
        xmlString +
        (await _genClassXml(point, refItem.schema, pointIdValue, isChecked))
    } else {
      let datas = []

      if (refItem.parent === POINT_NAME) {
        datas = getObjectByParentId(listItem, point.key, refItem.name)
      } else {
        datas = _getBranchDataOfPoint(listItem, point.key, refItem.name)
      }

      if (datas && datas instanceof Array) {
        for (const dataItem of datas) {
          xmlString =
            xmlString +
            (await _genClassXml(
              dataItem,
              refItem.schema,
              pointIdValue,
              isChecked,
            ))
        }
      }
    }
  }

  return xmlString
}

/**
 * Get branch data of a point.
 * @param {*} listItem the list item.
 * @param {*} pointId the point id.
 * @param {*} workflow the workflow.
 * @returns list of datas.
 */
function _getBranchDataOfPoint(listItem, pointId, workflow) {
  let result = []

  // find the path to this workflow.
  let workflowPath = _getWorkflowPath(workflow)

  if (workflowPath) {
    let parentIds = [pointId]

    for (let index = 0; index < workflowPath.length - 1; index++) {
      parentIds = _getParents(listItem, workflowPath[index], parentIds)
    }

    parentIds.forEach(p => {
      const data = getObjectByParentId(listItem, p, workflow)

      if (data) {
        result = [...result, ...data]
      }
    })
  }

  return result
}

/**
 * Get data by parent id.
 * @param {*} listItem the list of item.
 * @param {*} workflowName workflow name.
 * @param {*} parentIds the parent ids.
 * @returns list of data.
 */
function _getParents(listItem, workflowName, parentIds) {
  if (!parentIds) {
    return []
  }

  let result = []

  for (const parentId of parentIds) {
    const data = getObjectByParentId(listItem, parentId, workflowName)

    if (data) {
      result = [...result, ...data.map(p => p.key)]
    }
  }

  return result
}

/**
 * Get workflow path
 * Point -> DPR_Setup -> DPR_Data
 * @param {*} workflow the workflow name. 
 * @returns 
 */
function _getWorkflowPath(workflow) {
  if (workflow === PROJECT_NAME || workflow === POINT_NAME) {
    return [] 
  }

  const xmlElement = XmlRef.find(p => p.name === workflow)
  let newWorkflow = []

  if (xmlElement) {
    if (xmlElement.parent !== POINT_NAME) {
      newWorkflow = _getWorkflowPath(xmlElement.parent)

      if (newWorkflow !== null) {
        return [...newWorkflow, ...[xmlElement.name]]
      }
    } else {
      return [xmlElement.name]
    }
  }

  return newWorkflow
}

/**
 * Generate xml content for a class like PROJECT, POINT, CONSTRUCTION, ...
 * @param {*} objectData The object data.
 * @param {*} refItem reference item
 * @param {boolean} isChecked To check attach all photos.
 * @returns xml string of this class.
 */
async function _genClassXml(objectData, refItem, pointValue, isChecked) {
  if (!objectData) {
    return ''
  }

  let xml = _text(refItem.xmlStart)

  if (refItem.features && refItem.features instanceof Array) {
    for (const feature of refItem.features) {
      xml =
        xml +
        (await _genFeatureXml(feature, objectData, pointValue, isChecked))
    }
  }

  xml = xml + _text(refItem.xmlEnd)

  return xml
}

/**
 * Generate xml feature.
 * @param {*} feature
 * @param {*} objectData
 * @returns
 */
async function _genFeatureXml(
  feature,
  objectData,
  pointValue,
  isChecked = false,
) {
  let xml = ''

  let isGoodLogic = true
  if (feature.logic) {
    isGoodLogic = checkXmlLogic([objectData.data], feature.logic)
  }

  if (isGoodLogic) {
    if (feature.children && feature.children.length > 0) {
      const childrenXml = await _genFeatureChildrenXml(
        feature,
        objectData,
        pointValue,
      )
      xml =
        feature.xmlStart +
        (!feature.isEncode ? childrenXml : await _encodeXml(childrenXml)) +
        feature.xmlEnd
    } else {
      xml = await _genFeatureNormalXml(
        feature,
        objectData,
        pointValue,
        isChecked,
      )
    }
  }

  return xml
}

/**
 * Generate xml of feature with having children property.
 * @param {*} feature the feature info (in xml config)
 * @param {*} objectData corresponding data object.
 */
async function _genFeatureChildrenXml(feature, objectData, pointValue) {
  let xml = ''

  for (const childFeature of feature.children) {
    xml = xml + (await _genFeatureXml(childFeature, objectData, pointValue))
  }

  return xml
}

/**
 * Generate xml with normal case.
 * @param {*} feature the feature info (in xml config)
 * @param {*} objectData corresponding data object.
 * @param {boolean} isChecked To check attach all photos.
 */
async function _genFeatureNormalXml(
  feature,
  objectData,
  pointValue,
  isChecked,
) {
  let xml = ''

  if (!feature.name) {
    return (
      _text(feature.xmlStart) + _text(feature.value) + _text(feature.xmlEnd)
    )
  } else if (feature.name === POINT_ID) {
    return _text(feature.xmlStart) + pointValue + _text(feature.xmlEnd)
  }

  if (objectData.data instanceof Array) {
    const dataItem = objectData.data.find(p => p.key === feature.name)

    if (!dataItem) {
      logData('[Error] Not exist feature name: ', feature.name)
    }

    if (feature.exportYN && getValueDataItem(dataItem, feature)) {
      // quickpick has exceptional process because must add key like GEO_ID for GEOLOGY & GeologyDetail.
      switch (feature.type) {
        case QUICKPICK:
          xml = _genQuickpickXml(feature, dataItem)
          break
        case DATE:
        case DATETIME:
          xml = _genDateTimeXml(feature, dataItem)
          break
        case IMAGE:
          xml = await _genImageXml(feature, dataItem, isChecked)
          break
        case BIT:
          xml = _genBitXml(feature, dataItem)
          break
        default:
          xml = _genNormalXml(feature, dataItem)
          break
      }
    }
  }

  return xml
}

/**
 * Get value dataItem.
 * @param {Object} dataItem key and value of the feature.
 */
function getValueDataItem(dataItem, feature) {
  if (feature.type === IMAGE) {
    if (dataItem && dataItem.value && dataItem.value.length > 0) {
      return true
    }
  }
  if (dataItem && dataItem.value && dataItem.value.value) {
    return true
  }
  return false
}

/**
 * Get text with quickpick feature.
 * @param {*} feature feature config.
 * @param {*} dataItem Data item.
 * @returns xml
 */
function _genDateTimeXml(feature, dataItem) {
  const value = _itemValue(dataItem)
  return (
    _text(feature.xmlStart) +
    _text(feature.value) +
    (value ? toIsoString(new Date(value)) : '') +
    _text(feature.xmlEnd)
  )
}

/**
 * Get text with quickpick feature.
 * @param {*} feature feature config.
 * @param {*} dataItem Data item.
 * @returns xml
 */
function _genQuickpickXml(feature, dataItem) {
  let xml = ''

  // key_value.
  if (
    !_isEmpty(feature.xmlStart) &&
    !_isEmpty(feature.value) &&
    !_isEmpty(feature.xmlEnd)
  ) {
    xml =
      _text(feature.xmlStart) + // start element
      _getQuickpickId(dataItem) + // quickpick id.
      _text(feature.value) + // close key & open value element
      _itemValue(dataItem) + // quickpick value
      _text(feature.xmlEnd) // close element
  } else {
    xml =
      _text(feature.xmlStart) + // start element
      _text(feature.value) + // close key & open value element
      _itemValue(dataItem) + // value
      _text(feature.xmlEnd) // close element
  }

  return xml
}
/**
 * Get image xml.
 * @param {*} feature
 * @param {*} dataItem
 * @param {boolean} isChecked To check attach all photos.
 * @returns string of text.
 */
async function _genImageXml(feature, dataItem, isChecked) {
  if (isChecked)
    return (
      _text(feature.xmlStart) + // start element
      _text(feature.value) + // close key & open value element
      (await _itemImageValue(dataItem)) + // value
      _text(feature.xmlEnd)
    ) // close element
  return ''
}

/**
 * Get value of bit xml.
 * @param {*} feature
 * @param {*} dataItem
 * @returns string of text.
 */
function _genBitXml(feature, dataItem) {
  return (
    _text(feature.xmlStart) + // start element
    _text(feature.value) + // close key & open value element
    _itemBitValue(dataItem) + // value
    _text(feature.xmlEnd)
  ) // close element
}

/**
 * Get text normal.
 * @param {*} feature
 * @param {*} dataItem
 * @returns string of text.
 */
function _genNormalXml(feature, dataItem) {
  return (
    _text(feature.xmlStart) + // start element
    _text(feature.value) + // close key & open value element
    _itemValue(dataItem) + // value
    _text(feature.xmlEnd)
  ) // close element
}

/**
 * Encode xml.
 * @param {*} xml original
 * @returns xml string with encoding.
 */
function _encodeXml(xml) {
  return xml.replace(/</gi, '&lt;').replace(/>/gi, '&gt;')
}

/**
 * get quickpick id.
 * @param {*} dataItem the data item.
 * @returns id of quickpick.
 */
function _getQuickpickId(dataItem) {
  return dataItem && dataItem.value && dataItem.value.id
    ? dataItem.value.id
    : ''
}

/**
 * get value of an item.
 * @param {*} dataItem the data item.
 * @returns text valua of data item.
 */
function _itemValue(dataItem) {
  return dataItem && dataItem.value && dataItem.value.value
    ? dataItem.value.value
    : ''
}

/**
 * get value of an item with type BIT.
 * @param {*} dataItem the data item.
 * @returns text valua of data item.
 */
function _itemBitValue(dataItem) {
  return dataItem && dataItem.value && dataItem.value.value
    ? String(dataItem.value.value).toLowerCase()
    : ''
}

/**
 * Get image value of an item.
 * @param {*} dataItem the data item.
 * @returns text Base64String of data item.
 */
async function _itemImageValue(dataItem) {
  if (dataItem && dataItem.value && dataItem.value.length > 0) {
    return await getBase64String(dataItem.value[0].value)
  }
  return ''
}

/**
 * Get text of in item.
 * @param {*} item the item.
 * @returns text of this item.
 */
function _text(item) {
  return item ? item : ''
}

/**
 * Check empty value.
 * @param {*} str string for checking.
 * @returns true if empty, else return true.
 */
function _isEmpty(str) {
  return !str || str.trim() === ''
}
