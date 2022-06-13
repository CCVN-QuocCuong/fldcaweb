/* eslint-disable array-callback-return */
/* eslint-disable react/no-children-prop */
import React, { useCallback } from 'react'
import { View, ScrollView, Box } from 'native-base'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Item from '../MenuFormComponent/components/Item'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import stylesTheme, { colorActive, colorDarkGray, colorWhite } from '../../theme/styles'

const LeftPane = ({
  features,
  currentIndex,
  setCurrentIndex, 
  arrayValues, 
  dataSource,
  parentScreen,
  parent,
  arrayFormRequired,
}) => {
  const onPressFeature = useCallback((feature, index) => {
    setCurrentIndex(index)
  },[],)

  const isValidFeature = (feature) => {
    if(feature.required) {
      const isExist = arrayFormRequired.includes(feature.name)
      if(isExist) return true
      return false
    }
    return false
  }

  const renderWorkflow = () => {
    return features.map((feature, index) => {
      return !feature.children ? (
        <View key={`${feature.name}${index+1}`}>
          <TouchableOpacity
            style={styles.rowFeature}
            onPress={() => onPressFeature(feature, index)}>
            <Box
              style={styles.flexBox1}
              key={feature.name}
              bg={currentIndex === index ? colorActive : null}
              p={2}
              _text={{
                color: currentIndex === index ? colorWhite : colorDarkGray,
              }}>
              {feature.displayName}
            </Box>
            {feature.required ? (
              <Box
                style={styles.flexBox2}
                key={`${feature.name}-required`}
                justifyContent='center'
              >
                {isValidFeature(feature) ? (
                  <MaterialCommunityIcons
                    type="MaterialCommunityIcons"
                    name="check-circle"
                    style={stylesTheme.validFeature}
                  />
                ) : (
                  <Entypo
                    type="Entypo"
                    name="circle-with-cross"
                    style={stylesTheme.inValidFeature}
                  />
                )}
              </Box>
            ) : (
              <Box
                style={styles.flexBox2}
                key={`${feature.name}-noRequired`}
                bg={currentIndex === index ? colorActive : null}
              />
            )}
          </TouchableOpacity>
        </View>
      ) : (
        <Item
          stylePane={true}
          item={feature.children}
          currentFeature={feature}
          key={feature.children.name}
          parent={parent}
          arrayValues={arrayValues}
          dataSource={dataSource}
          parentScreen={parentScreen}
        />
      )
      }
    )
  }

  return (
    <View style={styles.leftPane}>
      <ScrollView>
        {features ? renderWorkflow() : null}
      </ScrollView>
    </View>
  )
}

export default React.memo(LeftPane)

const styles = StyleSheet.create({
  leftPane: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d4d4d4',
    marginRight: 5,
  },
  rowFeature: {
    flexDirection: 'row',
    flex: 1
  },
  flexBox1: {
    flex: 1,
    paddingRight: '15%'
  },
  flexBox2: {
    height:'100%',
    position:'absolute',
    right:'5%',
  }
})