import React from 'react'
import MenuFormComponent from '../components/MenuFormComponent'
import { useRoute } from '@react-navigation/native'
export default function MenuFormScreen({workflow}) {
    const route = useRoute()
    let useWorkflow = workflow ? workflow : route.params.workflow
    const parent = route.params ? route.params.parent : {}
    
    return <MenuFormComponent items={useWorkflow} parent={parent} />
}
