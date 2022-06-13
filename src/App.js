import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { NativeBaseProvider } from 'native-base'
import AppNavigator from './navigators/AppNavigator' 
import { PersistGate } from 'redux-persist/lib/integration/react'
import theme from './theme'
import LoadingDialogComponent from './components/LoadingDialogComponent'
import Amplify from 'aws-amplify'
import {aws_config} from './config/aws'
import 'react-native-gesture-handler'

Amplify.configure(aws_config)

export default function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
          <NativeBaseProvider theme={theme}>
            <AppNavigator />
            <LoadingDialogComponent />
          </NativeBaseProvider>
       </PersistGate>
    </Provider>
  )
}


