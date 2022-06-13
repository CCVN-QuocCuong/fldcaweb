import React, {useEffect, useRef, useState} from 'react'
import {View, Text, ScrollView, Input} from 'native-base'
import stylesTheme from '../../theme/styles'
import { MAX_LENGTH, MEMO } from '../../config/constants'
import strings from '../../config/strings'
import { concatenateString, getWarningMessage, showToast } from '../../services/helpers'
import stylesTwoPane from '../../theme/stylesTwoPane'
import { getSpecialAlphanumeric } from '../../config/limitCharacters'
import ToastDialogComponent from '../ToastDialogComponent'
import { checkRequiredFeature } from '../../services/required-service'

const AlphanumericEntryComponent = ({
  arrayValues, 
  setArrayValues, 
  isShow, 
  feature, 
  setListRequired, 
  removeListRequired,
  setIsRequiredAdd,
  setStringConcatenation,
  featuresConcatY,
  featureConcat,
  propText,
  formtype,
  iskeyboard,
  setIskeyboard,
  isResetText,
  goDown,
  checkRequired,
}) => {
  const [textInput, setTextInput] = useState('')
  const autoforcusInput = useRef()
  const typingTimeoutRef = useRef(null)
  const [isToast, setIsToast] = useState(false)

  useEffect(() => {
    if (isShow) {
      const propTextNew = propText ? propText : ''
      setTextInput(propTextNew)
      setIskeyboard(true)
    }
  }, [isShow])

  useEffect(() => {
    if (iskeyboard && isShow) {
      setTimeout(() => {
        if (autoforcusInput.current) {
          autoforcusInput.current.focus()
        }
      }, 1)
    }
  }, [iskeyboard, isShow])

  useEffect(() => {
    if (isResetText && isShow) {
      setTextInput(null)
      onChangeText(null)
      checkRequired(arrayValues)
      // concat string breadcrumb for Three pane.
      concatenateString(formtype, arrayValues, feature, '', featureConcat, featuresConcatY, setStringConcatenation)
      setArrayValues(arrayValues)
    }
  }, [isResetText])

  /**
   * set value to arrayValues
   * @param {*} textChange value after validated
   */
  const onChangeText = (textChange) => {
    let propItem = arrayValues.find(p => p.key === feature.name)
    if (propItem) {
      const value = textChange ? textChange : null
      propItem.value = { value: value, label: value}
      // concat string breadcrumb for Three pane.
      concatenateString(formtype, arrayValues, feature, textChange, featureConcat, featuresConcatY, setStringConcatenation)
      setArrayValues(arrayValues)
    }
  }
  
  /**
   * validate input value
   * @param {*} textChange value input
   */
  const checkValidationInput = (textChange) => {
    const featureLength = feature.length > 0 ? feature.length : MAX_LENGTH
    if (textChange.length <= featureLength) {
      const stringSpecial = getSpecialAlphanumeric()
      const regex = new RegExp(`[${stringSpecial}]`, 'g')
      const textReplaced = textChange.replace(regex, '') 

      if (textReplaced.indexOf(' ') !== 0 ) {
        setTextInput(textReplaced)
        checkRequiredFeature(feature, textReplaced, setIsRequiredAdd, setListRequired, removeListRequired)
        // use debounce to prevent re-render too much 
        if(typingTimeoutRef.current){
          clearTimeout(typingTimeoutRef.current)
        }
        typingTimeoutRef.current = setTimeout(() => {
          //  here only run once 
          onChangeText(textReplaced)
        }, 300)
      }
    } else {
      showToast(setIsToast)
    }
  }

  /**
   * Toggle keyboard.
   */
  const toggleKeyboard = () =>{
    setIskeyboard(true)
  }

  return (
    <View style={isShow ? stylesTwoPane.show : stylesTwoPane.hide}>
      <ScrollView>
        <Text size='md' style={stylesTwoPane.titleStyle}>{feature.displayName}</Text>
        <Input
          multiline={feature.type == MEMO ? true : false}
          importantForAutofill='no'
          onSubmitEditing={goDown}
          blurOnSubmit={true}
          onTouchStart={toggleKeyboard}
          ref={autoforcusInput}
          isReadOnly={feature.readonly ? true : false}
          isInvalid={feature.required && !textInput}
          value={textInput}
          autoFocus={isShow}
          returnKeyType="next"
          onChangeText={checkValidationInput}
          marginX={4}
          placeholder=""
          borderRadius={0}
          fontWeight="500"
          style={stylesTwoPane.inputStyle}
          _light={{
            placeholderTextColor: 'gray.400',
          }}
          _dark={{
            placeholderTextColor: 'blueGray.50',
          }}
        />
        <Text size='md' style={stylesTwoPane.descriptionStyle}>{feature.hint}</Text>
        {isToast && <ToastDialogComponent />}
        <Text size='sm' style={stylesTheme.messageStyle}>{getWarningMessage(feature, textInput, strings.warningEmpty)}</Text>
      </ScrollView>
    </View>
  )
}

export default React.memo(AlphanumericEntryComponent)