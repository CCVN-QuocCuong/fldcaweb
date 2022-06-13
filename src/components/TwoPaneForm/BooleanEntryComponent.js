import React, {useState, useEffect} from 'react'
import {View, Text, Checkbox, ScrollView} from 'native-base'
import {Keyboard} from 'react-native'
import { concatenateString } from '../../services/helpers'
import stylesTwoPane from '../../theme/stylesTwoPane'

const BooleanEntryComponent = ({
  arrayValues, 
  setArrayValues, 
  isShow, 
  feature,
  propText,
  formtype,
  featuresConcatY,
  featureConcat,
  setStringConcatenation,
}) => {
  const [isSelected, setIsSelected] = useState(propText)

  useEffect(() => {
    if (isShow) {
      Keyboard.dismiss()
    }
    setIsSelected(propText)
  }, [isShow, propText])

  const onChange = (isChecked) => {
    let propItem = arrayValues.find(p => p.key === feature.name)
    
    if (propItem) {
      propItem.value = { value: isChecked, label: isChecked ? feature.displayName : null}
      setIsSelected(isChecked)
      // concat string breadcrumb for Three pane.
      concatenateString(formtype, arrayValues, feature, feature.displayName, featureConcat, featuresConcatY, setStringConcatenation, isChecked)
      setArrayValues([...arrayValues])
    }
  }

  return (
    <View style={isShow ? stylesTwoPane.show : stylesTwoPane.hide}>
      <ScrollView>
        <Text size='md' style={stylesTwoPane.titleStyle}>{feature.displayName}</Text>
        <Checkbox
            onChange={onChange}
            isChecked={isSelected}
            py="5px"
            pl="10px"
            alignItems="flex-start"
            size="lg"
            value="test"
            accessibilityLabel="This is a dummy checkbox"
          />
        <Text size='md' style={stylesTwoPane.descriptionStyle}>{feature.hint}</Text>
      </ScrollView>
  </View>
  )
}

export default React.memo(BooleanEntryComponent)
