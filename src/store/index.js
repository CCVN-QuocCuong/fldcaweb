import {
    createStore, combineReducers, applyMiddleware, compose
} from 'redux'
import createSagaMiddleWare from 'redux-saga'
import appReducer from './reducers'
import rootSaga from './sagas'
import { persistStore, persistReducer } from 'redux-persist'
import FilesystemStorage from 'redux-persist-filesystem-storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const appPersistConfig = {
  key: 'app',
  storage: FilesystemStorage,
  whitelist: [
    'counter',
    'listItem',
    'featureStack',
  ]
}

// Root persist
const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  blacklist: ['app'],
  stateReconciler: autoMergeLevel2
}

// Root Reducer
const rootReducer = combineReducers({
  app: persistReducer(appPersistConfig, appReducer) ,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Saga
const sagaMiddleWare = createSagaMiddleWare()

// Redux devtool
// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
// Creates the Redux store using our reducer and the logger and saga middlewares
export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleWare))
)
  
export const persistor = persistStore(store)

// run saga
sagaMiddleWare.run(rootSaga)
  