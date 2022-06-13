import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Image,
    Dimensions,
    Platform,
    Alert,
    TouchableOpacity,
    Keyboard
} from 'react-native'
import { View, Text, Pressable, Modal, ScrollView, FlatList, Button, Spinner } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AlertDialogComponent from '../../components/AlertDialogComponent'
import { launchCamera } from 'react-native-image-picker'
import { check, openSettings, PERMISSIONS, request, RESULTS } from 'react-native-permissions'
import strings from '../../config/strings'
import CameraRoll from '@react-native-community/cameraroll'
import stylesTwoPane from '../../theme/stylesTwoPane'
import { useSelector } from 'react-redux'
import { getObjectById } from '../../services/data-service'

const windowWidth = Dimensions.get('window').width > Dimensions.get('window').height ? Dimensions.get('window').width : Dimensions.get('window').height

const CAMERA_PERMISSIONS = Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA
const STRONGE_PERMISSIONS = Platform.OS === 'ios' ? PERMISSIONS.IOS.READ_EXTERNAL_STORAGE : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE

const PhotoFormComponent = ({
    arrayValues, 
    setArrayValues, 
    isShow, 
    feature, 
    valueItem, 
    dataSource, 
    parentInfo, 
    features 
  }) => {
    const [isModalVisible, setModalVisible] = useState(false)
    const [isShowDialog, setIsShowDialog] = useState(false)
    const [titleDialog, setTitleDialog] = useState(null)
    const [msgDialog, setMsgDialog] = useState(null)
    const [cancelDialog, setCancelDialog] = useState(true)
    const [actionDialog, setActionDialog] = useState(null)
    const [actionCancelDialog, setActionCancelDialog] = useState(null)
    const [arrayPictureGallery, setArrayPictureGallery] = useState([])
    const [arrayMarkPicture, setArrayMarkPicture] = useState([])
    const [arrayPictureSelected, setArrayPictureSelected] = useState([])
    const [pictureRender, setPictureRender] = useState([])
    const [isValue, setIsValue] = useState(false)
    const isMultiPick = false
    const listItem = useSelector(state => state.app.listItem)
    const [projectID, setProjectID] = useState(null)
    const [pointID, setPointID] = useState(null)

    useEffect(() => {
        if (isShow) {
            getProjectNameAndPointID()

            const propValue = valueItem[0].value[0] ? valueItem[0].value : (valueItem[0].value.value ? valueItem[0].value.value : [])
            if (propValue.length > 0) {
                setIsValue(true)
            }
            setArrayPictureSelected(propValue)
            setPictureRender(propValue)
            Keyboard.dismiss()
        }
    }, [isShow])

    /**
     * get primary values apply to image name
     * @returns
     */
    const getPrimaryValues = () => {
        let str = ''
        for (const item of features) {
            if (item.primary) {
                for (const value of arrayValues) {
                    if (item.name === value.key && value.value.value) {
                        str = str ? `${str}_${value.value.value}` : `_${value.value.value}` 
                    }
                  }
            }
        }
        return str
    }

    /**
     * get time apply to image name
     * @returns
     */
    const formatDate = () => {
        const time = new Date()
        const day = `0${time.getDate()}`.slice(-2)
        const month = `0${(time.getMonth() + 1)}`.slice(-2)
        const hours = `0${time.getHours()}`.slice(-2)
        const minutes = `0${time.getMinutes()}`.slice(-2)
        const seconds = `0${time.getSeconds()}`.slice(-2)
        const year = time.getFullYear()  
        return  year + month + day + hours + minutes + seconds
      }

    /**
     * get projectName and PointID apply to image name
     */
    const getProjectNameAndPointID = () => {
        const PROJECT_NAME = 'PROJECT'
        const POINT_NAME = 'POINT'
        if(arrayValues && arrayValues.length > 0 && listItem && listItem.length > 0) {
            if(parentInfo && parentInfo.name === POINT_NAME){
                const featurePointID = parentInfo.data && parentInfo.data.data.find(p => p.key === 'POINT.POINT_ID')
                setPointID(featurePointID ? featurePointID.value.label : null)
                if(parentInfo.data && parentInfo.data.parent && parentInfo.data.parent.name === PROJECT_NAME){
                    const project = getObjectById(listItem, parentInfo.data.parent.id, PROJECT_NAME)
                    const featureProjID =  project.data.find(p => p.key === 'PROJECT.PROJ_ID')
                    setProjectID(featureProjID ? featureProjID.value.label : null)
                }
            }
        }
    }
    
    /**
     * set image to arrayValues
     * @param {Array} arrayPicture 
     */
    const setValue = (arrayPicture) => {
        const value = arrayPicture ? arrayPicture : arrayPictureSelected
        let propItem = arrayValues.find(p => p.key === feature.name)
        if (propItem) {
            propItem.value = value ? value : null
            setArrayValues(arrayValues)
        }
        if (arrayMarkPicture.length > 0) {
            setPictureRender(arrayPictureSelected)
            setIsValue(true)
        }
    }

    /**
     * check add new or replace after selected the photo 
     * @param {Array} arrayPicture 
     * @returns
     */
    const onChange = (arrayPicture) => {
        if (isValue && !isMultiPick) {
            if (arrayMarkPicture.length === 0) {
                setValue(arrayPicture)
            } else {
                overwritePhoto(arrayPicture)
            }
        } else {
            setValue(arrayPicture)
        }
    }

    /**
     * replace after check
     * @param {Array} arrayPicture
     */
    const overwritePhoto = (arrayPicture) => {
        setTitleDialog(strings.titleSave)
        setMsgDialog(strings.warningOverwritePhoto)
        setCancelDialog(true)
        const actionOverwritePhoto = () => {
            setValue(arrayPicture)
        }
        const actionCancel = () => {
            setArrayPictureSelected(pictureRender)
        }
        setActionCancelDialog(() => actionCancel)
        setActionDialog(() => actionOverwritePhoto)
        setIsShowDialog(true)
    }


    const clickButtonShot = () => {
        checkPermistions(CAMERA_PERMISSIONS, () => toggleCamera())
    }

    const clickButtonGallery = () => {
        checkPermistions(STRONGE_PERMISSIONS, () => { getPictures(), toggleModal() })
    }

    /**
     * get type of image and return new name
     * @param {String} imgName the name of the photo taken or from the gallery
     * @returns
     */
    const getLabelImg = (imgName) =>{
        const nameSplit = imgName.split('.')
        const imageType = nameSplit[nameSplit.length-1]
        return `${projectID}_${pointID}_${dataSource.navigation.add.title}${getPrimaryValues()}_${formatDate()}.${imageType}`
    }

    /**
     * get pictures form gallery
     */
    const getPictures = async () => {
        const result = await CameraRoll.getPhotos({
            first: 1000,
            assetType: 'Photos',
            include: ['fileSize', 'filename', 'imageSize', 'location']
        })

        const list = []
        result.edges.forEach(item => {
            list.push({ value: item.node.image.uri, label: getLabelImg(item.node.image.filename) })
        })
        setArrayPictureGallery(list)
    }

    /**
     * check permistions
     * @param {String} permission permission type
     * @param {*} action function
     */
    const checkPermistions = (permission, action) => {
        check(permission)
            .then((result) => {
                switch (result) {
                  case RESULTS.BLOCKED:
                    if (Platform.OS === 'ios') {
                      createAlertIos()
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
            if (result !== RESULTS.DENIED) {
                action()
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
     * toggle camera after check permission
     */
    const toggleCamera = async () => {
        let options = {
            mediaType: 'photo',
            cameraType: 'back',
            saveToPhotos: true,
            maxWidth: 1200,
            maxHeight: 1200,
            quality: 0.9
          }
        await launchCamera(options, async res => {
            if (!res.errorCode) {
                if (res.didCancel !== true) {
                    if (!isMultiPick) {
                        const valueShot = [{ value: res.assets[0].uri, label: getLabelImg(res.assets[0].fileName) }]
                        setArrayPictureSelected(valueShot)
                        setPictureRender(valueShot)
                        setIsValue(true)
                        onChange(valueShot)
                    } else {
                        const valueShot = [...arrayPictureSelected, { value: res.assets[0].uri, label: getLabelImg(res.assets[0].fileName) }]
                        setArrayPictureSelected(valueShot)
                        onChange(valueShot)
                    }
                }
            } else {
                alert(strings.notAvailable)
            }
        })
    }

    /**
     * Toggle modal.
     */
    const toggleModal = () => {
        setModalVisible(true)
        setArrayMarkPicture([])
    }

    /**
     * Click button yes.
     */
    const buttonClickYes = () => {
        setModalVisible(false)
        setArrayMarkPicture([])
        onChange()
    }

    /**
     * render pictuer form gallery
     * @param {Array} images list image
     * @returns 
     */
    const renderImageModal = (images) => {
        if (images) {
            return (
              <FlatList
                data={images}
                renderItem={({item}) => (
                  <View style={styles.photoModal}>
                    {arrayMarkPicture.indexOf(item.value) !== -1 ? (
                      <View style={styles.tick}>
                        <Text>{arrayMarkPicture.indexOf(item.value) + 1}</Text>
                      </View>
                    ) : null}
                    <Pressable onPress={() => handleSelectionMultiple(item)}>
                      <Image
                        style={styles.photoStyle}
                        source={{uri: item.value}}
                      />
                    </Pressable>
                  </View>
                )}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
              />
            )
        }
        return true
    }

    /**
     * select mutiple and check existence image
     * @param {*} image image
     */
    const handleSelectionMultiple = (image) => {
        if (arrayMarkPicture) {
            if (arrayMarkPicture.includes(image.value)) {
                setArrayMarkPicture(arrayMarkPicture.filter(_image => _image !== image.value))
                setArrayPictureSelected(arrayPictureSelected.filter(_image => _image.value !== image.value))
            }
            else {
                if (!isMultiPick) {
                    setArrayMarkPicture([image.value])
                    setArrayPictureSelected([{ value: image.value, label: image.label }])
                } else {
                    setArrayMarkPicture([...arrayMarkPicture, image.value])
                    setArrayPictureSelected([...arrayPictureSelected, { value: image.value, label: image.label }])
                }
            }
        }
    }

    /**
     * render pictuer form list selected
     * @param {Array} images list image
     * @returns 
     */
    const renderImage = (images) => {
        if (images) {
            return (
                images.map((image, index) => (
                    <View key={index.key} style={styles.photo}>
                        <TouchableOpacity style={styles.boxIconClose} onPress={() => removePicture(image, index)}>
                        <Ionicons type="Ionicons" name="close-outline" style={styles.iconClose} />
                        </TouchableOpacity>
                        <Image style={styles.photoStyle} source={{ uri: image.value }} />
                        <Text style={styles.namePhoto}>{image.label}</Text>
                    </View>
                )
                )
            )
        }
        return true
    }

    /**
     * remove picture when tap icon close 
     * @param {*} picture picture
     * @param {Number} index
     */
    const removePicture = (picture, index) => {
        if (picture === arrayPictureSelected[index]) {
            setArrayPictureSelected(arrayPictureSelected.filter((_picture, _index) => _index !== index))
            const arrayPicture = arrayPictureSelected.filter((_picture, _index) => _index !== index)
            setPictureRender([])
            onChange(arrayPicture)
        }
    }

    return (
        <>
            <View style={isShow ? stylesTwoPane.show : stylesTwoPane.hide}>
                <View>
                    <View>
                        <Text size='md' style={stylesTwoPane.titleStyle}>{strings.attachPicture}</Text>
                    </View>
                    <View style={styles.boxButtonPicture}>
                        <TouchableOpacity onPress={() => clickButtonShot()}>
                            <Ionicons type="Ionicons" name="camera-outline" style={styles.iconCameraStyle} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => clickButtonGallery()}>
                            <Ionicons type="Ionicons" name="image-outline" style={styles.iconCameraStyle} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.boxTakePhoto}>
                    <View style={styles.boxSelect}>
                        <Text size='md' style={stylesTwoPane.descriptionStyle}>{feature.hint}</Text>
                    </View>
                </View>
                <View style={{ flex: 8 }}>
                    <ScrollView>
                        <View style={styles.boxImage}>
                            {isShow && renderImage(arrayPictureSelected)}
                        </View>
                    </ScrollView>
                </View>
                <Modal isOpen={isModalVisible} onClose={() => {[setArrayPictureSelected(pictureRender),setModalVisible(false)]}} size='full'>
                    <View style= {styles.contentModal}>
                        <View style={styles.boxTitle}>
                            <Text size={'lg'} style={styles.titleStyle}>Gallery</Text>
                        </View>
                        <View style={styles.boxImageModal}>
                            <Spinner size="lg" style={styles.spinnerStyle}/>
                            {isShow && renderImageModal(arrayPictureGallery)}
                        </View>
                        <Button.Group space={5} style={styles.boxButtonStyle}>
                            <Button colorScheme="blueGray" onPress={() => {[setArrayPictureSelected(pictureRender),setModalVisible(false)]}}>
                                Cancel
                            </Button>
                            <Button size={'save'} variant={'confirm'} onPress={() => buttonClickYes()}>
                                Save
                            </Button>
                            </Button.Group>
                    </View>
                </Modal>
                {isShowDialog && (
                    <AlertDialogComponent
                        title={titleDialog}
                        msg={msgDialog}
                        action={actionDialog}
                        actionCancel={actionCancelDialog}
                        isShowDialog={isShowDialog}
                        setIsShowDialog={setIsShowDialog}
                        cancel={cancelDialog}
                    />
                )}
            </View>
        </>
    )
}

export default React.memo(PhotoFormComponent)

const styles = StyleSheet.create({
  boxTakePhoto: {
    flex: 1,
    flexDirection: 'row',
  },
  boxSelect: {
    flex: 2.3,
  },
  boxButtonPicture: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 15,
  },
  iconCameraStyle: {
    fontSize: windowWidth / 23,
    paddingRight: '15%',
  },
  buttonStyle: {},
  boxButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  boxImage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 50,
  },
  takePhotoStyle: {
    paddingLeft: 15,
    fontWeight: '700',
    color: '#5e5e5e',
  },
  photo: {
    width: '100%',
    height: windowWidth / 4.5,
    marginBottom: '7%',
    paddingHorizontal: 10,
  },
  namePhoto: {
    fontSize: 15,
    paddingHorizontal: 5,
  },
  photoStyle: {
    width: '100%',
    height: '100%',
  },
  contentModal:{
    width:'100%',
    maxHeight:'100%',
    backgroundColor: '#fff',
    paddingHorizontal:'2.5%',
    justifyContent:'space-between',
  },
  boxImageModal:{
    minHeight:  windowWidth / 5.27,
    width: '100%',
    maxHeight: '82%',
  },
  spinnerStyle:{
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateY: -20},{translateX: -20}, { scaleX: 1.5 }, { scaleY: 1.5 }]
  },
  boxTitle:{
    minHeight: 40,
    height:'9%',
    justifyContent: 'center',
  },
  titleStyle:{
  },
  boxButtonStyle:{
    height:'9%',
    minHeight: 60,
    alignSelf: 'flex-end',
    paddingRight: 3,
    alignItems: 'center',
  },
  photoModal: {
    height: windowWidth / 5.27,
    width: windowWidth / 5.27,
    flex: 1,
    borderWidth:3,
    borderColor: '#fff'
  },
  tick: {
    width: Platform.OS === 'ios' ? 28 : windowWidth / 28,
    height: Platform.OS === 'ios' ? 28 : windowWidth / 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,
    top: 10,
    right: 10,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  boxIconClose: {
    position: 'absolute',
    zIndex: 100,
    right: 20,
    top: 10,
  },
  iconClose: {
    fontSize: windowWidth / 31,
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingHorizontal: 1,
    color: 'red',
  },
})