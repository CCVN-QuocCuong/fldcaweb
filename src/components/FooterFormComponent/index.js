import React from 'react'
import {
    HStack,
  } from 'native-base'
import PropTypes from 'prop-types'
import { ListIcon } from './components'

index.propTypes = {
  callBack: PropTypes.func,
  itemSelected: PropTypes.array,
  listIcon: PropTypes.array,
  typeScreen: PropTypes.string,
  currentIndex: PropTypes.number,
  maxFeatureLength: PropTypes.number,
}

export default function index({
  callBack, 
  itemSelected, 
  listIcon, 
  typeScreen, 
  currentIndex, 
  maxFeatureLength,
  isRequiredAdd
}) {

  return (
    <HStack backgroundColor='transparent' alignItems="center" safeAreaBottom>
      <ListIcon 
        listIcon={listIcon} 
        callBack={callBack} 
        itemSelected={itemSelected} 
        typeScreen={typeScreen}
        currentIndex={currentIndex}
        maxFeatureLength={maxFeatureLength}
        isRequiredAdd={isRequiredAdd}
      />
    </HStack>
  )
}
