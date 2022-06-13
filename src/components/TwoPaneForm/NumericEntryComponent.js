import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Input } from 'native-base'
import { ScrollView } from 'react-native'
import stylesTheme from '../../theme/styles'
import strings from '../../config/strings'
import { concatenateString, getWarningMessage, showToast } from '../../services/helpers'
import stylesTwoPane from '../../theme/stylesTwoPane'
import ToastDialogComponent from '../ToastDialogComponent'
import { checkRequiredFeature } from '../../services/required-service'

const NumericEntryComponent = ({
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
      setTextInput(propText)
      setIskeyboard(true)
    }
  }, [isShow, arrayValues])

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
      //concat string breadcrumb for Three pane.
      concatenateString(formtype, arrayValues, feature, '', featureConcat, featuresConcatY, setStringConcatenation)
      setArrayValues(arrayValues)
    }
  }, [isResetText])

  /**
   * check the input value according to the formula
   * @param {*} element fuature
   * @param {Number} textChange value input
   * @returns
   */
  const getIsCheckFormula = (element, textChange) => {
    if (element && textChange !== '-') {
      let formula = element.constraint
      const newText = textChange ? Number(textChange) * 100 : null
      formula = formula.replace(new RegExp(feature.name, 'g'), newText)
      arrayValues.forEach(e => {
        const value = e.value.value ? Number(e.value.value) * 100 : null
        formula = formula.replace(new RegExp(e.key, 'g'), value)
      })
      if (eval(formula)) {
        return true
      } else {
        return false
      }
    }
    return true
  }

  /**
   * set value to arrayValues
   * @param {*} textChange value after validated
   */
  const onChangeText = (textChange) => {
    let propItem = arrayValues.find(p => p.key === feature.name)

    if (propItem) {
      const value = textChange ? textChange : null
      propItem.value = { value: value, label: value }
      // concat string breadcrumb for Three pane.
      concatenateString(formtype, arrayValues, feature, textChange, featureConcat, featuresConcatY, setStringConcatenation)
      setArrayValues(arrayValues)
    }
  }

  /**
   * validate input value
   * @param {*} textChange value input after check pattern
   * @param {*} pattern 
   */
  const validateNumber = (textChange, pattern) => {
    let regex = new RegExp(pattern, 'g')

    if (feature.length != 0 && (textChange.length > feature.length || ((textChange.length > (feature.length - feature.pad)) && (textChange.indexOf('.') == -1)))) {
      showToast(setIsToast)
    }

    if (!textChange) {
      checkRange(textChange)
    } else if (regex.test(textChange)) {
      checkRange(textChange)
    }
  }

  /**
   * Check constraint.
   * @param {*} textChange value input
   */
  const checkConstraint = (textChange) => {
    if (feature.constraint && textChange !== '' && textChange !== '-') {
      const isCheckFormula = getIsCheckFormula(feature, textChange)
      return isCheckFormula
    }
    return true
  }

  /**
   * check range input value 
   * @param {*} textChange value input
   */
  const checkRange = (textChange) => {
    checkRequiredFeature(feature, textChange, setIsRequiredAdd, setListRequired, removeListRequired)
    const delaySetValue = (action) => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
      typingTimeoutRef.current = setTimeout(() => {
        action()
      }, 800)
    }

    if (feature.max) {
      if (textChange <= feature.max) {
        const newText = (textChange == feature.max && textChange.indexOf('.') !== -1) ? textChange.substring(0, textChange.length - 1) : textChange
        setTextInput(newText)
        if (textChange >= feature.min) {
          delaySetValue(() => onChangeText(newText))
        } else {
          delaySetValue(() => { [setTextInput(''), onChangeText('')] })
        }
      }
    } else {
      setTextInput(textChange)
      delaySetValue(() => { onChangeText(textChange) })
    }
  }

  /**
   * onchange and check pattern for value 
   * @param {*} textChange value input
   */
  const updateInputValue = (textChange) => {
    const length = feature.length

    if (textChange !== '-.') {
      if (feature.isFloat) {
        if (feature.length == 0) {
          validateNumber(textChange, '^(-)?\\d*(\\.\\d*)?$')
        } else if (!feature.pad || feature.pad === 0) {
          if (textChange.length <= length) {
            validateNumber(textChange, '^(-)?\\d*(\\.\\d*)?$')
          }
        } else {
          const pad = feature.pad
          validateNumber(textChange, `^(-)?\\d{0,${length - pad}}(\\.\\d{0,${pad}})?$`)
        }
      } else {
        const newText = textChange === '.' ? '-' : textChange
        if (feature.length == 0) {
          validateNumber(newText, '^(-)?\\d*?$')
        } else {
          validateNumber(newText, `^(-)?\\d{0,${length}}?$`)
        }
      }
    }
  }

  const toggleKeyboard = () => {
    setIskeyboard(true)
  }

  /**
   * Handle hint.
   * @return
   */
  const handleHint = () => {
    if (feature.max || feature.min) {
      return `${feature.hint}, Range ${feature.min} - ${feature.max}`
    } else {
      return feature.hint
    }
  }

  return (
    <View style={isShow ? stylesTwoPane.show : stylesTwoPane.hide}>
      <ScrollView>
        <Text size='md' style={stylesTwoPane.titleStyle}>{feature.displayName}</Text>
        <Input
          importantForAutofill='no'
          onSubmitEditing={goDown}
          blurOnSubmit={true}
          onTouchStart={toggleKeyboard}
          ref={autoforcusInput}
          isReadOnly={feature.readonly}
          isInvalid={(!textInput && feature.required) || !checkConstraint(textInput)}
          value={textInput}
          autoFocus={isShow}
          onChangeText={updateInputValue}
          marginX={4}
          borderRadius={0}
          keyboardType='numeric'
          fontWeight="500"
          style={stylesTwoPane.inputStyle}
          _light={{
            placeholderTextColor: 'gray.400',
          }}
          _dark={{
            placeholderTextColor: 'blueGray.50',
          }}
        />
        <Text size='md' style={stylesTwoPane.descriptionStyle}>{handleHint()}</Text>
        {isToast && <ToastDialogComponent />}
        {!checkConstraint(textInput) && <Text style={stylesTheme.messageStyle}>{feature.constraintMessage}</Text>}
        <Text size='sm' style={stylesTheme.messageStyle}>{getWarningMessage(feature, textInput, strings.warningEmpty)}</Text>
      </ScrollView>
    </View>
  )
}

export default React.memo(NumericEntryComponent)