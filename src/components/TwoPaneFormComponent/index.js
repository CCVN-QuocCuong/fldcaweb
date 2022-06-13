/* eslint-disable no-case-declarations */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import { Keyboard, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  LeftPaneComponent,
  RightPaneComponent,
  BreadcrumbComponent,
  SelectOptionComponent,
} from '../../components/TwoPaneForm'
import FooterFormComponent from '../../components/FooterFormComponent'
import { ConstFooter, ConstScreenName, Strings } from '../../config'
import {
  addRecord, saveFeatureStack, setIsProcessing, deletePointRecord
} from '../../store/actions'
import HeaderComponent from '../HeaderComponent'
import AlertDialogComponent from '../../components/AlertDialogComponent'
import { THREEPANE, CONCAT, NUMBER, TEXT, QUICKPICK, DATE, DATETIME, EXPRESSION, MEMO, POINT_NAME, POINT_TYPE, WARNING_NOTIFI, ERROR_NOTIFI, TOP, BASE } from '../../config/constants'
import { validateDisplayFeature, getDefaultValue } from '../../services/relevant-service'
import { FormType } from '../../config/formtype'
import { getFooterIconsTwoPane } from '../../services/footer-service'
import { getParentLevel, popFeatureStack, deleteTempStorage, clearTempTracingStorage, getValueByType } from '../../services/data-service'
import {countRequired, arrayRequired} from '../../services/required-service'
import strings from '../../config/strings'
import { updateResultCalculatedByFormula } from '../../services/calculate-service'
import { HStack } from 'native-base'
import { evalFormula } from '../../services/mathjs-service'

const TwoPaneFormComponent = ({
  thisObject, 
  arrayValues, 
  setArrayValues
}) => {
  let [stringConcatenation, setStringConcatenation] = useState(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [titleDialog, setTitleDialog] = useState(null)
  const [msgDialog, setMsgDialog] = useState(null)
  const [isShowDialog, setIsShowDialog] = useState(false)
  const [cancelDialog, setCancelDialog] = useState(true)
  const [actionDialog, setActionDialog] = useState(null)
  const [textBtnOkDialog, setTextBtnOkDialog] = useState(null)
  const [textBtnCancelDialog, setTextBtnCancelDialog] = useState(null)
  const [iskeyboard, setIskeyboard] = useState(true)
  const [isResetText, setIsResetText] = useState(false)
  const [isResetIndex, setIsResetIndex] = useState(false)
  const [statusAlert, setStatusAlert] = useState(WARNING_NOTIFI)

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const route = useRoute()

  const isEdit = route.params.isEdit ? true : false
  const [isRequiredAdd, setIsRequiredAdd] = useState(isEdit)
  const featureStack = useSelector(state => state.app.featureStack)
  const originalPointType = useSelector(state => state.app.originalPointType)
  const [initValues] = useState(JSON.stringify(arrayValues))

  const { projName } = route.params

  const relevantDataValues = thisObject.parentInfo && thisObject.parentInfo.data && thisObject.parentInfo.data.data ?
              [arrayValues, thisObject.parentInfo.data.data] : [arrayValues]

  let showFeatures = thisObject.dataSource.navigation.add.features.filter(p => {
    const validateFeature = validateDisplayFeature(p, relevantDataValues)
    
    if(!validateFeature){
      const itemArrayValue = arrayValues.find(e => e.key === p.name)

      if(itemArrayValue) {
        const defaultDataValues = thisObject.parentInfo && thisObject.parentInfo.data && thisObject.parentInfo.data.data ?
              [...arrayValues, ...thisObject.parentInfo.data.data] : arrayValues

        const pDefault = getDefaultValue(p, defaultDataValues)
        itemArrayValue.value.value = pDefault
        itemArrayValue.value.label = pDefault

        if(p.type === QUICKPICK && p.items && p.items.length > 0){
          const defaultQuickPickItem = p.items.find(k => k.value === pDefault)
          if (defaultQuickPickItem) {
            itemArrayValue.value.id = defaultQuickPickItem.guid
          }
        }
      }
    }
    
    return !p.hide && p.type !== THREEPANE && p.type !== CONCAT && validateFeature
  })

  const listRequired = arrayRequired(arrayValues, showFeatures)
  const [arrayFormRequired, setArrayFormRequired] = useState(listRequired)

  if (!showFeatures || showFeatures.length === 0) {
    showFeatures = []
  }

  const maxFeatureLength = showFeatures.length

  let showFeaturesCombobox = null
  let featuresConcatY = null
  let featureConcat = null
  let propItemCombobox = null
  if (thisObject.dataSource.navigation.add.formtype === FormType.ThreePane) {
    showFeaturesCombobox = thisObject.dataSource.navigation.add.features.find(p => !p.hide && p.type === THREEPANE && validateDisplayFeature(p, arrayValues))
    featuresConcatY = thisObject.dataSource.navigation.add.features.filter(p => !p.hide && p.concatYN && validateDisplayFeature(p, [arrayValues]))
    featureConcat = thisObject.dataSource.navigation.add.features.find(p => p.type === CONCAT && validateDisplayFeature(p, [arrayValues]))

    propItemCombobox = arrayValues.find(p => p.key === showFeaturesCombobox.name)

    if (!showFeaturesCombobox) {
      showFeaturesCombobox = []
    }
    if (!featuresConcatY) {
      featuresConcatY = []
    }
    if (!featureConcat) {
      featureConcat = []
    }
  }

  const valueCombobox = propItemCombobox && propItemCombobox.value ? propItemCombobox.value.value : null
  const itemCombobox = (showFeaturesCombobox && showFeaturesCombobox.items) && showFeaturesCombobox.items.find(featureShow => featureShow.value === valueCombobox)
  const displayNameCombobox = itemCombobox && itemCombobox.displayName

  useEffect(() => {
    const count = countRequired(showFeatures)
    if (count === arrayFormRequired.length) {
      setIsRequiredAdd(true)
    }
  }, [arrayFormRequired, valueCombobox])

  useEffect(() => {
    const keyboardDidHideListener =  Keyboard.addListener('keyboardDidHide', () => {
      setIskeyboard(false)
    })
    return () => {
      keyboardDidHideListener.remove()
    }
  }, [])

  /**
   * check required feature.
   */
  const checkRequired = (arrayValue) => {
    const arrayFeatures = thisObject.dataSource.navigation.add.features.filter(p => !p.hide && p.type !== THREEPANE && p.type !== CONCAT && validateDisplayFeature(p, [arrayValue]))
    const count = countRequired(arrayFeatures)
    const array = arrayRequired(arrayValues, arrayFeatures)
    setArrayFormRequired(array)
    if (count === array.length) {
      setIsRequiredAdd(true)
    }else{
      setIsRequiredAdd(false)
    }
  }

  /**
   * Go up feature.
   */
  const goUp = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  /**
   * go down.
   */
  const goDown = () => {
    if (currentIndex < showFeatures.length - 1) {
        setCurrentIndex(currentIndex + 1)
    }
  }

  /**
  * Get Feature require when goback from GetLocationForm screen.
  */
  const getFeatureRequire =() =>{
    const featureRequire = arrayRequired(arrayValues, showFeatures)
    setArrayFormRequired(featureRequire)
  }

  /**
   * Extract location.
   */
  const extractLocation = () => {
    navigation.navigate(ConstScreenName.GetLocationForm, {
      arrayValues: arrayValues,
      showAlert: showAlert,
      setArrayValues: setArrayValues,
      getFeatureRequire: getFeatureRequire,
    })
  }

  /**
   * delete
   */
  const onDelete = () => {
    showAlert(strings.titleClear , strings.confirmDeleteItem, true,
    () => {
      setIsResetText(true)
      setTimeout(() => {
        setIsResetText(false)
      }, 10)
    },
    'OK',
    'Cancel'
    )
  }

  /**
  * make standard value.
  */
  const makeStandardValue = () => {
    arrayValues.forEach(p => {
      const foundFeature = showFeatures.find(f => f.name === p.key)
      if (foundFeature && foundFeature.pad > 0) {
        const value = p.value.value ? Number(p.value.value).toFixed(foundFeature.pad) : p.value.value
        p.value.value = value
        p.value.label = value
      }
    })
  }

  /**
   * Check exist record.
   * @returns 
   */
  const isExistedRecord = () => {
    let result = false

    if (thisObject.listItem && thisObject.listItem.length > 0) {
      // get class of items.
      const foundClass = thisObject.listItem.find(p => p.name === thisObject.dataSource.name)
      if (!foundClass || !foundClass.items) {
        return false
      }

      const arrayItems = foundClass.items.filter(p => p.parent.id === route.params.parent.id)
      // get primary features.
      const primaryFeatues = thisObject.dataSource.navigation.add.features.filter(p => p.primary)

      if (primaryFeatues) {
        // get id value.
        const idItemValue = arrayValues.find(p => p.key === 'ID')
        const id = idItemValue.value.value

        // get primary populated data from arrayvalues.
        const primaryItemValues = getPrimaryItemValues(arrayValues, primaryFeatues)
        for (const pItem of arrayItems) {
          // check with edit case.
          if (id === pItem.key) {
            continue
          }

          let count = 0
          const primaryItemValueDatabase = getPrimaryItemValues(pItem.data, primaryFeatues)

          for (const item1 of primaryItemValues) {
            const type = getFeatureType(item1.key, primaryFeatues)

            if (primaryItemValueDatabase.find(
              p => p.key === item1.key && getValueByType(p.value.value, type) === getValueByType(item1.value.value, type))) {
              count++
            }
          }

          // duplicate primary values.
          if (count === primaryFeatues.length) {
            result = true
            break
          }
        }
      }
    }

    return result
  }
 
  // get primary item values.
  const getPrimaryItemValues = (arrayItems, primaryFeatues) => {
    return arrayItems.filter(p => {
      for (const pFeature of primaryFeatues) {
        if (p.key === pFeature.name) {
          return true
        }
      }

      return false
    })
  }

  // get feature type.
  const getFeatureType = (keyFeature, primaryFeatues) => {
    const foundFeature = primaryFeatues.find(p => p.name === keyFeature)
    return foundFeature ? foundFeature.type : null
  }

  /**
   * check Constraint
   * @return String
   */
  const checkConstraint = () => {
    let isConstraint = null
    showFeatures.forEach(feature => {
      if (feature.constraint && feature.constraintType === EXPRESSION && feature.type !== DATE  && feature.type !== DATETIME) {
        let formula = feature.constraint
        arrayValues.forEach(e => {
          if (feature.constraint && feature.constraint.indexOf(e.key) !== -1) {
            const value = e.value.value ? Number(e.value.value) : null
            formula = formula.replace(new RegExp(e.key, 'g'), value)
          }
        })
        formula = formula.replace(/null/gi, 0)
        if (!(eval(formula))) {
          const isValueFinal = evalFormula(formula)
          if(isValueFinal === 'false'){
            isConstraint = feature.constraintMessage ? feature.constraintMessage : `(${feature.displayName}) ${Strings.valueInvalid}`
          }
        }
      }
    })
    return isConstraint
  }

  const clearAfterSave = (onSaveTimeOut) => {
    clearTempTracking()
    dispatch(setIsProcessing(false))
    clearTimeout(onSaveTimeOut)
  }

  /**
   * save data.
   */
   const onSave = () => {
    
    dispatch(setIsProcessing(true))
    const onSaveTimeOut = setTimeout(() => {

      const valueBase = arrayValues.filter(feature => -1 !== feature.key.toUpperCase().indexOf(BASE))
      const valueTop = arrayValues.filter(feature => -1 !== feature.key.toUpperCase().indexOf(TOP))

      if ((valueBase.length > 0) && (valueTop.length > 0) && (Number(valueBase[0].value.value) < Number(valueTop[0].value.value))) {
        setStatusAlert(ERROR_NOTIFI)
        showAlert(strings.error, strings.baseOrBaseInvalid, false)
        clearAfterSave(onSaveTimeOut)
        return
      }

      if (checkConstraint()) {
        showAlert(strings.warning, checkConstraint(), false)
        clearAfterSave(onSaveTimeOut)
        return
      }
  
      if (isExistedRecord()) {
        setStatusAlert(ERROR_NOTIFI)
        showAlert(strings.error, strings.warningExistedRecord, false)
        clearAfterSave(onSaveTimeOut)
        return
      }

      setStringConcatenation('')
      makeStandardValue()
      
      const arrayFormulaOfFeatures = thisObject.dataSource.navigation.add.features.filter(p => p.calc && p.calc.trim().length > 0 
      && p.dependCalc && p.dependCalc.length > 0
      && (p.type === NUMBER || p.type === TEXT || p.type === MEMO))

      if(arrayFormulaOfFeatures && arrayFormulaOfFeatures.length > 0) {
        const refDataValues = thisObject.parentInfo && thisObject.parentInfo.data && thisObject.parentInfo.data.data ?
          [...arrayValues, ...thisObject.parentInfo.data.data] : arrayValues

        updateResultCalculatedByFormula(arrayFormulaOfFeatures, refDataValues)    
      }

      dispatch(addRecord(thisObject.dataSource.name, thisObject.dataSource.level,
      {
        id: thisObject.parent.id,
        name: thisObject.dataSource.parent,
        level: getParentLevel(thisObject.dataSource.level),
        feature: thisObject.parent && thisObject.parent.feature ? thisObject.parent.feature : undefined,
        temp: thisObject.parent && thisObject.parent.temp ? thisObject.parent.temp : undefined
      }, arrayValues))

      // Delete all child records of this point when users change POINT.TYPE
      if (thisObject.dataSource.name === POINT_NAME && originalPointType) {
        const itemID = arrayValues.find(p => p.key === 'ID')
        const itemPointType = arrayValues.find(p => p.key === POINT_TYPE)
        const objectId = itemID && itemID.value ? itemID.value.value : null
        const valuePointType = itemPointType && itemPointType.value ? itemPointType.value.value : null
        if (objectId && valuePointType && (valuePointType !== originalPointType)) {
          dispatch(deletePointRecord(thisObject.dataSource.name, objectId))
        }
      }

      // clear temp data of this id.
      clearAfterSave(onSaveTimeOut)
      
      navigation.goBack()
    }, 1000)
  }

  /**
   * Go back.
   */
  const goBack = () => {
    const back = () => {
      if (thisObject.parentScreen !== ConstScreenName.GridForm && featureStack && featureStack.length > 0)
        goBackAddFeature()
      else
        goBackNormalWorkFlow()
    }
    const string = JSON.stringify(arrayValues)
    const replaced = string.replace(/""/g, null)
    if (initValues !== replaced) {
      showAlert(strings.warning, strings.warningGoBack , true,
      () => {
        back()
      })
    } else {
      back()
    }
  }

  /**
   * go back add feature.
   */
  const goBackAddFeature = () => {
    dispatch(setIsProcessing(true))

    const goBackAddFeatureTimeOut = setTimeout(() => {
      // pop latest feature stack.
      const featureStackItem = popFeatureStack(featureStack)
      
      // save new features tack to redux.
      dispatch(saveFeatureStack(featureStack))
      dispatch(setIsProcessing(false))
      clearTimeout(goBackAddFeatureTimeOut)

      if (featureStackItem) {
        navigation.goBack()
      }
    }, 50)
  }

  /**
   * go back normal workflow.
   */
  const goBackNormalWorkFlow = () => {
    dispatch(setIsProcessing(true))

    const goBackNormalWorkFlowTimeOut = setTimeout(() => {
      dispatch(setIsProcessing(false))
      clearTimeout(goBackNormalWorkFlowTimeOut)

      // delete temp data if having.
      deleteTempData()

      if (thisObject.parentScreen === ConstScreenName.GridForm) {
        navigation.goBack()
      } else {
        navigation.goBack()
      }
    }, 50)
  }

    /**
   * toggle keyboard.
   */  
  const toggleKeyboard = () => {
    if (iskeyboard) {
      Keyboard.dismiss()
    } else {
      setIskeyboard(!iskeyboard)
    }
  }

  /**
  * Dismiss keyboard.
  */  
  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  /**
   * Delete temp data before go back.
   * @param {*} parentTempId current object id.
   * @param {*} parentTempName current workflow name.
   */
  const deleteTempData = () => {
    let objectId = null

    if (arrayValues) {
      const itemId = arrayValues.find(p => p.key === 'ID')
      objectId = itemId && itemId.value ? itemId.value.value : null

      if (objectId) {
        deleteTempStorage(thisObject.listItem, objectId, thisObject.dataSource.name)
      }
    }
  }

  /**
   * Clear temp tracking of sub-layer before saving.
   */
  const clearTempTracking = () => {
    let objectId = null

    if (arrayValues) {
      const itemId = arrayValues.find(p => p.key === 'ID')
      objectId = itemId && itemId.value ? itemId.value.value : null

      if (objectId) {
        clearTempTracingStorage(thisObject.listItem, objectId, thisObject.dataSource.name)
      }
    }
  }

  /**
   * set list required.
   * @param {} feature 
   */
  const setListRequired = (feature) => {
    if (!arrayFormRequired.includes(feature)) {
      setArrayFormRequired([...arrayFormRequired, feature])
    }
  }

  /**
   * remove list required.
   * @param {} feature 
   */
  const removeListRequired = (feature) => {
    if (arrayFormRequired.includes(feature)) {
      setArrayFormRequired((featureName) => featureName.filter((item) => (item !== feature)))
    }
  }

  /**
   * show alert message.
   * @param {*} title 
   * @param {*} message 
   * @param {*} showCancel 
   * @param {*} actionCallback 
   */
   const showAlert = (title, message, showCancel, actionCallback, textBtnOk = 'OK', textBtnCancel = 'Cancel') => {
    setTitleDialog(title)
    setMsgDialog(message)
    setCancelDialog(showCancel)
    setTextBtnOkDialog(textBtnOk)
    setTextBtnCancelDialog(textBtnCancel)
    if (actionCallback) {
      setActionDialog(() => actionCallback)
    }
    
    setIsShowDialog(true)
  }

  /**
   * callback from footer.
   * @param {} params 
   */
  const callBack = (params = null) => {
    switch (params.event.name) {
      case ConstFooter.LIST_ICON.ARROW_LEFT:
        goUp()
        break

      case ConstFooter.LIST_ICON.ARROW_RIGHT:
        goDown()
        break

      case ConstFooter.BUTTON_SAVE:
        onSave()
        break

      case ConstFooter.LIST_ICON.LOCATION:
        extractLocation()
        break

      case ConstFooter.LIST_ICON.DELETE:
        onDelete()
        break
        
      case ConstFooter.LIST_ICON.KEYBOARD:
        toggleKeyboard()
        break

      case ConstFooter.LIST_ICON.CHECK:
        onSave()
        break
      default:
        break
    }
  }

  return (
    <>
       <HeaderComponent title={thisObject.dataSource.navigation.add.title} back right
        rightCustom={callBack}
        backCustom={goBack}
        isRequiredAdd={isRequiredAdd}
      />
       {thisObject.dataSource.navigation.add.formtype === FormType.ThreePane ? (
        <>
          <BreadcrumbComponent
            arrayValues={arrayValues}
            stringConcatenation={stringConcatenation}
            featureConcat={featureConcat}
          />
          <View>
            <SelectOptionComponent
              setIsResetIndex={setIsResetIndex}
              isResetIndex={isResetIndex}
              setCurrentIndex={setCurrentIndex}
              dataSource={thisObject.dataSource}
              arrayValues={arrayValues}
              setArrayValues={setArrayValues}
              showFeaturesCombobox={showFeaturesCombobox ? showFeaturesCombobox : {}}
              setStringConcatenation={setStringConcatenation}
              propItemCombobox={displayNameCombobox}
              checkRequired={checkRequired}
              showAlert={showAlert}
              dismissKeyboard={dismissKeyboard}
            />
          </View>
        </>
      ) : (null)
      }

      <HStack safeAreaX style={styles.container}>
        <LeftPaneComponent
          features={showFeatures}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          arrayValues={arrayValues}
          featureStack={thisObject.featureStack}
          dataSource={thisObject.dataSource}
          parentScreen={thisObject.parentScreen}
          parent={thisObject.parent}
          arrayFormRequired={arrayFormRequired}
        />
        <RightPaneComponent
          isResetIndex={isResetIndex}
          parentInfo={thisObject.parentInfo}
          arrayValues={arrayValues}
          setArrayValues={setArrayValues}
          features={showFeatures}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          setListRequired={setListRequired}
          removeListRequired={removeListRequired}
          setIsRequiredAdd={setIsRequiredAdd}
          stringConcatenation={stringConcatenation}
          setStringConcatenation={setStringConcatenation}
          featuresConcatY={featuresConcatY}
          featureConcat={featureConcat}
          formtype={thisObject.dataSource.navigation.add.formtype}
          arrayFormRequired={arrayFormRequired}
          iskeyboard={iskeyboard}
          setIskeyboard={setIskeyboard}
          isResetText={isResetText}
          checkRequired={checkRequired}
          goDown={goDown}
          projName={projName}
          dataSource={thisObject.dataSource}
          showAlert={showAlert}
        />
      </HStack>
      <FooterFormComponent
        callBack={callBack}
        listIcon={getFooterIconsTwoPane(thisObject.dataSource.level)}
        typeScreen={ConstScreenName.AddForm}
        currentIndex={currentIndex}
        maxFeatureLength={maxFeatureLength}
        isRequiredAdd={isRequiredAdd}
      />
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

export default React.memo(TwoPaneFormComponent)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#ffffff'
  },
})