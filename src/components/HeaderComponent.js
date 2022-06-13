/* eslint-disable react/require-default-props */
import React from 'react'
import {
  HStack,
  IconButton,
  Icon,
  Text,
} from 'native-base'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { ConstFooter } from '../config'
import styles from '../theme/styles'

HeaderComponent.propTypes = {
  title: PropTypes.string, 
  back: PropTypes.bool,
  backCustom: PropTypes.func,
  right: PropTypes.bool,
  rightCustom: PropTypes.func
}

export default function HeaderComponent({ title, back, backCustom, right, rightCustom, isRequiredAdd }) {
  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }
  
  return (
    <HStack
      safeAreaTop
      style={styles.hStackHeaderStyle}
      justifyContent="space-between">
      <HStack space="4" alignItems="center">
        {back ? (
          <IconButton
            colorScheme='primary'
            onPress={backCustom ? backCustom : goBack}
            icon={
              <Icon
                size="sm"
                as={<FontAwesome5 name="arrow-left" />}
                color="white"
              />
            }
          />
        ) : null}
        <Text style={styles.textHeaderStyle}>
          {title}
        </Text>
      </HStack>
      <HStack alignItems="center">
        {right ? (
          <IconButton
            colorScheme='primary'
            disabled={isRequiredAdd ? false : true}
            onPress={isRequiredAdd ? () => rightCustom({ event: { name: ConstFooter.BUTTON_SAVE }}) : null}
            icon={
              <Icon
                as={<FontAwesome5 name="save" />}
                size="sm"
                color="white"
                />
            }
          />
        ) : null}
      </HStack>
    </HStack>
  )
}
