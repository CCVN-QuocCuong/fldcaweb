import React, {useState, useEffect} from 'react'
import {View, Text, Icon, Box} from 'native-base'
import {ScrollView, Keyboard, TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { dateToString } from '../../services/datetime-service'
import stylesTwoPane from '../../theme/stylesTwoPane'
import DatePicker from 'react-native-date-picker'
import { removeValueDate } from '../../services/data-service'
import { lockOrientation } from '../../services/helpers'

const DatePickerComponent = ({
  arrayValues, 
  setArrayValues, 
  isShow, 
  feature, 
  isResetText, 
  checkRequired, 
  features, 
  propText
}) => {
  const [date, setDate] = useState('')
  const [isShowPicker, setIsShowPicker] = useState(false)

  useEffect(() => {
    lockOrientation(isShowPicker, isShow)
  }, [isShowPicker])
  
  useEffect(() => {
    if (isShow) {
      Keyboard.dismiss()
      const propTextNew = propText ? new Date(propText) : null
      setDate(propTextNew)
    }
  }, [isShow])

  useEffect(() => {
    if (isResetText && isShow) {
      setDate(null)
      removeValueDate(arrayValues, feature, setArrayValues, checkRequired)
    }
  }, [isResetText])

  /**
   * check the input value according to the formula
   * @param {*} element fuature
   * @param {*} selectedDate string date select
   * @returns
   */
  const getIsCheckFormula = (element, selectedDate) => {
    if (element.constraint) {
      let formula = element.constraint
      const newDate = selectedDate ? getTimeFeature(selectedDate) : null
      formula = formula.replace(new RegExp(feature.name, 'g'), newDate)
      arrayValues.forEach(e => {
        if (formula.indexOf(e.key) !== -1) {
        const value = e.value.value ? getTimeFeature(new Date(e.value.value)) : null
          formula = formula.replace(new RegExp(e.key, 'g'), value)
        }
      })
      return eval(formula)
    }
    return true
  }

  /**
   * get and format time to YY/MM/DD
   * @param {String} time
   * @returns
   */
  const getTimeFeature = (time) => {
    const dateNow = ('0' + time.getDate()).slice(-2)
    const month = ('0' + (time.getMonth() + 1)).slice(-2)
    const year = time.getFullYear()
    return (new Date(`${year}/${month}/${dateNow}`)).getTime()
  }

  /**
   * select date form calendar
   * @param {*} selectedDate string date select
   */
  const onChange = selectedDate => {
    const currentDate = selectedDate || null
    if (getIsCheckFormula(feature, selectedDate)) {
      setDate(currentDate)
      let propItem = arrayValues.find(p => p.key === feature.name)
      if (propItem) {
        propItem.value = {
          value: String(selectedDate),
          label: String(selectedDate),
        }
        setArrayValues(arrayValues)
      }
      if (feature.required) {
        checkRequired(arrayValues)
      }
    }

    let featureConstraint = null
    features.forEach(element => {
      if (element.constraint) {
        if (element.constraint.indexOf(featureConstraint ? featureConstraint : feature.name) !== -1) {
          featureConstraint = element.name
          if (element.name !== feature.name) {
            const isCheckFormula = getIsCheckFormula(element, selectedDate)
            if (!isCheckFormula) {
              let propItemDelete = arrayValues.find(p => p.key === element.name)
              if (propItemDelete) {
                propItemDelete.value = { value: null, label: null }
                setArrayValues(arrayValues)
                if (feature.required) {
                  checkRequired(arrayValues)
                }
              }
            }
          }
        }
      }
    })
  }

  return (
    <View style={isShow ? stylesTwoPane.show : stylesTwoPane.hide}>
      <ScrollView>
        <Text size='md' style={stylesTwoPane.titleStyle}>
          {feature.displayName}
        </Text>
        <TouchableOpacity onPress={() => setIsShowPicker(true)} activeOpacity={1}>
          <Box>
            <View style={stylesTwoPane.inputDate}>
              <Text size='md' style={stylesTwoPane.textDate}>
                {dateToString(date)}
              </Text>
              <Icon
                as={<AntDesign type="AntDesign" name="calendar" />}
                size={'sm'}
                mr="2"
                marginY={'1px'}
                color="muted.400"
              />
            </View>
          </Box>
        </TouchableOpacity>
        <Text size='md' style={stylesTwoPane.descriptionStyle}>
          {feature.hint}
        </Text>
        <DatePicker
          androidVariant="iosClone"
          mode="date"
          modal
          open={isShowPicker}
          date={date ? date : new Date()}
          onConfirm={dateSelect => {
            setIsShowPicker(false)
            onChange(dateSelect)
          }}
          onCancel={() => {
            setIsShowPicker(false)
          }}
          cancelText="cancel"
          confirmText="ok"
          title={feature.displayName}
        />
      </ScrollView>
    </View>
  )
}

export default React.memo(DatePickerComponent)