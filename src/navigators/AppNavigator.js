/* eslint-disable react/display-name */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  MenuFormScreen,
  GridFormScreen,
  AddFormScreen,
  MainForm,
  ExportDataFormScreen,
  GetLocationFormScreen,
  TemplateScreen,
} from '../screens'
import { ConstScreenName } from '../config'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function AppNavigator() {

  const stackHome = () => (
    <Stack.Navigator initialRouteName={ConstScreenName.MainForm}
      screenOptions={{ 
          headerStyle: {
            backgroundColor: '#082744',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: false
    }}
    >
      <Stack.Screen
        name={ConstScreenName.MainForm}
        component={MainForm}
      />
      <Stack.Screen
        name={ConstScreenName.MenuForm}
        component={MenuFormScreen}
      />
      <Stack.Screen
        name={ConstScreenName.GridForm}
        component={GridFormScreen}
      />
      <Stack.Screen
        name={ConstScreenName.AddForm}
        component={AddFormScreen}
      />
      <Stack.Screen
        name={ConstScreenName.ExportDataForm}
        component={ExportDataFormScreen}
      />
        <Stack.Screen
        name={ConstScreenName.GetLocationForm}
        component={GetLocationFormScreen}
      />
    </Stack.Navigator>
  )



  return (
    <NavigationContainer >
     <Tab.Navigator>
      <Tab.Screen name="Home" component={stackHome} />
      <Tab.Screen name="Settings" component={TemplateScreen} />
    </Tab.Navigator>
      
    </NavigationContainer>
  )
}
