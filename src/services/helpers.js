/* eslint-disable consistent-return */
import uuid from 'react-native-uuid'
import RNFS from 'react-native-fs'
import { Dimensions, Platform } from 'react-native'
import { MAX_FEATURES_ON_GRID,TEXT, QUICKPICK, CONCAT, DATE, DATETIME, NUMBER, BIT, 
  MULTIPICK, TEXT_WIDTH, MULTIPICK_WIDTH, QUICKPICK_WIDTH, CONCAT_WIDTH,
  NUMBER_WIDTH, BIT_WIDTH, DATE_WIDTH, DATETIME_WIDTH, MAX_LENGTH, MAX_LENGTH_NUMERIC, MEMO} from '../config/constants'
import { getFeatureByName } from './workflow-service'
import { FormType } from '../config/formtype'
import Orientation, { LANDSCAPE } from 'react-native-orientation-locker'

/**
 *  Get random ID
 */
export function generateObjectID() {
    // ⇨ '11edc52b-2918-4d71-9058-f7285e29d894'
    return  uuid.v4()
}

/**
 *   When user go back with param level always > 0
 * @param {String} name
 * @param {Number} level
 * @param {Array} workflow
 */
export function getParentConfig(workflow, level, name) {
    for (const currentWorkflow of workflow) {
        if(currentWorkflow && currentWorkflow.children){
            const subWorkflows = currentWorkflow.children.filter(p => p.level === level && p.name === name)

            if(subWorkflows && subWorkflows.length > 0){
                return currentWorkflow
            }

            const relsult = getParentConfig(currentWorkflow.children, level, name)
            
            if(relsult){
                return relsult
            }
        }
    }

    return null
}

/**
 *  Check regex only letters and spaces
 * @param {String} str
 */
export function isLetter(str) {
    if(str){
        const regMatch = /^[a-zA-Z\s]*$/.test(str)
        return regMatch
    }
    return false
}

/**
 *  String only contains whitespace (ie. spaces, tabs or line breaks)
 * @param {String} str
 */
export function detectWhiteSpace(str) {
    if (!str.replace(/\s/g, '').length) {
        return true
    }
    return false
}

/**
 * concat string breadcrumb for Three pane.
 * @param {String} textCurrent
 */
export function concatenateString(formtype, arrayValues, feature, textCurrent, featureConcat, featuresConcatY,setStringConcatenation, isChecked = true) {
  if (formtype === FormType.ThreePane) {
    let concatenation = ''
    arrayValues.forEach(element => {
        if(element.key === feature.name && feature.concatYN){
          if(isChecked){
            const string = getConcatenateString(feature.concatPrefix, textCurrent, feature.concatSuffix)
            if(!detectWhiteSpace(string)) concatenation += string
          }  
        }else{
          const featureConcatY = featuresConcatY && featuresConcatY.find(p => p.name === element.key)
          if(featureConcatY && (featureConcatY.default !== element.value.label)){
            let textFeatureConcatY= element.value.label
            if(featureConcatY.concatShowCodeValueYN) textFeatureConcatY = element.value.value
            const string = getConcatenateString(featureConcatY.concatPrefix, textFeatureConcatY, featureConcatY.concatSuffix)
            if(!detectWhiteSpace(string)) concatenation += string
          } 
        }
      })
      concatenation = replaceSpaces(concatenation)
      if(featureConcat){
        const valueItemConcat = arrayValues.find(p => p.key === featureConcat.name)
        if(valueItemConcat){
          valueItemConcat.value = { value: concatenation, label: concatenation }
        }
      }

      if (concatenation === undefined) {
        const valueItemConcat = arrayValues.find(p => p.key === featureConcat.name)
        if(valueItemConcat){
          valueItemConcat.value = { value: null, label: null }
        }
      }
    setStringConcatenation(concatenation)
  }
}

/**
 *  Concatenate strings 
 *  @param {String} concatPrefix
 *  @param {String} fieldValue
 *  @param {String} concatSuffix
 */
export function getConcatenateString(concatPrefix, fieldValue, concatSuffix) {
  if(fieldValue)
    return `${formatString(concatPrefix)}${formatString(fieldValue)}${formatString(concatSuffix)}`
  return ''  
}

/**
 *  Format string 
 *  @param {String} string
 */
function formatString(string) {
  if(string){
    if(string === ' ') 
      return ' '
    else
      return ` ${string} `     
  }
  return ''
}

/**
 *  Regex to replace multiple spaces with a single space
 *  @param {String} string
 */
export function replaceSpaces(string) {
  if(string) return string.replace(/  +/g, ' ')
}

/**
 *  Blob to base64 for iOS
 *  @param {Object} blob
 */
const blobToBase64 = blob =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
})

/**
 *  Convert blob to base64
 *  @param {String} imagePath
 *  @returns string base64
 */
const convertBlobToBase64 = async imagePath => {
  const response = await fetch(imagePath)
  const blob = await response.blob()
  return await blobToBase64(blob)
}

/**
 *  convert image to string base64
 *  @param {String} imagePath
 */
export async function getBase64String(imagePath) {
  if(imagePath){
    if (Platform.OS === 'ios') {
      const base64 = await convertBlobToBase64(imagePath)
      //cut excess string
      const sliceBase64 = base64.split(',')
      return sliceBase64[1]
    } else {
      const base64String = await RNFS.readFile(imagePath, 'base64')
      if(base64String) return base64String
    }
  }
}

/**
* Get the dimension of the device screen.
*/
export function getWidthDevice() {
  const windowWidth =
    Dimensions.get('window').width > Dimensions.get('window').height
      ? Dimensions.get('window').height
      : Dimensions.get('window').width
  return windowWidth
}

/**
* Get width percent on the grid screen.
* @param {String} header
* @param {Number} totalWidthDefault
* @param {Number} totalWidth
* @param {Array} headers
* @param {Array} features
*/
  export function getWidthPercent(header, totalWidthDefault, totalWidth, headers, features) {
  if (totalWidthDefault) {
    return `${(header.width / totalWidthDefault) * 100}%`
  }
  if (headers.length > MAX_FEATURES_ON_GRID ) {
    return getFeatureWidth(header, features) * (getWidthDevice() / 100)
  } else {
    return `${(Math.round((getFeatureWidth(header, features)/totalWidth) * 100) / 100)*100}%`
  }
}  

/**
* Get total width default on the grid screen
* @param {array} headers
*/
export function getTotalWidthDefault(headers) {
  let total = 0
  headers.forEach(header => {
    if (header.width) {
      total = total + header.width
    }
  })
  return total
}

/**
* Get feature width on the grid screen
* @param {String} element
* @param {array} features
*/
export function getFeatureWidth(element, features) {
  const feature = getFeatureByName(element.key, features)
  if(feature){
    switch (feature.type) {
      case MEMO:
      case TEXT:
          return Math.min(TEXT_WIDTH, feature.length ? Math.max(feature.length, feature.displayName.length) : MAX_LENGTH) 
      case QUICKPICK: 
          return Math.min(QUICKPICK_WIDTH, feature.length ? Math.max(feature.length, feature.displayName.length) : MAX_LENGTH) 
      case MULTIPICK:
          return Math.min(MULTIPICK_WIDTH, feature.length ? Math.max(feature.length, feature.displayName.length) : MAX_LENGTH) 
      case CONCAT:    
          return Math.min(CONCAT_WIDTH, feature.length ? Math.max(feature.length, feature.displayName.length) : MAX_LENGTH) 
      case NUMBER:
          return Math.min(NUMBER_WIDTH, feature.length ? Math.max(feature.length, feature.displayName.length) : MAX_LENGTH_NUMERIC) 
      case BIT:    
          return Math.min(BIT_WIDTH, feature.length ? Math.max(feature.length, feature.displayName.length) : MAX_LENGTH) 
      case DATE:
          return DATE_WIDTH 
      case DATETIME:
          return DATETIME_WIDTH  
      default:
          return Math.min(TEXT_WIDTH, feature.length ? Math.max(feature.length, feature.displayName.length) : MAX_LENGTH) 
    } 
  }  
  return 0
}

/**
* Get total width of all feature on the grid screen.
* @param {array} headers
* @param {array} features
*/
export function getTotalWidth(headers, features) {
  let total = 0
  headers.forEach(element => {
    total += getFeatureWidth(element, features)
  })
  return total
}

/**
* show toast with 2s
* @param {*} setIsToast of useState 
*/
export function showToast(setIsToast){
  setIsToast(true)
  setTimeout(() => {
      setIsToast(false)
  }, 2000)
}

/**
* get and show warning message
* @param {Object} feature
* @param {*} valueInput 
* @param {String} message
*/
export function getWarningMessage( feature, valueInput, message ){
  if (feature.required) {
    if (!valueInput) {
      return feature.requireMessage ? feature.requireMessage : message
    }
  }
  return null
}

/**
* check and lock orientation
* @param {Boolean} isShowPicker
* @param {Boolean} isShow 
*/
export function lockOrientation(isShowPicker, isShow){
  if (isShowPicker && isShow) {
    Orientation.getOrientation((orientation)=> {
      if (orientation.indexOf(LANDSCAPE) == 0 ) {
        Orientation.lockToLandscape()
      } else {
        Orientation.lockToPortrait()
      }
    })
  } else {
    Orientation.unlockAllOrientations()
  }
}