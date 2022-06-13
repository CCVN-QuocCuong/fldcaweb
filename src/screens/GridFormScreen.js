/* eslint-disable react/no-children-prop */
import React from 'react'
import DataGridFormComponent from '../components/DataGridFormComponent'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { findAll } from '../services/data-service'

export default function GridFormScreen() {
    const route = useRoute()
    const listItem = useSelector((state) => state.app.listItem)
    let data = findAll(listItem, route.params.objectName, route.params.paramsGridForm.level, route.params.parent)

    return (
        <DataGridFormComponent 
            dataSource={route.params.paramsGridForm} 
            children={route.params.children}
            objectName={route.params.objectName}
            parent={route.params.parent}
            data={data}
        />
    )
}
