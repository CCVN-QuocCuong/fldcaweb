import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import PropTypes from 'prop-types'
import Item from './components/Item'
import HeaderComponent from '../HeaderComponent'
import { useNavigation,useRoute } from '@react-navigation/native'
import { getParentConfig } from '../../services/helpers'
import { getObjectById } from '../../services/data-service'
import { Workflow } from '../../config/workflow'
import { useSelector } from 'react-redux'
import { validateDisplayCondition } from '../../services/relevant-service'

index.propTypes = {
  items: PropTypes.array,
  parent: PropTypes.object,
}

export default function index({items, parent}) {
  if (!items || items.length == 0) {
    return null
  }
  
  const listItem = useSelector(state => state.app.listItem)
  const route = useRoute()
  const navigation = useNavigation()
  const parentObject = getObjectById(listItem, parent.id, items[0].parent)
  const parentWorkflow = getParentConfig(Workflow, items[0].level, items[0].name)
  const projName = route.params ? route.params.projName : ''

  let showItems = items.filter(p => {
    if (p.relevant && p.relevant.length > 0) {
      return validateDisplayCondition(parentObject ? [parentObject.data] : null, p.relevant)
    }

    return true
  })

  const renderList = showItems.map(item => {
    return (
      <Item 
        item={item}
        key={item.name}
        parent={parent}
        projName={projName}
        parentWorkflow={parentWorkflow}
      />
    )
  })

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <>
      <HeaderComponent
        back={items[0].level > 0 ? true : false}
        backCustom={goBack} 
        title={parentWorkflow ? parentWorkflow.displayName : 'Tonkin + Taylor Field Logging Env'}
      />
      <View style={styles.container}>
        <ScrollView>{renderList}</ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
})
