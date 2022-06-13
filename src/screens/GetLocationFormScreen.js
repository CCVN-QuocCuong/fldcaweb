import React, { useState, useEffect } from 'react'
import { View, Text } from 'native-base'
import { StyleSheet, Platform, Alert } from 'react-native'
import ButtonComponent from '../components/ButtonComponent'
import strings from '../config/strings'
import Geolocation from 'react-native-geolocation-service'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  check,
  PERMISSIONS,
  RESULTS,
  openSettings,
  request
} from 'react-native-permissions'
import HeaderComponent from '../components/HeaderComponent'
import { useDispatch } from 'react-redux'
import { setIsProcessing } from '../store/actions'
import { logData } from '../services/logger-service'
import AlertDialogComponent from '../components/AlertDialogComponent'

const LOCATION_PERMISSIONS =
  Platform.OS === 'ios'
    ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION

export default function GetLocationFormScreen() {
  const [altitudeAccuracy, setAltitudeAccuracy] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [locationMethod, setLocationMethod] = useState('')
  const [elevationMethod, setElevationMethod] = useState('')

  const [titleDialog, setTitleDialog] = useState(null)
  const [msgDialog, setMsgDialog] = useState(null)
  const [isShowDialog, setIsShowDialog] = useState(false)
  const [cancelDialog, setCancelDialog] = useState(true)
  const [actionDialog, setActionDialog] = useState(null)

  const navigation = useNavigation()
  const route = useRoute()
  const dispatch = useDispatch()
  const { arrayValues, setArrayValues } = route.params

  useEffect(() => {
      checkPermistions(LOCATION_PERMISSIONS, () => getLocation())
  }, [])

  if (latitude) {
    dispatch(setIsProcessing(false))
  } else {
    dispatch(setIsProcessing(true))
  }

  const objectMethod = [
    { key: 'POINT.LocationMethod', value: null },
    { key: 'POINT.ElevationMethod', value: null },
  ]

  /**
   * check permistions
   * @param {String} permission permission type
   * @param {*} action function
   */
  const checkPermistions = (permission, action) => {
    check(permission)
      .then((result) => {
        dispatch(setIsProcessing(false))
        switch (result) {
          case RESULTS.BLOCKED:
            if (Platform.OS === 'ios') {
              createAlertIos()
            } else {
              alert(strings.notAvailable)
            }
            break 
          case RESULTS.GRANTED:
            action()
            break
          default:
            requestPermission(permission, action)
        }
      })
  }

  /**
   * request permission after check
   * @param {String} permission permission type
   * @param {*} action function
   */
  const requestPermission = (permission, action) => {
    request(permission).then(result => {
      if (result === RESULTS.GRANTED) {
        action()
      } else if (Platform.OS === 'ios') {
        createAlertIos() 
      }
    })
  }

  const createAlertIos = () => {
    Alert.alert(
      'Permission',
      strings.permissionFeature,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'Setting', onPress: () => openSettings() },
      ],
    )
  }

  /**
   * get location after check permission
   */
  const getLocation = () => {
     Geolocation.getCurrentPosition(
      position => {
        setAltitudeAccuracy(position.coords.altitude)
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      },
      error => {
        dispatch(setIsProcessing(false))
        logData('error getLocation:', error)
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    )
    objectMethod.forEach(element => {
      const existData = arrayValues.find(p => p.key === element.key)
      if (existData) {
        const value = { value: existData.value.value.toString(), label: existData.value.label.toString() }
        element.value = value
      }
    })
    if (objectMethod[0].value) {
      setLocationMethod(objectMethod[0].value.label)
    }
    if (objectMethod[1].value) {
      setElevationMethod(objectMethod[1].value.label)
    }
  }

  const showAlert = (title, message, showCancel, actionCallback) => {
    setTitleDialog(title)
    setMsgDialog(message)
    setCancelDialog(showCancel)
    if (actionCallback) {
      setActionDialog(() => actionCallback)
    }
    setIsShowDialog(true)
  }

  const buttonClickYes = () => {
    check(LOCATION_PERMISSIONS).then((result) => {
      if (result === RESULTS.GRANTED) {
        showAlert('Get location', 'Will overwrite existing fields', true,
        () => {
          dispatch(setIsProcessing(true))
          const getLocationTimeout = setTimeout(() => {
            const objectLocation = [
              { key: 'POINT.Longitude', value: longitude },
              { key: 'POINT.Latitude', value: latitude },
              { key: 'POINT.NationalElevation', value: altitudeAccuracy },
            ]
            if (arrayValues) {
              arrayValues.forEach(element => {
                const existData = objectLocation.find(p => p.key === element.key)
                if (existData) {
                  const value = { value: existData.value.toString(), label: existData.value.toString() }
                  element.value = value
                }
              })
              setArrayValues([...arrayValues])
            }
            dispatch(setIsProcessing(false))
            clearTimeout(getLocationTimeout)
            navigation.goBack()
            route.params.getFeatureRequire()
          }, 100)
        })
      }
    })
  }

  const buttonClickNo = () => {
    navigation.goBack()
  }

  return (
    <>
      <HeaderComponent
        title='Add Location'
        back
      />
      <View style={styles.container}>
        <View style={styles.boxTitle}>
          <Text size='lg' style={styles.titleStyle}>{strings.getLocation}</Text>
        </View>
        <View style={styles.boxGetLocation}>
          <View style={styles.boxAsk}>
            <Text size='md' style={styles.getLocationStyle}>{strings.useGPS}</Text>
          </View>
          <View style={styles.boxButton}>
            <ButtonComponent style={styles.buttonStyle} buttonName={'Yes'} buttonHandle={buttonClickYes} />
            <ButtonComponent style={styles.buttonStyle} buttonName={'No'} buttonHandle={buttonClickNo} />
          </View>
        </View>
        <View style={styles.boxLocation}>
          <Text size='md' style={styles.locationStyle}>Latitude :{latitude}</Text>
          <Text size='md' style={styles.locationStyle}>Longitude :{longitude}</Text>
          <Text size='md' style={styles.locationStyle}>Altitude : {altitudeAccuracy}</Text>
          <Text size='md' style={styles.locationStyle}>Location Method : {locationMethod}</Text>
          <Text size='md' style={styles.locationStyle}>Elevation Method : {elevationMethod}</Text>
        </View>
      </View>
      {isShowDialog && (
          <AlertDialogComponent 
            title={titleDialog} 
            msg={msgDialog} 
            action={actionDialog} 
            isShowDialog={isShowDialog} 
            setIsShowDialog={setIsShowDialog} 
            cancel={cancelDialog}
          />
       )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 20,
  },
  boxTitle: {
    flex: 1,
  },
  boxGetLocation: {
    flex: 1.5,
    flexDirection: 'row',
  },
  boxAsk: {
    flex: 2.3,
  },
  buttonStyle: {
    marginLeft: 10
  },
  boxButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleStyle: {
    fontWeight: '800',
    color: '#5e5e5e',
  },
  boxLocation: {
    flex: 5,
  },
  getLocationStyle: {
    fontWeight: '700',
    color: '#5e5e5e',
  },
  description: {
    color: '#545454',
    fontStyle: 'italic',
  },
  locationStyle: {
    color: '#545454',
    fontStyle: 'italic',
  },
})
