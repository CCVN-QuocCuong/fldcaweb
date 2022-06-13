import React, { useEffect } from 'react'
import {View} from 'native-base'
import {Keyboard} from 'react-native'
import stylesTwoPane from '../../theme/stylesTwoPane'

const EmptyRightPaneComponent = ({
  isShow, 
}) => {
    useEffect(() => {
        if (isShow) {
            Keyboard.dismiss()
        }
    }, [isShow])

  return (
    <View style={isShow ? stylesTwoPane.show : stylesTwoPane.hide}>   
    </View>
  )
}

export default React.memo(EmptyRightPaneComponent)
