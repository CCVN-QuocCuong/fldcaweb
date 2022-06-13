/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useEffect } from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import {View, Text} from 'native-base'
import { ConstScreenName } from '../../../config'
import { getMenuKeyNavigation, getAddKeyNavigation, getText } from '../../../services/data-service'
import { useNavigation, useRoute } from '@react-navigation/native'
import { getFeature } from '../../../services/workflow-service'
import { QUICKPICK } from '../../../config/constants'
import { getTotalWidth, getTotalWidthDefault, getWidthPercent } from '../../../services/helpers'

export default function Item({
  headers, 
  item, 
  keyItem, 
  index, 
  setItemSelected,
  itemSelected,
  dataSource,
  children,
  objectName,
  parent,
  }) {

  const route = useRoute()
  const navigation = useNavigation()
  const features = dataSource.navigation.add.features

  useEffect(() => {
      getTotalWidthDefault(headers)
      getTotalWidth(headers, features)
  }, [])

  const onPressItem = () => {
    setItemSelected({indexRow: index, item: item})
    if (dataSource.children && dataSource.children.length > 0) {
      const selectedItemId = item && item.length > 0 ? item[0].value.value : null
      const selectedItemName = (item && item.length > 0 && dataSource.level === 0) ? item[1].value.value : route.params.projName
      const projName = item && item.length > 0 ? (dataSource.level === 1 ? `${selectedItemName}_${item[1].value.value}` : selectedItemName) : null
      
      navigation.navigate({
        name: ConstScreenName.MenuForm,
        params: {
          workflow: children,
          parent: {
            id: selectedItemId,
            name: dataSource.name,
            level: dataSource.level
          },
          projName: projName,
        },
        key: getMenuKeyNavigation(dataSource.name)
      })
    } else {
      onEdit()
    }
  }

  const onLongPressItem = () => {
    setItemSelected({indexRow: index, item: item})
  }
  
  const onEdit = () => {
    const objectID = item && item.length > 0 ? item[0].value.value : null
    navigation.navigate({
      name: ConstScreenName.AddForm,
      params: {
        parentScreen: ConstScreenName.GridForm,
        dataSource: dataSource,
        objectID: objectID,
        objectName: objectName,
        parent: parent,
        isEdit: true,
      },
      key: getAddKeyNavigation(objectName)
    })
  }
  
  let totalWidthDefault = getTotalWidthDefault(headers) 
  totalWidthDefault = totalWidthDefault === 0 ? null : totalWidthDefault

  let totalWidth = getTotalWidth(headers, features) 
  totalWidth = totalWidth === 0 ? 1 : totalWidth

  return (
    <>
    <TouchableOpacity key={keyItem} onPress={onPressItem} onLongPress={onLongPressItem}  >
      <View style={[styles.row, { backgroundColor: itemSelected.indexRow === index ? '#add4e4' : null }]}>
        {item && headers.map(header => {
          const isExist = item.filter(p => p.key === header.key)
          if(isExist && isExist.length > 0){
            const feature = getFeature(header.key, features)
            const ValueShow = ((feature.type === QUICKPICK) && feature.gridShowCodeValueYN) ? isExist[0].value.value : getText(feature.type, isExist[0].value.label)
            
            return (   
              <View key={header.key} style={{width: getWidthPercent(header, totalWidthDefault, totalWidth, headers, features)}}>
                <Text size='sm' style={{color: itemSelected.indexRow === index ? '#000' : null}}>{ValueShow}</Text>
              </View>
            ) 
          }
          })}
      </View>
    </TouchableOpacity>
  </>
  )
}

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingRight:5
  },
})
