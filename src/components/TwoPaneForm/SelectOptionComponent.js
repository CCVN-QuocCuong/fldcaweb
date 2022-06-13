import React, { useState, useEffect } from 'react'
import { Select, Text, View, Actionsheet, HStack } from 'native-base'
import { setIsProcessing } from '../../store/actions'
import { useDispatch } from 'react-redux'
import { Strings } from '../../config'
import { THREEPANE, TOP, BASE } from '../../config/constants'
import { buildDefaultArrayItem } from '../../services/data-service'
import { getDefaultValue } from '../../services/relevant-service'
import { Pressable } from 'react-native'
import styles, { colorActive } from '../../theme/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'

const SelectOptionComponent = ({
  showFeaturesCombobox,
  arrayValues,
  setCurrentIndex,
  setArrayValues,
  setStringConcatenation,
  propItemCombobox,
  checkRequired,
  dataSource,
  setIsResetIndex,
  isResetIndex,
  showAlert,
  dismissKeyboard,
}) => {
  const [selectedValue, setSelectedValue] = useState('')
  const dispatch = useDispatch()
  const arrayValuesFilter3Pane = arrayValues.filter(p => p.type !== THREEPANE)
  const [stringArrayValues] = useState(JSON.stringify(arrayValuesFilter3Pane))
  const [isActionSheet, setIsActionSheet] = useState(false)

  useEffect(() => {
    if(propItemCombobox) setSelectedValue(propItemCombobox)
    else getItemDefault()
  }, [propItemCombobox, arrayValues])

  const getItemDefault = () => {
    const itemDefault = showFeaturesCombobox && showFeaturesCombobox.items && showFeaturesCombobox.items.find(p => p.default)
    if(itemDefault) {
      setSelectedValue(itemDefault.value)
      onValueChange(itemDefault.value)
    }
  }

  const renderSelectItem = () => {
    return showFeaturesCombobox && showFeaturesCombobox.items && showFeaturesCombobox.items.map((item) => (
      <Select.Item size='darkMd' backgroundColor={selectedValue === item.displayName && colorActive} label={item.displayName} value={item.value} key={item.value} onPress={() => changeOpion(item.value)} />
    ))
  }

  const onValueChange = (value) => {
    setCurrentIndex(0)
    dispatch(setIsProcessing(true))
    const showDataTimeout = setTimeout(() => {
      const item = showFeaturesCombobox && showFeaturesCombobox.items && showFeaturesCombobox.items.find(p => p.value === value)
      if(item){
        let propItem = arrayValues.find(p => p.key === showFeaturesCombobox.name)
        if(propItem) propItem.value = { value: item.value, label: item.displayName }

        setStringConcatenation('')
        setArrayValues(arrayValues)

        dataSource.navigation.add.features.forEach(feature => {
          const arrayItem = buildDefaultArrayItem(feature)

          if (feature.isDefaultFormula) {
            arrayItem.value.value = getDefaultValue(feature, arrayValues)
            arrayItem.value.label = arrayItem.value.value
          }

          if (
            feature.name.toUpperCase() !== `${dataSource.name}.${TOP}`.toUpperCase() &&
            feature.name.toUpperCase() !== `${dataSource.name}.${BASE}`.toUpperCase()
          ) {
            addItemToArray(arrayValues, arrayItem, feature)
          }
        })

        setIsResetIndex(!isResetIndex)

        checkRequired(arrayValues)
      }
      dispatch(setIsProcessing(false))
      setIsActionSheet(false)
      clearTimeout(showDataTimeout)
    }, 10)
  }


  function addItemToArray(array, item, feature) {
    if (!item) {
      return
    }

    if (!array || !(array instanceof Array)) {
      array = []
    }

    const foundItem = array.find(p => p.key === item.key)
    if (foundItem && feature.type !== THREEPANE) {
      foundItem.value = item.value
    }
  }

  const changeOpion = (value) => {
    const arrayFilter3Pane = arrayValues.filter(p => p.type !== THREEPANE)
    const string = JSON.stringify(arrayFilter3Pane)
    const replaced = string.replace(/""/g, null)

    if (value !== selectedValue) {
      if (stringArrayValues !== replaced) {
        showAlert(Strings.titleChangeOption, Strings.messageChangeOption, true,
          () => {
            onValueChange(value)
          }
        )
      } else {
        onValueChange(value)
      }
    }
  }

  const showActionsheet = () => {
    dismissKeyboard()
    setIsActionSheet(true)
  }

  const renderSelect = () => (
      <View>
        <Pressable activeOpacity={1} onPress={showActionsheet}>
          <HStack style={[styles.selectOptionStyle]} >
            <Text fontWeight={500}>
              {selectedValue}
            </Text>
            <Ionicons type="Ionicons" name="chevron-down-outline" style={[styles.iconFooterStyleSM]} />
          </HStack>
        </Pressable> 
        <Actionsheet isOpen={isActionSheet} onClose={setIsActionSheet} >
          <Actionsheet.Content>
            {isActionSheet && renderSelectItem()}
          </Actionsheet.Content>
        </Actionsheet>
      </View>
  )

  return renderSelect()
}

export default React.memo(SelectOptionComponent)
