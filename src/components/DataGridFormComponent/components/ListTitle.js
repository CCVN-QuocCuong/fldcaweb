/* eslint-disable consistent-return */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { View } from 'native-base'
import { StyleSheet } from 'react-native'
import {getFeatureByName} from '../../../services/workflow-service'
import { UNSORTED } from '../../../config/constants'
import TitleItem from './TitleItem'
import { useDispatch } from 'react-redux'
import { setHeaderKeyMultiSort } from '../../../store/actions'
import { useIsFocused } from '@react-navigation/native'
import { getTotalWidth, getTotalWidthDefault, getWidthPercent } from '../../../services/helpers'

ListTitle.propTypes = {
  headers: PropTypes.array,
}

export default function ListTitle({ headers, features, items }) {

  const [isActiveColor, setIsActiveColor] = useState(null)
  const [sortType, setSortType] = useState(UNSORTED)
  const [dataSortDefault, setDataSortDefault] = useState([])
  const dispatch = useDispatch()
  const isFocused = useIsFocused()

  useEffect(() => {
    getTotalWidth(headers, features)
    getTotalWidthDefault(headers)
    getSortMultiFeatures()
  }, [isFocused])

  const getSortMultiFeatures = () => {
    headers.forEach(header => {
      if(header.sortDefault){
        const feature = getFeatureByName(header.key, features) 
        const headerData = { keyHeader: header.key, typeHeader: feature.type }
        const data = dataSortDefault.find(p => p.keyHeader === header.key)
        if(!data){
          dataSortDefault.push(headerData)
        }
      }
    })
    dispatch(setHeaderKeyMultiSort(dataSortDefault))
  }

  let totalWidthDefault = getTotalWidthDefault(headers) 
  totalWidthDefault = totalWidthDefault === 0 ? null : totalWidthDefault
  
  let totalWidth = getTotalWidth(headers, features) 
  totalWidth = totalWidth === 0 ? 1 : totalWidth

  /**
  * Render title.
  */
  const renderTitle = () => {
    return headers.map((header, index) => (
      <TitleItem 
        key={header.key} 
        index={index}
        itemWidth={getWidthPercent(header, totalWidthDefault, totalWidth, headers, features)}
        header={header}
        feature={getFeatureByName(header.key, features)} 
        features={features}
        isActiveColor={isActiveColor}
        setIsActiveColor={setIsActiveColor}
        sortType={sortType}
        setSortType={setSortType}
        items={items}
        dataSortDefault={dataSortDefault}
        setDataSortDefault={setDataSortDefault}
        getSortMultiFeatures={getSortMultiFeatures}
      />
    ))
  }

  return <View style={styles.container}>{headers ? renderTitle() : null}</View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 5,
  }
})
