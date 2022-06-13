import React, {useState, useEffect} from 'react'
import {View, Text, Icon, Box} from 'native-base'
import {ScrollView, Keyboard, TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { dateTimeToString } from '../../services/datetime-service'
import stylesTwoPane from '../../theme/stylesTwoPane'
import DatePicker from 'react-native-date-picker'
import { removeValueDate } from '../../services/data-service'
import { lockOrientation } from '../../services/helpers'

const DateTimePickerComponent = ({
  arrayValues, 
  setArrayValues, 
  isShow, 
  feature, 
  isResetText, 
  checkRequired, 
  propText
}) => {
  const [date, setDate] = useState('')
  const [isShowPicker, setIsShowPicker] = useState(false)
  const [mode, setMode] = useState('date')

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
   * select date form calendar
   * @param {Object} event event type select
   * @param {*} selectedDate string date select
   */
  const onChange = selectedDate => {
    const currentDate = selectedDate || null
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
    if (mode === 'date') {
      setMode('time')
      setIsShowPicker(true)
    } else {
      setMode('date')
    }
  }

  return (
    <View style={isShow ? stylesTwoPane.show : stylesTwoPane.hide}>
      <ScrollView>
        <Text size='md' style={stylesTwoPane.titleStyle}>{feature.displayName}</Text>
        <TouchableOpacity onPress={() => setIsShowPicker(true)} activeOpacity={1}>
          <Box>
            <View style={stylesTwoPane.inputDate}>
              <Text size='md' style={stylesTwoPane.textDate} >{dateTimeToString(date)}</Text>
              <Icon
                as={<AntDesign type="AntDesign" name="calendar" />}
                size={'md'}
                mr="2"
                color="muted.400"
              />
            </View>
          </Box>
        </TouchableOpacity>
        <Text size='md' style={stylesTwoPane.descriptionStyle}>{feature.hint}</Text>
        {isShowPicker && (
          <DatePicker
            androidVariant="iosClone"
            mode={mode}
            modal
            open={true}
            date={date ? date : new Date()}
            onConfirm={dateSelect => {
              setIsShowPicker(false)
              onChange(dateSelect)
            }}
            onCancel={() => {
              setIsShowPicker(false)
              setMode('date')
            }}
            cancelText="cancel"
            confirmText="ok"
            title={feature.displayName}
          />
        )}
      </ScrollView>
    </View>
  )
}

export default React.memo(DateTimePickerComponent)