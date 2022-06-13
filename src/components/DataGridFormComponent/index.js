/* eslint-disable react/no-children-prop */
import React, { useReducer, useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { ListItem, ListTitle } from './components'
import FooterFormComponent from '../FooterFormComponent'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ConstScreenName, ConstFooter } from '../../config'
import { deleteRecord, saveFeatureStack, setIsProcessing } from '../../store/actions'
import HeaderComponent from '../HeaderComponent'
import AlertDialogComponent from '../../components/AlertDialogComponent'
import { popFeatureStack, getAddKeyNavigation, getMenuKeyNavigation, getObjectById } from '../../services/data-service'
import strings from '../../config/strings'
import { getFooterIconsGrid } from '../../services/footer-service'
import { MAX_FEATURES_ON_GRID } from '../../config/constants'

index.propTypes = {
  dataSource: PropTypes.object,
  children: PropTypes.array,
  objectName: PropTypes.string,
  parent: PropTypes.object,
}

export default function index({ dataSource, data, children, objectName, parent }) {
  const [titleDialog, setTitleDialog] = useState(null)
  const [msgDialog, setMsgDialog] = useState(null)
  const [isShowDialog, setIsShowDialog] = useState(false)
  const [cancelDialog, setCancelDialog] = useState(true)
  const [actionDialog, setActionDialog] = useState(null)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const featureStack = useSelector(state => state.app.featureStack)
  const listItem = useSelector(state => state.app.listItem)
  const [itemSelected, setItemSelected] = useReducer(
    (item, newItem) => ({...item, ...newItem}),
    {indexRow: true, item: null}
  )
  const objectID = itemSelected.item && itemSelected.item.length > 0 ? itemSelected.item[0].value.value : null

  const route = useRoute()
  const projName = route.params ? route.params.projName : ''
  /**
   * go back.
   */
  const goBack = () => {
    if (featureStack && featureStack.length > 0)
      goBackAddFeature()
    else
      goBackNormalWorkFlow()
  }

  /**
   * go back add feature.
   */
  const goBackAddFeature = () => {
    dispatch(setIsProcessing(true))
    const goBackAddFeatureTimeOut = setTimeout(() => {
      const featureStackItem = popFeatureStack(featureStack)
      dispatch(saveFeatureStack(featureStack))
      dispatch(setIsProcessing(false))
      clearTimeout(goBackAddFeatureTimeOut)
      if (featureStackItem) {
        navigation.goBack()
      }
    }, 50)
  }

  /**
   * go back normal workflow
   */
  const goBackNormalWorkFlow = () => {
    dispatch(setIsProcessing(true))
    const goBackNormalWorkFlowTimeOut = setTimeout(() => {
      dispatch(setIsProcessing(false))
      clearTimeout(goBackNormalWorkFlowTimeOut)
      navigation.goBack()
    }, 50)
  }

  /**
   * go add.
   */
  const goAdd = () => {
    navigation.navigate({
      name: ConstScreenName.AddForm,
      params: {
        projName:projName,
        parentScreen: ConstScreenName.GridForm,
        dataSource: dataSource,
        objectID: null,
        objectName: objectName,
        parent: parent
      },
      key: getAddKeyNavigation(objectName)
    })
  }

  /**
   * Go next.
   */
  const goNext = () => {
    if (dataSource.children && dataSource.children.length > 0) {
      const selectedItemId = itemSelected.item && itemSelected.item.length > 0 ? itemSelected.item[0].value.value : null
      navigation.navigate({
        name: ConstScreenName.MenuForm,
        params: {
          workflow: children,
          parent: {
            id: selectedItemId,
            name: dataSource.name,
            level: dataSource.level
          }
        },
        key: getMenuKeyNavigation(dataSource.name)
      })
    }
  }

  /**
   * Go edit.
   */
  const goEdit = () => {
    navigation.navigate({
      name: ConstScreenName.AddForm,
      params: {
        parentScreen: ConstScreenName.GridForm,
        dataSource: dataSource,
        objectID: objectID,
        objectName: objectName,
        parent: parent,
        isEdit: true,
      },
      key: getAddKeyNavigation(objectName)
    })
  }

  /**
   * delete record.
   */
  const onDelete = () => {
    showAlert(strings.titleDelete, strings.confirmDelete, true,
    () => {
      dispatch(setIsProcessing(true))
      const onDelTimeOut = setTimeout(() => {
        dispatch(deleteRecord(objectName, objectID))
        setItemSelected({indexRow: -1, item: null})
        dispatch(setIsProcessing(false))
        clearTimeout(onDelTimeOut)
      }, 50)
    })
  }


  /**
   * Go copy.
   */
  const goCopy = () => {
    setItemSelected({indexRow: -1, item: null})
    navigation.navigate({
      name: ConstScreenName.AddForm,
      params: {
        parentScreen: ConstScreenName.GridForm,
        dataSource: dataSource,
        objectID: objectID,
        objectName: objectName,
        parent: parent,
        isCopyLayer: true,
      },
      key: getAddKeyNavigation(objectName)
    })
  }

  /**
   * Save to local.
   */
  const saveToLocal = () => {
    const PROJECT_NAME = 'PROJECT'
    const POINT_NAME = 'POINT'
    if(itemSelected.item && itemSelected.item.length > 0 && listItem && listItem.length > 0) {
      const pointID =  itemSelected.item.find(p => p.key === 'ID')
      const featurePointID =  itemSelected.item.find(p => p.key === 'POINT.POINT_ID')
      if(pointID){
        const point = getObjectById(listItem,  pointID.value.value, POINT_NAME)
        if(point){
          const project = getObjectById(listItem, point.parent.id, PROJECT_NAME)
          if(project){
            const featureProjID =  project.data.find(p => p.key === 'PROJECT.PROJ_ID')
            if(featurePointID && featureProjID) 
            navigation.navigate(ConstScreenName.ExportDataForm, { featurePointID, featureProjID, listItem, pointId: pointID.value.value, children: children, itemSelected: itemSelected.item})
          }
        }
      }
    }
  }

  /**
   * Create child.
   */
  const createChild = () => {
    navigation.navigate(ConstScreenName.CreateChild)
  }

  /**
   * show alert message.
   * @param {*} title 
   * @param {*} message 
   * @param {*} showCancel 
   * @param {*} actionCallback 
   */
  const showAlert = (title, message, showCancel, actionCallback) => {
    setTitleDialog(title)
    setMsgDialog(message)
    setCancelDialog(showCancel)

    if (actionCallback) {
      setActionDialog(() => actionCallback)
    }
    
    setIsShowDialog(true)
  }

  /**
   *  Function callback after click icon 
   * @param {Object} params
   */
  const callBack = (params = null) => {
    switch (params.event.name) {
      case ConstFooter.LIST_ICON.ARROW_LEFT:
        goBack()
        break
      case ConstFooter.LIST_ICON.ADD:
        goAdd()
        break
      case ConstFooter.LIST_ICON.ARROW_RIGHT:
        goNext()
        break
      case ConstFooter.LIST_ICON.EDIT:
        goEdit()
        break
      case ConstFooter.LIST_ICON.DELETE:
        onDelete()
        break
      case ConstFooter.LIST_ICON.COPY:
        goCopy()
        break
      case ConstFooter.LIST_ICON.SAVE_LOCAL:
        saveToLocal()
        break
      case ConstFooter.LIST_ICON.CREATE_CHILD:
        createChild()
        break
      default:
        break
    }
  }


  const renderGridView = () => {
    return (
      <View style={styles.gridStyle}>
        <ListTitle
          headers={dataSource.navigation.grid.header}
          features={dataSource.navigation.add.features}
          items={data}
        />
        <ScrollView>
          <ListItem
            items={data}
            headers={dataSource.navigation.grid.header}
            setItemSelected={setItemSelected}
            itemSelected={itemSelected}
            children={children}
            dataSource={dataSource}
            objectName={objectName}
            parent={parent}
            setTitleDialog={setTitleDialog}
            setMsgDialog={setMsgDialog}
            setCancelDialog={setCancelDialog}
            setActionDialog={setActionDialog}
            setIsShowDialog={setIsShowDialog}
          />
        </ScrollView>
      </View>
    )
  }

  return (
    <>
      <HeaderComponent
        title={dataSource.navigation.grid.title}
        back
        backCustom={goBack}
      />
      <View style={styles.container}>
        {dataSource.navigation.grid.header.length <= MAX_FEATURES_ON_GRID ? (
          renderGridView()
        ) : (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            >
            {renderGridView()}
          </ScrollView>
        )}
      </View>
      <FooterFormComponent
        callBack={callBack}
        listIcon={getFooterIconsGrid(dataSource.level)}
        itemSelected={itemSelected.item}
        typeScreen={ConstScreenName.GridForm}
      />
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
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  gridStyle: {
    flex:1
  }
})
