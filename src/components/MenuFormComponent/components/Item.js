import {Box, Text} from 'native-base'
import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import { ConstScreenName } from '../../../config'
import stylesItem, { colorActive, colorUnderlay, colorWhite } from '../../../theme/styles'
import { pushFeatureStack } from '../../../store/actions'
import { getAddKeyNavigation, getGridKeyNavigation } from '../../../services/data-service'

export default function Item(
  {
    item,
    currentFeature,
    parent, 
    stylePane, 
    arrayValues, 
    dataSource, 
    parentScreen,
    projName,
    parentWorkflow, 
  }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  
  let objectId = null
  if (arrayValues) {
    const itemID = arrayValues.find(p => p.key === 'ID')
    objectId = itemID && itemID.value ? itemID.value.value : null
  }

  const buildFeatureStackItem = () => {
    return {
      dataSource, 
      objectID: objectId, 
      parent,
      parentScreen,
      data: arrayValues
    }
  }
  
  const navigateAddScreen = () => {
    if(item && item.navigation){
      if(stylePane){
        dispatch(pushFeatureStack(buildFeatureStackItem()))
      }
      navigation.navigate({
        name: ConstScreenName.AddForm,
        params: { 
          projName: projName,
          dataSource: item, 
          objectID: null, 
          parent: stylePane ? {
            id: objectId,
            name: dataSource.name,
            level: dataSource.level,
            feature: currentFeature ? currentFeature.name : null,
            temp: true
          } : {
            ...parent,
            feature: getNameOfFeatureChildren(),
          },
          parentScreen: ConstScreenName.MenuForm, 
        },
        key: getAddKeyNavigation(item.name)
      })
    }
  }
  
  const navigateGridScreen = () => {
    if(item && item.navigation){
      if(stylePane){
        dispatch(pushFeatureStack(buildFeatureStackItem()))
      }

      navigation.navigate({
        name: ConstScreenName.GridForm, 
        params: { 
          projName: projName,
          paramsGridForm: item, 
          children: item.children, 
          objectName: item.name,
          parent: stylePane ? {
            id: objectId,
            name: dataSource.name,
            level: dataSource.level,
            feature: currentFeature ? currentFeature.name : null,
            temp: true
          } : {
            ...parent,
            feature: getNameOfFeatureChildren(),
          },
        },
        key: getGridKeyNavigation(item.name)
      })
    }
  }

  const getNameOfFeatureChildren = () => {
    if (parentWorkflow && parent && parentWorkflow.name === parent.name && parentWorkflow.level === parent.level) {
      const nameOfFeatureHasChildren = parentWorkflow.navigation.add.features.find(p => p.children)
      if (nameOfFeatureHasChildren) {
        return nameOfFeatureHasChildren.name
      }
    }
    return null
  }

  const getCounter = () => {
    const listItem = useSelector((state) => state.app.listItem)
    let selectedObject = listItem.find(p => p.name === item.name && p.level === item.level)

    if(selectedObject && selectedObject.items){
      const selectedItems = selectedObject.items.filter(p => {
        const counterParentId = objectId ? objectId : parent.id
        const counterParentLevel = dataSource ? dataSource.level : parent.level

        return (!counterParentId && !p.parent.id) 
            || ((
                  counterParentId === p.parent.id) 
              && (counterParentLevel === p.parent.level)
              && (!stylePane || (p.parent && currentFeature && currentFeature.name === p.parent.feature))
            )
      })

      return selectedItems ? selectedItems.length : 0
    }

    return 0
  }
  
  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      underlayColor={colorUnderlay}
      onPress={navigateGridScreen}
      style={styles.container}>
      <Box bg={colorActive} p={stylePane ? '0.0%' :'1.3%'}>
        <View style={styles.item}>
          <View style={styles.boxName}>
            <Text size='md' style={styles.titleStyle}>{stylePane ? (currentFeature ? currentFeature.displayName : null) : item.displayName}</Text>
            <Text size='md' style={styles.numberStyle}>{getCounter()}</Text>
          </View>
          <View style={styles.boxAction}>
            <TouchableOpacity
              onPress={navigateAddScreen}
            >
              {item.navigation?(<Icon
                name="add-circle-outline"
                color={colorWhite}
                style={stylePane ? stylesItem.iconItemPane : stylesItem.iconAddItemStyle}
              />) : (<Icon
                name="settings-outline"
                color={colorWhite}
                style={stylePane ? stylesItem.iconItemPane : stylesItem.iconAddItemStyle}
              />)}
            </TouchableOpacity>
          </View>
        </View>
      </Box>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  boxAction: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxName: {
    flex:1,
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  titleStyle: {
    color: '#ffffff',
  },
  numberStyle: {
    color: '#adadad',
  },
  addStyle: {
    paddingLeft: 15,
  },
})