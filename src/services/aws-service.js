import { Storage } from 'aws-amplify'
import DeviceInfo from 'react-native-device-info'
import BackgroundTimer from 'react-native-background-timer'
import { store } from '../store'
import { logData } from './logger-service'
import { IMAGE } from '../config/constants'
import { setListImage } from '../store/actions'

const uniqueId = DeviceInfo.getUniqueId()
const rootFolder = 'backup_data_devices'
const FILE_TYPE = '.json'
const IntervalTime = 5000 // 5s
let parentIdTemp = null   // runBackgroundBackupImages

/**
 * Backup data to S3.
 * @param {Array} listItemData
 */
export function backupDataToS3(listItemData) {
  try {
    const { isConnected } = store.getState().app
    if (isConnected) {
      DeviceInfo.getDeviceName().then((deviceName) => {
        Storage.put(`${rootFolder}/${deviceName}_${uniqueId}/${uniqueId}${FILE_TYPE}`, listItemData)
      })
    } else {
      createIntervalToCheckOnline(listItemData)
    }
  } catch (error) {
    logData('Error backupDataToS3: ', error)
  } 
}

/**
 * Create interval to check online,
 * If true, backup data to S3. Not true, not backup.
 * @param {Array} listItem
 */
function createIntervalToCheckOnline(listItem) {
  try {
    runBackgroundBackupData()
    const interval_obj = setInterval(() => {
      const { isConnected } = store.getState().app
      if (isConnected) {
        clearInterval(interval_obj)
        DeviceInfo.getDeviceName().then((deviceName) => {
          BackgroundTimer.stopBackgroundTimer()
          Storage.put(`${rootFolder}/${deviceName}_${uniqueId}/${uniqueId}${FILE_TYPE}`, listItem)
        })
      }
    }, IntervalTime)
  } catch (error) {
    logData('Error createIntervalToCheckOnline: ', error)
  } 
}

/**
 * Backup data to S3 when app run Background. 
 */
export function runBackgroundBackupData(){
  try {
    BackgroundTimer.runBackgroundTimer(() => { 
      const { isConnected } = store.getState().app
      if (isConnected) {
        const { listItem } = store.getState().app
        DeviceInfo.getDeviceName().then((deviceName) => {
          BackgroundTimer.stopBackgroundTimer()
          if (listItem && listItem.length > 0) {
            Storage.put(`${rootFolder}/${deviceName}_${uniqueId}/${uniqueId}${FILE_TYPE}`, listItem)
            if (parentIdTemp) {
              // runBackgroundBackupImages
              const listImage = getListPhoto(listItem, parentIdTemp)
              if (listImage && listImage.length > 0) {
                const pathBucket = `${rootFolder}/${deviceName}_${uniqueId}/`
                pushImageToS3(listImage, pathBucket)
              }
            }
          }
        })
      }
    }, IntervalTime)
  } catch (error) {
    logData('Error runBackgroundBackupData: ', error)
  } 
}

/**
 * Backup images to S3.
 * @param {Array} listItemData
 * @param {String} parentId
 */
export function backupImagesToS3(listItemData, parentId) {
  try {
    const { isConnected } = store.getState().app
    if (isConnected) {
      DeviceInfo.getDeviceName().then((deviceName) => {
        const listImage = getListPhoto(listItemData, parentId)
        if (listImage && listImage.length > 0) {
          const pathBucket = `${rootFolder}/${deviceName}_${uniqueId}/`
          pushImageToS3(listImage, pathBucket)
        }
      })
    } else {
      createIntervalBackupImages(listItemData, parentId)
    }
  } catch (error) {
    logData('Error backupImagesToS3: ', error)
  } 
}

/**
 * Create interval to check online backup images,
 * If true, backup image to S3. Not true, not backup.
 * @param {Array} listItem
 * @param {String} parentId
 */
function createIntervalBackupImages(listItem, parentId) {
  try {
    parentIdTemp = parentId  // runBackgroundBackupImages
    const interval_obj = setInterval(() => {
      const { isConnected } = store.getState().app
      if (isConnected) {
        clearInterval(interval_obj)
        DeviceInfo.getDeviceName().then((deviceName) => {
          BackgroundTimer.stopBackgroundTimer()
          const listImage = getListPhoto(listItem, parentId)
          if (listImage && listImage.length > 0) {
            const pathBucket = `${rootFolder}/${deviceName}_${uniqueId}/`
            pushImageToS3(listImage, pathBucket)
          }
        })
      }
    }, IntervalTime)
  } catch (error) {
    logData('Error createIntervalBackupImages: ', error)
  } 
}

/**
  * Upload image to S3 .
  * @param {Array} listDataImage
  * @param {String} pathBucket
  */
 const pushImageToS3 = async (listDataImage, pathBucket) => {
  listDataImage.forEach(async (feature) => {
    const { listImage } = store.getState().app
    const dataItem = listImage.find(p => p.deviceID === uniqueId && p.label === feature.value[0].label)
    if (!dataItem) {
      const response = await fetch(feature.value[0].value)
      const blob = await response.blob()
      // push image to s3
      await Storage.put(`${pathBucket}${feature.value[0].label}`, blob, {
        contentType: 'image/jpeg',
        progressCallback(progress) {
          if ((progress.loaded / progress.total) === 1) {
            const obj_image_device = {
              deviceID: uniqueId,
              label: feature.value[0].label,
              value: feature.value[0].value
            }
            // push image to listImage redux
            store.dispatch(setListImage(obj_image_device))
          }
        },
      }).catch(error => {
        logData('Error pushImageToS3: ', error)
      })
    }
  })
}

 /**
  * Get all image of point selected.
  * @param {Array} listItem
  * @param {String} parentId
  */
 const getListPhoto = (listItem, parentId) => {
  let listImage = []
  listItem.forEach(element => {
    if (element.level == 2 && element.items.length > 0) {
      element.items.forEach(item => {
        if (item.parent.id == parentId) {
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
