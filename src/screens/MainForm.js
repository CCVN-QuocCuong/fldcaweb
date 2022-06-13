import React from 'react'
import MenuFormScreen from './MenuFormScreen'
import { Workflow } from '../config/workflow'

export default function MainForm() {
  return <MenuFormScreen workflow={Workflow} />
}
