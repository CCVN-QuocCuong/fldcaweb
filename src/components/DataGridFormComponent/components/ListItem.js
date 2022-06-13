/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react'
import Item from './Item'
import { useSelector, useDispatch } from 'react-redux'
import { UNSORTED, TEXT, QUICKPICK, MULTIPICK, NUMBER, DATE, MEMO } from '../../../config/constants'
import { sortByText, sortByNumber, sortByDate } from '../../../services/sorting-service'
import { useIsFocused } from '@react-navigation/native'
import { logData } from '../../../services/logger-service'
import arraySort from 'array-sort'
import { setIndexSortingDefault } from '../../../store/actions'

export default function ListItem({
    items, 
    headers, 
    setItemSelected,
    itemSelected,
    dataSource,
    children,
    objectName,
    parent,
    setTitleDialog,
    setMsgDialog,
    setCancelDialog,
    setActionDialog,
    setIsShowDialog,
}) {  
    const typeSort = useSelector(state => state.app.typeSort)
    const headerKey = useSelector(state => state.app.headerKey)
    const headerKeyMultiSort = useSelector(state => state.app.headerKeyMultiSort)
    const dataSortingDefault = useSelector(state => state.app.dataSortingDefault)

    const isFocused = useIsFocused()
    const dispatch = useDispatch()
    let typesRef = useRef(null)
    let sortArrayTampRef = useRef(null)
    
    const [sortArray, setSortArray] = useState([])
    const [dataItems, setDataItems] = useState([])
    let [types, ] = useState(null)

    useEffect(() => {
        setItemSelected({indexRow: -1, item: null})
    }, [isFocused])

    useEffect(() => {
        getSortArray(items)
        sortDataItems(sortArrayTampRef.current)
        if(items && items.length === 0) setDataItems([])
    }, [items])

    useEffect(() => {
        getSortArray(items)
        sortDataItems(sortArray)
    }, [typeSort])

    /**
     *  Get a simple array from a complex array 
     *  @param {Array} arrItems
     */
    const getSortArray = (arrItems) => {
        const sortArrayTamp = []
        for (const item of arrItems) {
            if(item && item.data && item.data.length > 0){
                let record = { key : item.key }
                for (const header of headers) {
                    const data = item.data.find(p => p.key === header.key)
                    if(data){
                        record = { 
                            ...record,
                            [data.key]:  data.value.label,
                        }
                        types = {
                            ...types,
                            [data.key]: data.key
                        }
                        typesRef.current = types
                    }
                }
                sortArrayTamp.push(record)
            }
        }
        sortArrayTampRef.current = sortArrayTamp
        setSortArray(sortArrayTamp)
    }
   
    /**
     *  Sort a simple array and set complex array
     *  @param {Array} sortArrayData
     */
    const sortDataItems = (sortArrayData)  => {
        try {
            if (!typeSort || sortArrayData.length === 0 ) return
            if (headerKey && headerKeyMultiSort.length < 2 ) { 
                // Sort one column
                if (!types) types = typesRef.current
                const { keyHeader, typeHeader } = headerKey 
                const sortProperty = typeSort.typeSort !== UNSORTED ? types[keyHeader] : dataSortingDefault.keyHeader
                let sorted = null
                let quickPickIsNumber = false

                // Check value of type QUICKPICK is Number or String
                if(typeHeader === QUICKPICK){
                    sortArrayData.forEach(element => {
                        for (const [key, value] of Object.entries(element)) {
                            if(key === sortProperty && isNumber(value)){
                                quickPickIsNumber = true
                                break
                            }
                        }
                    })
                }

                switch (typeHeader) {
                    case TEXT:
                    case MEMO:
                    case MULTIPICK:   
                        sorted = sortByText(sortArrayData, sortProperty, typeSort.typeSort)
                        break
                    case QUICKPICK:     
                        if (quickPickIsNumber) {
                            sorted =  sortByNumber(sortArrayData, sortProperty, typeSort.typeSort)
                        } else {
                            sorted =  sortByText(sortArrayData, sortProperty,  typeSort.typeSort)
                        }
                        break
                    case NUMBER:     
                        sorted = sortByNumber(sortArrayData, sortProperty, typeSort.typeSort)
                        break
                    case DATE: 
                        sorted = sortByDate(sortArrayData, sortProperty, typeSort.typeSort)
                        break    
                    default:
                        sorted = sortByText(sortArrayData, sortProperty, typeSort.typeSort)
                        break
                }

                // Set array data after sorted
                const arrayItemsTamp = []
                sorted && sorted.forEach(element => {
                    const data = items.find(p => p.key === element.key)
                    if (data) {
                        arrayItemsTamp.push(data)
                    }
                })
                setDataItems(arrayItemsTamp)
                if (typeSort.typeSort === UNSORTED) dispatch(setIndexSortingDefault(dataSortingDefault.keyHeader))
            } else {
                // Sort multi-column
                if(headerKey === null || headerKeyMultiSort === null || (typeSort.typeSort === null && typeSort.headerKey === null)) return 
                
                // Get the columns to sort
                const criteria = []
                for (const dataSortDefault of headerKeyMultiSort) {
                    const value = dataSortDefault.keyHeader.replace('.', '')
                    criteria.push(value)
                }

                // Convert array data and sorting
                sortArrayData.forEach(element => {
                    for (const [key, value] of Object.entries(element)) {
                        const newkey = key.replace('.', '')
                        const newValue = isNumber(value) ? parseFloat(value) : value
                        element[newkey] = newValue
                    }
                })
                const sorted = arraySort(sortArrayData, criteria)
                
                // Set array data after sorted
                const arrayItemsTamp = []
                sorted && sorted.forEach(element => {
                    const data = items.find(p => p.key === element.key)
                    if(data){
                        arrayItemsTamp.push(data)
                    }
                })
                setDataItems(arrayItemsTamp)
            }
        } catch (error) {
            logData('error sortDataItems: ', error)
        }
    }

    const isNumber = (n) => !isNaN(parseFloat(n)) && !isNaN(n - 0)

    return dataItems && dataItems.map((item, index) => 
        <Item 
            key={index}
            headers={headers} 
            item={item.data} 
            keyItem={item.key} 
            index={index} 
            setItemSelected={setItemSelected}
            itemSelected={itemSelected}
            children={children}
            dataSource={dataSource}
            objectName={objectName}
            parent={parent}
            setTitleDialog={setTitleDialog}
            setMsgDialog={setMsgDialog}
            setCancelDialog={setCancelDialog}
            setActionDialog={setActionDialog}
            setIsShowDialog={setIsShowDialog}
        />
    )
}
