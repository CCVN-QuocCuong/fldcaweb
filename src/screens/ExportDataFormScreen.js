/* eslint-disable react/display-name */
import React, { useState } from 'react'
import { View, Text, Toast } from 'native-base'
import { StyleSheet, Platform, Linking } from 'react-native'
import ButtonComponent from '../components/ButtonComponent'
import HeaderComponent from '../components/HeaderComponent'
import { useRoute } from '@react-navigation/native'
import RNFS from 'react-native-fs'
import { PERMISSIONS, check, RESULTS, request } from 'react-native-permissions'
import { setIsProcessing } from '../store/actions'
import { useDispatch } from 'react-redux'
import { genXml } from '../services/xml-service'
import { validateDisplayCondition } from '../services/relevant-service'
import { getObjectById } from '../services/data-service'
import { logData } from '../services/logger-service'
import { ERROR_NOTIFI, IMAGE } from '../config/constants'
import AlertDialogComponent from '../components/AlertDialogComponent'
import strings from '../config/strings'
import NetInfo from '@react-native-community/netinfo'
import DeviceInfo from 'react-native-device-info'
import { dateTimeToStringXML, getDatetimeCurrent } from '../services/datetime-service'
import { Storage } from 'aws-amplify'

const FILE_TYPE = '.xml'
const AppFolder = 'FieldLoggingEnv'
const rootFolder = 'export_xml'

export default function ExportDataFormScreen() {
  const [isShowDialog, setIsShowDialog] = useState(false)
  const [titleDialog, setTitleDialog] = useState(null)
  const [msgDialog, setMsgDialog] = useState(null)
  const [cancelDialog, setCancelDialog] = useState(true)
  const [actionDialog, setActionDialog] = useState(null)
  const [textBtnOkDialog, setTextBtnOkDialog] = useState(null)
  const [textBtnCancelDialog, setTextBtnCancelDialog] = useState(null)
  const [statusAlert, setStatusAlert] = useState(null)

  const route = useRoute()
  const dispatch = useDispatch()
  const { featurePointID, featureProjID, listItem, pointId, itemSelected, children } = route.params
  const id = itemSelected ? itemSelected[0].value.value : {}
  const parentObject = getObjectById(listItem, id, children[0].parent)
  const PROJ_ID = featureProjID ? featureProjID.value.label : null
  const Point_ID = featurePointID ? featurePointID.value.label : null

  const STORAGE_PERMISSIONS =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.MEDIA_LIBRARY
      : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE

  const checkPermistions = (permission, callback) => {
    check(permission).then((result) => {
      if (result !== RESULTS.GRANTED) {
        request(permission).then((result2) => {
          if (result2 === RESULTS.GRANTED || result2 === RESULTS.UNAVAILABLE) {
            callback()
          } else {
            showAlert(strings.storageAccess, strings.permissionFeature, true, () => Linking.openSettings(), ERROR_NOTIFI)
          }
        })
      } else { 
        callback()
      }
    })
  }

  const saveXMLFile = () => {
    checkPermistions(STORAGE_PERMISSIONS,() => saveFileLocal())

    const saveFileLocal = async () => {
      // Format Output {PROJ_NAME}_{Point_ID}_ddMMyyyyHHmmss.xml
      if (PROJ_ID && Point_ID) {
        // create new path to save xml file in the folder 
        const FILE_NAME = `${PROJ_ID}_${Point_ID}_${getDatetimeCurrent()}`
        let path = null
  
        if (Platform.OS === 'ios') {
          path = RNFS.DocumentDirectoryPath + `/${FILE_NAME}${FILE_TYPE}`
          exportXML(path)
        } else {
          const ANDROID_API = 29  // Android 10, API 29
          if (Platform.Version > ANDROID_API) {
            path = RNFS.ExternalDirectoryPath + `/${FILE_NAME}${FILE_TYPE}`
          } else {
            // create new folder
            const DirectoryPath = RNFS.ExternalStorageDirectoryPath + '/' + AppFolder
            await RNFS.mkdir(DirectoryPath)
            path = DirectoryPath + `/${FILE_NAME}${FILE_TYPE}`
          }
          writeXMLFile(path)
        }
      }
    }
  }

  let showItems = children.filter(p => {
    if (p.relevant && p.relevant.length > 0) {
      return validateDisplayCondition(parentObject ? [parentObject.data] : null, p.relevant)
    }
    return true
  })

  /**
   * filter the items needed for export
   * @returns
   */
  const getListItem = () => {
    let list = []
    listItem.forEach(element => {
      const item = showItems.find(p => p.name === element.name || p.level !== element.level)
      if (item) {
        list.push(element)
      }
    })
    return list
  }

  const writeXMLFile = async (path) => {
    try {
      check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then(async (result) => {
        if (result === RESULTS.GRANTED) {
          exportXML(path)
        }
      })
    } catch (error) {
      logData('error writeXMLFile: ', error)
    } finally {
      dispatch(setIsProcessing(false))
    }
  }

  /**
   * render Toast upload successfully.
   * @param {String} message 
   */
  const renderToast = (message) => (
    Toast.show({
      render: () => {
        return (
          <View style={styles.boxExportXml}>
            <View>
              <Text size={'md'} color={'#fff'}>{message}</Text>
            </View>
            <View>
              <Text size={'sm'} color={'#fff'}>
                {`${message} ${strings.successfully}`}
              </Text>
            </View>
          </View>
        )
      },
    })
  )


  const exportXML = async (path) => {
    try {
      dispatch(setIsProcessing(true))
      const contentXml = await genXml(getListItem(), pointId, true)
      if (path && contentXml) {
        const writeXMLFileTimeout = setTimeout(() => {
          RNFS.writeFile(path, contentXml, 'utf8')
            .then(() => {
              renderToast('Export XML')
              logData('FILE WRITTEN!')
              logData('local path: ', path)
              dispatch(setIsProcessing(false))
              clearTimeout(writeXMLFileTimeout)
            })
            .catch((err) => {
              dispatch(setIsProcessing(false))
              logData('err.message: ', err.message)
            })
        }, 500)
      } else dispatch(setIsProcessing(false))
    } catch (error) {
      logData('error exportXML: ', error)
    } finally {
      dispatch(setIsProcessing(false))
    }
  }

  /**
  * disable loading and show message error .
  * @param {String} error 
  */
  const logErrorUpload = (error) => {
    dispatch(setIsProcessing(false))
    showAlert(strings.uploadError, strings.uploadErrorDescription, false, () => { })
    logData(error)
  }

  /**
  * disable loading and show message success .
  * @param {String} message 
  */
  const logSuccessUpload = (message) => {
    dispatch(setIsProcessing(false))
    renderToast(message)
  }

  /**
  * Upload image to S3 .
  * @param {Array} featureImage 
  */
  const pushImage = (listImage, patchBucket) => {
    listImage.forEach(async (feature, index) => {
      const response = await fetch(feature.value[0].value)
      const blob = await response.blob()
      await Storage.put(`${patchBucket}${feature.value[0].label}`, blob, {
        contentType: 'image/jpeg',
        progressCallback(progress) {
          if (((progress.loaded / progress.total) == 1) && ((index + 1) == listImage.length)) {
            logSuccessUpload(strings.uploadPoint)
          }
        },
      }).catch(err => {
        logErrorUpload(err)
      })
    })
  }

  /**
  * Get all image of point selected.
  * @returns 
  */
  const getImagePoint = () => {
    let listImage = []
    listItem.forEach(element => {
      if (element.level == 2 && element.items.length > 0) {
        element.items.forEach(item => {
          if (item.parent.id == id) {
            const featureImage = item.data.find(p => p.type == IMAGE)
            if (featureImage) {
              listImage.push(featureImage)
            }
          }
        })
      }
    })
    return listImage
  }

  /**
  * Upload completed point to S3.
  */
  // eslint-disable-next-line no-unused-vars
  const uploadToS3 = async () => {
    const contentXml = await genXml(getListItem(), pointId, true)

    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        dispatch(setIsProcessing(true))
        DeviceInfo.getDeviceName().then((deviceName) => {
          const dateTime = dateTimeToStringXML(new Date())
          const XML_NAME = `${PROJ_ID}_${Point_ID}_${dateTime}${FILE_TYPE}`
          const uniqueId = DeviceInfo.getUniqueId()
          const patchBucket = `${rootFolder}/${deviceName}_${uniqueId}/${PROJ_ID}/${Point_ID}/`
          const listImage = getImagePoint()
          Storage.put(`${patchBucket}${XML_NAME}`, contentXml, {
            progressCallback(progress) {
              if ((progress.loaded / progress.total) == 1) {
                if (listImage.length > 0) {
                  pushImage(listImage, patchBucket)
                } else {
                  logSuccessUpload(strings.uploadPoint)
                }
              }
            },
          }).catch(err => {
            logErrorUpload(err)
          })

          }).catch(err => {
            logErrorUpload(err)
          })
      } else {
        showAlert(strings.connection, strings.connectionDescription, false, () => { })
      }
    })
  }

  const renderItem = (title, description, requiredMsg, functionButon, buttonName = 'Save XML file', moreDescription) => {
    return(
      <View style={styles.boxItem}>
        <View style={styles.boxText}>
          <View style={styles.boxButton}>
          <Text size={Platform.OS == 'ios' ? (Platform.isPad ? 'lg' : 'md') : 'lg'} style={styles.titleStyle}>{title}</Text>
          <ButtonComponent buttonName={buttonName} buttonHandle={functionButon} disable={functionButon ? false : true}/>
          </View>
          <Text fontFamily="body" size={Platform.OS == 'ios' ? (Platform.isPad ? 'md' : 'sm') : 'md'} style={styles.descriptionStyle}>{description}</Text>
          <Text fontFamily="body" size={Platform.OS == 'ios' ? (Platform.isPad ? 'md' : 'sm') : 'md'} style={styles.requiredStyle}>{requiredMsg}</Text>
          {moreDescription && <Text fontFamily="body" size={Platform.OS == 'ios' ? (Platform.isPad ? 'md' : 'sm') : 'md'} style={styles.descriptionStyle}>{moreDescription}</Text> } 
        </View>
      </View>
    )
  }

  /**
   * show alert message.
   * @param {*} title 
   * @param {*} message 
   * @param {*} showCancel 
   * @param {*} actionCallback 
   */
  const showAlert = (title, message, showCancel, actionCallback, status, textBtnOk = 'OK', textBtnCancel = 'Cancel') => {
    setTitleDialog(title)
    setMsgDialog(message)
    setCancelDialog(showCancel)
    setTextBtnOkDialog(textBtnOk)
    setTextBtnCancelDialog(textBtnCancel)
    if (actionCallback) {
      setActionDialog(() => actionCallback)
    }
    setStatusAlert(status)
    setIsShowDialog(true)
  }



  return (
    <>
    <HeaderComponent
      title={strings.titleExportDataFormScreen}
      back
    />
    <View style={styles.container}>
      <View style={styles.blurStyle}>
      {renderItem(
          strings.savePointCloud,
          strings.descriptionSavePointCloud,
          strings.requireSaveCloud,
          null,
          strings.saveToCloud
        )}
      </View>
      <View style={styles.line}></View>
      {renderItem(
        strings.savePointTable,
        strings.descriptionSavePointTable,
        strings.requireSaveTable,
        () => showAlert(strings.tableAlertTitle, strings.tableAlertDescription, true, saveXMLFile),
        strings.saveXMLFile,
        strings.moreDescriptionSaveTable,
      )}
    </View>
      {isShowDialog && (
        <AlertDialogComponent
          title={titleDialog}
          msg={msgDialog}
          action={actionDialog}
          isShowDialog={isShowDialog}
          setIsShowDialog={setIsShowDialog}
          cancel={cancelDialog}
          textButtonOk={textBtnOkDialog}
          textButtonCancel={textBtnCancelDialog}
          statusAlert={statusAlert}
        />
      )}
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '4%',
    paddingVertical: 20
  },
  boxItem: {
    flexDirection: 'row',
  },
  boxText: {
    flex: 6,
  },
  blurStyle:{
    opacity:0.35
  },
  boxButton: {
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingVertical:'0.5%',
  },
  titleStyle: {
    fontWeight: '600',
    color: '#5e5e5e',
    paddingBottom:'2%'
  },
  descriptionStyle: {
    color: '#545454',
    fontStyle: 'italic'
  },
  requiredStyle: {
    color: '#000',
    fontWeight: '700',
    fontStyle: 'italic',
    paddingVertical: Platform.OS == 'ios' ? (Platform.isPad ? '2%' : 13) : '2%',
  },
  moreDescriptionStyle: {
    color: '#545454',
    fontStyle: 'italic',
  },
  line: {
    height: 2,
    borderWidth: 1,
    borderColor: '#c4c4c4',
    marginHorizontal: '5%',
    marginTop: Platform.OS == 'ios' ? (Platform.isPad ? '1%' : 4) : '1%',
    marginBottom: Platform.OS == 'ios' ? (Platform.isPad ? '3%' : 13) : '3%',
  },
  boxExportXml: {
    flex: 1,
    bottom: '100%',
    width: 500,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#151147',
    justifyContent: 'center',
    alignItems: 'center'
  }
})