import { compose, legacy_createStore, applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const middleWares = [thunk]

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancer =
  (import.meta.env.MODE === 'development' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = legacy_createStore(
  persistedReducer,
  undefined,
  composedEnhancers,
)

export const persistor = persistStore(store)
