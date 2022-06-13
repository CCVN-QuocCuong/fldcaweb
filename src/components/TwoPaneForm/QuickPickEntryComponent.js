import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, Box } from 'native-base'
import { TouchableOpacity, Keyboard } from 'react-native'
import stylesTheme, { colorActive, colorDisable, colorWhite } from '../../theme/styles'
import { handleValueAndConcatRelevant, removeValueRelevant, validateDisplayQuickpickItem } from '../../services/relevant-service'
import strings from '../../config/strings'
import { FormType } from '../../config/formtype'
import { concatenateString, getWarningMessage } from '../../services/helpers'
import stylesTwoPane from '../../theme/stylesTwoPane'
import { QUICKPICK, POINT_NAME, POINT_TYPE, CONCAT } from '../../config/constants'
import { useDispatch } from 'react-redux'
import { setOriginalPointType } from '../../store/actions'

const QuickPickEntryComponent = ({
  parentInfo,
  arrayValues,
  setArrayValues,
  isShow,
  feature,
  currentIndex,
  setCurrentIndex,
  setListRequired,
  featuresConcatY,
  featureConcat,
  setStringConcatenation,
  formtype,
  propText,
  isResetText,
  removeListRequired,
  features,
  checkRequired,
  isResetIndex,
  dataSource,
  showAlert, 
}) => {
  const dispatch = useDispatch()
  const [indexItem, setIndexItem] = useState(-1)
  const [valueInput, setValueInput] = useState(propText)

  const maxFeatureLength = features.length

  const showItems = (!feature.items && !isShow) ? [] : feature.items.filter(p => !p.displayCondition ||
    validateDisplayQuickpickItem(p, parentInfo.data && parentInfo.data.data ? [arrayValues, parentInfo.data.data] : [arrayValues]))

  useEffect(() => {
    if (isShow) {
      Keyboard.dismiss()
      setValueInput(propText)
    }
  }, [isShow, propText])

  useEffect(() => {
    setIndexItem(-1)
  }, [isResetIndex])
  
  useEffect(() => {
    if (dataSource.name === POINT_NAME && feature.name === POINT_TYPE && propText) {
      dispatch(setOriginalPointType(propText))
    }
  }, [])

  useEffect(() => {
    if (isResetText && isShow) {
      setIndexItem(-1)
      let propItem = arrayValues.find(p => p.key === feature.name)
      if(propItem) propItem.value = {
        value: null,
        label: null
      }
      // concat string breadcrumb for Three pane.
      if(formtype === FormType.ThreePane){
        const stringConcatenation = handleValueAndConcatRelevant(feature, features, arrayValues, parentInfo)
        stringConcatenation.then(value => {
          let propItemConcat = arrayValues.find(p => p.type == CONCAT)
          if(propItemConcat) propItemConcat.value = {
            value: value,
            label: value
          }
          setStringConcatenation(value)
          }
        )
      }

      setArrayValues(arrayValues)

      if (isShow) {
        checkRequired(arrayValues)
        removeListRequired(feature.name)
      }
    }
  }, [isResetText])
  
  /**
  * On press item.
  */
  const onPressItem = (item, index) => {
    let propItem = arrayValues.find(p => p.key === feature.name)
    if(propItem) propItem.value = {
      id: item.guid,
      value: item.value,
      label: item.displayName
    }
    // concat string breadcrumb for Three pane.
    if(formtype === FormType.ThreePane){
      if ( feature.relevant && feature.type == QUICKPICK ) {
        removeValueRelevant(features, arrayValues, parentInfo)
      }
      let textCurrent = item.displayName
      if ( feature && feature.concatShowCodeValueYN ) textCurrent = item.value
      concatenateString(formtype, arrayValues, feature, textCurrent, featureConcat, featuresConcatY, setStringConcatenation)
    }

    setValueInput(item.value)
    setIndexItem(index)
    setArrayValues(arrayValues)
    setTimeout(() => {
      checkRequired(arrayValues)
    }, 300)

    if (currentIndex !== (maxFeatureLength - 1)) {
      setCurrentIndex(currentIndex + 1)
    }
    
    if (isShow && feature.required) {
      setListRequired(feature.name)
    }
  }

  const changeTypePoint = (item, index) => {
    if ((dataSource.name === POINT_NAME) && (feature.name === POINT_TYPE) && (valueInput !== item.value) && propText) {
      showAlert(strings.titleChangeTypePoint  , strings.messageChangeTypePoint, true,
        () => {
          onPressItem(item, index)
        }
        )
    } else {
      onPressItem(item, index)
    }
  }

  const renderPick = showItems.map((item, index) => (
    <TouchableOpacity key={item.value} onPress={() => feature.readonly ? null : changeTypePoint(item, index)} >
      <Box
        key={`${item.value}${index+1}`}
        bg={
        (feature.type === QUICKPICK && feature.isFloat && item.value && valueInput && Number(valueInput) == Number(item.value)
         ? colorActive : valueInput == item.value ? colorActive : null)}
        p={1}
        _text={[stylesTheme.boxQickPickStyle,{color: indexItem === index ? colorWhite : (
          feature.type === QUICKPICK && feature.isFloat && item.value && valueInput && Number(valueInput) == Number(item.value)
          ? colorWhite : valueInput == item.value ? colorWhite : colorDisable)}]}>
        {item.displayName}
      </Box>
    </TouchableOpacity>
  ))

  return (
    <View style={isShow ? stylesTwoPane.show : stylesTwoPane.hide}>
      <ScrollView>{isShow && renderPick}</ScrollView>
      <Text size='md' style={stylesTheme.hintStyle}>{feature.hint && feature.hint}</Text>
      {feature.required && <Text size='sm' style={stylesTheme.messageStyle}>{getWarningMessage( feature, valueInput, strings.warningQickPick )}</Text>}
    </View>
  )
}

export default React.memo(QuickPickEntryComponent)