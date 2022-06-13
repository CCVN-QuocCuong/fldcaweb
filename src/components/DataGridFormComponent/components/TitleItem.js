import React, { useEffect } from 'react'
import { Text } from 'native-base'
import { StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { UNSORTED, SORT_ASC, SORT_DESC } from '../../../config/constants'
import { setTypeSort, setHeaderKey, setHeaderKeyMultiSort, setDataSortingDefault, setIndexSortingDefault } from '../../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { getFeatureByName } from '../../../services/workflow-service'
import StylesTheme from '../../../theme/styles'

export default function TitleItem({
    itemWidth,
    header,
    feature,
    features,
    index,
    isActiveColor,
    setIsActiveColor,
    sortType,
    setSortType,
    items,
    dataSortDefault,
    setDataSortDefault,
    getSortMultiFeatures,
}) {  
    const isFocused = useIsFocused()
    const dispatch = useDispatch()
    const dataSortingDefault = useSelector(state => state.app.dataSortingDefault)
    const indexSortingDefault = useSelector(state => state.app.indexSortingDefault)

    useEffect(() => {
      if (feature.sortDefault) {
        const sortData = {
          typeSort: SORT_ASC,
          keyHeader: feature.name
        }
        const headerData = { 
          keyHeader: header.key, 
          typeHeader: feature.type 
        }
        setSortType(SORT_ASC)
        if(items.length === 0)
          setIsActiveColor(null)
        else  
          setIsActiveColor(index)
        dispatch(setTypeSort(sortData))
        dispatch(setHeaderKey(headerData))
        dispatch(setDataSortingDefault(sortData))
      }
    }, [isFocused])

    const onPress = () => {
      setIsActiveColor(index)
      const headerData = { keyHeader: header.key, typeHeader: feature.type }
      let sortData = null

      if (header) dispatch(setHeaderKey(headerData))
      // when clicking on other headers
      if(isActiveColor !== index ) {
        setSortType(SORT_ASC)
        dispatch(setIndexSortingDefault(null))
        sortData = {
          typeSort: SORT_ASC,
          keyHeader: header.key
        }
        dispatch(setTypeSort(sortData))
        dispatch(setHeaderKeyMultiSort([]))
        setDataSortDefault([])
        return
      }
      
      // when clicking on the current header
      switch (sortType) {
        case UNSORTED:
          setSortType(SORT_ASC)
          dispatch(setIndexSortingDefault(null))
          dispatch(setHeaderKeyMultiSort([]))
          setDataSortDefault([])
          sortData = {
            typeSort: SORT_ASC,
            keyHeader: header.key
          }
          break
        case SORT_ASC:
          setSortType(SORT_DESC)
          dispatch(setIndexSortingDefault(null))
          dispatch(setHeaderKeyMultiSort([]))
          setDataSortDefault([])
          sortData = {
            typeSort: SORT_DESC,
            keyHeader: header.key
          }
          break
        case SORT_DESC:
          setSortType(UNSORTED)
          sortData = {
            typeSort: UNSORTED,
            keyHeader: dataSortingDefault.keyHeader
          }
          if (dataSortingDefault) {
            const featureDefault = getFeatureByName(dataSortingDefault.keyHeader, features) 
            const headerDataDefault = { keyHeader: dataSortingDefault.keyHeader, typeHeader: featureDefault.type }
            dispatch(setHeaderKey(headerDataDefault))
            getSortMultiFeatures()
          } 
          break
        default:
          setSortType(UNSORTED)
          sortData = {
            typeSort: UNSORTED,
            keyHeader: header.key
          }
          break
      }
      dispatch(setTypeSort(sortData))
    }

    const _renderNoMultiSort = () => {
      return  <FontAwesome name={indexSortingDefault && indexSortingDefault === feature.name ? SORT_ASC  : ( isActiveColor === index ? sortType : UNSORTED)} style={StylesTheme.iconShort} /> 
    }

    const _renderMultiSort = () => {
      return  <FontAwesome name={feature.sortDefault && items.length !== 0 ? SORT_ASC : UNSORTED} style={StylesTheme.iconShort} /> 
    }

    return (
      <TouchableOpacity onPress={onPress} style={[styles.container, {width : itemWidth}]}>
        <Text size='sm' style={styles.titleStyle}>{header.header}</Text>
        {dataSortDefault && dataSortDefault.length > 1 ? _renderMultiSort() : _renderNoMultiSort() }
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
    },
    titleStyle: {
      color: 'gray',
      fontFamily: 'Inter-SemiBold',
      flex: 0.9,
    },
  })
