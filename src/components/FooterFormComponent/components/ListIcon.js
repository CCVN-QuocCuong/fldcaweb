/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react'
import {
    Center,
    Pressable,
  } from 'native-base'
import PropTypes from 'prop-types'
import ItemIcon from './ItemIcon'

ListIcon.propTypes = {
  listIcon: PropTypes.array
}

export default function ListIcon({
  callBack, 
  listIcon, 
  itemSelected, 
  typeScreen, 
  currentIndex, 
  maxFeatureLength,
  isRequiredAdd
}) {

  let isShow = itemSelected ? true : false
  const RenderListIcon = () => {
      return (
        listIcon && listIcon.map((item) => 
        {
          const [checkCondition, setCheckCondition] = useState(true)
        
          return (<Pressable
            style={checkCondition ? ({ pressed }) => [
              {
                backgroundColor: pressed
                  ? '#b6b3e6'
                  : null,
                borderRadius:8
              }
            ] : null}
            key={item.name}
            opacity={1}
            py={2}
            flex={1}
            onPress={ () => checkCondition ? callBack({ event: item}) : null }
            disabled={!checkCondition}
          >
            <Center>
              <ItemIcon 
                iconName={item.name} 
                isShow={isShow} 
                typeScreen={typeScreen} 
                currentIndex={currentIndex}
                maxFeatureLength={maxFeatureLength}
                checkCondition={checkCondition}
                setCheckCondition={setCheckCondition}
                isRequiredAdd={isRequiredAdd}
              />
            </Center>
          </Pressable>)
        })
      )
    }

  return (
    <>
      <RenderListIcon />
    </>
  )
}

