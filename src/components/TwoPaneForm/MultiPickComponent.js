import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Box,
  Pressable,
  ScrollView,
} from 'native-base'
import { StyleSheet, TextInput } from 'react-native'
import strings from '../../config/strings'
import { concatenateString, getWarningMessage, showToast } from '../../services/helpers'
import theme, { colorActive, colorDarkGray, colorWhite } from '../../theme/styles'
import stylesTwoPane from '../../theme/stylesTwoPane'
import { validateDisplayQuickpickItem } from '../../services/relevant-service'
import stylesTheme from '../../theme/styles'
import { useSelector } from 'react-redux'
import ToastDialogComponent from '../ToastDialogComponent'

const MultiPickComponent = ({
  isShow,
  feature,
  currentIndex,
  arrayValues, 
  setArrayValues, 
  setStringConcatenation,
  featuresConcatY,
  featureConcat,
  formtype,
  propTextMultiPick,
  setListRequired,
  removeListRequired,
  parentInfo,
  isResetText,
  checkRequired,
}) => {
  const showItems = feature ? (!feature.items ? [] : feature.items.filter(p => !p.displayCondition ||
    validateDisplayQuickpickItem(p, parentInfo.data && parentInfo.data.data ? [arrayValues, parentInfo.data.data] : [arrayValues]))) : null
  const isLoading = useSelector(state => state.app.isProcessing)

  const [isToast, setIsToast] = useState(false)
  const [indexItem, setIndexItem] = useState(-1)
  const [concatString, setConcatString] = useState(propTextMultiPick ? propTextMultiPick : '') 
  const [multiPickString, setMultiPickString] = useState(null) 
  const [isShowTwoPane, setIsShowTwoPane] = useState(false)

  // set conncat string when change feature
  useEffect(() => {
    setConcatString(propTextMultiPick)
  }, [propTextMultiPick, currentIndex]) 

  // remove value and check required when onpress delete button on footer
  useEffect(() => {
    if ((isResetText && isShow)) {
      setConcatString(null)
      setMultiPickString(null)
      let propItem = arrayValues.find(p => p.key === feature.name)
      if (propItem) {
        propItem.value = { value: null, label: null}
        setArrayValues(arrayValues)
      }
      if (feature.required) {
        checkRequired(arrayValues)
      }
    }
  }, [isResetText])

  // on save and update concat string when onpress button save
  useEffect(() => {
    if ((isShow && isLoading)) {
      onSave()
    }
  }, [isLoading])

  // get value current and set concat string when next feature
  useEffect(() => {
    if (isShow) {
      getMultiPickStringCurrent()
    } else if(isShowTwoPane  && !isLoading) {
      onSave()
    }
    if (!isShowTwoPane) {
      setIsShowTwoPane(true)
    }
  }, [isShow])

  const getMultiPickStringCurrent = () => {
    if (feature.multipickShowCodeValueYN) {
      let prop = propTextMultiPick
      showItems.forEach(item => {
        const regex = new RegExp(item.displayName, 'g')
        prop = prop.replace(regex, item.value)   
      })
      setMultiPickString(prop)
    } else {
      setMultiPickString(propTextMultiPick)
    }
  }

  const checkMaxLenghtMultiPick = (items) => {
    if (concatString) {
      if ((concatString.length + items.value.length) < feature.multiPickMaxLength) {
        return true
      } else {
        return false
      }
    }
    return true
  }

  const onPressItem =  (items, index) => {
    if (checkMaxLenghtMultiPick(items)) {
      setIndexItem(index + 1)
      if (feature.required && !concatString) {
        setListRequired(feature.name)
      }
      let textCurrent = items.displayName
      if ( feature && feature.concatShowCodeValueYN ) textCurrent = items.value
      const multiPickTextCurent = feature.multipickShowCodeValueYN ? items.value : items.displayName
      if(feature.isMultiPickOne) {
        setMultiPickString(multiPickTextCurent ? multiPickTextCurent : '')
        setConcatString(items.value ? textCurrent : '')
      } else {
        setMultiPickString(`${multiPickString ? multiPickString.trim() : ''}${multiPickString && multiPickString.length > 0 ? (feature.multiPickConcatChar === 'and' ?
        ` ${feature.multiPickConcatChar} ` : feature.multiPickConcatChar ) : ''}${items.value ? multiPickTextCurent : ''}`)
       
        setConcatString(`${concatString ? concatString.trim() : ''}${concatString && concatString.length > 0 ? (feature.multiPickConcatChar === 'and' ?
        ` ${feature.multiPickConcatChar} ` : feature.multiPickConcatChar ) : ''}${items.value ? textCurrent : ''}`)
      } 
    } else {
      showToast(setIsToast)
  }
}

  /**
  * On press button next.
  */
  const onSave = () => {
    let propItem = arrayValues.find(p => p.key === feature.name)
    const valueFeature = feature.multipickShowCodeValueYN ? concatString : multiPickString
    if(propItem) propItem.value = { value: valueFeature, label: valueFeature}
    // concat string breadcrumb for Three pane.
    concatenateString(formtype, arrayValues, feature, valueFeature, featureConcat, featuresConcatY, setStringConcatenation)

    if (feature.required && valueFeature) {
      setListRequired(feature.name)
    }

    setArrayValues(arrayValues)
    setIndexItem(-1)
  }

  /**
  * Change text
  */
  const onChangeText = (textChange) => {
    if (textChange.length <= feature.multiPickMaxLength) {
      setMultiPickString(textChange)
      setConcatString(textChange)
    }else{
      showToast(setIsToast)
    }

    if (!textChange && feature.required ) {
      removeListRequired(feature.name)
      //remove value of feature
      let propItem = arrayValues.find(p => p.key === feature.name)
      if(propItem) propItem.value = { value: null, label: null}
      checkRequired(arrayValues)
    } else if (feature.required && textChange.length == 1) { 
      setListRequired(feature.name)
    }
  }

  /**
  * render Workflow.
  */
  const renderWorkflow = () => {
    return showItems.map((items, index) => (
      <Pressable
        onPress={() => onPressItem(items, index)}
        key={`${items.value}${index+1}`}
      >
        <Box
          bg={indexItem ? indexItem === index + 1 ? colorActive : null : null}
          p={2}
          _text={{
            color: indexItem ? indexItem === index + 1 ? colorWhite : colorDarkGray : colorDarkGray,
          }}>
          {items.displayName}
        </Box>
      </Pressable>
    )
    )
  }

  return (
    <View style={isShow ? stylesTwoPane.show : stylesTwoPane.hide}>
    {isShow && 
      <View style={styles.modalBody}>
        <View style={stylesTheme.rightPaneChildMultipick}>
            <TextInput
              style={theme.textInputStyle}
              multiline
              isReadOnly={!feature.isMultiPickFreeText ? true : false}
              textAlignVertical='top'
              onChangeText={onChangeText}
              value={multiPickString}
              />
            {isToast && <ToastDialogComponent />}
        </View>
        <View style={stylesTheme.leftPaneChildMultipick}>
          <ScrollView>
            {renderWorkflow()}
          </ScrollView>
        </View>
        {feature.hint &&
        <View style={stylesTheme.hintMultipickStyle}>
          <ScrollView>
            <Text size='md' style={stylesTheme.hintStyle}>{feature.hint}</Text>
          </ScrollView>
        </View>
        }
        {feature.required && <Text size='sm' style={stylesTheme.messageStyle}>{getWarningMessage( feature, multiPickString, strings.warningQickPick )}</Text>}
      </View>
    }
    </View>
    )
}

export default React.memo(MultiPickComponent)

const styles = StyleSheet.create({
  modalBody: {
    flex: 1,
  },
})
