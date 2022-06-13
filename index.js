/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native'
import AppLoading from './AppLoading'
import {name as appName} from './app.json'

LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs()//Ignore all log notifications

AppRegistry.registerComponent(appName, () => AppLoading)
