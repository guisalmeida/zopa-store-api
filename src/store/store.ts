import { compose, legacy_createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

// defaults to localStorage for web
import storage from 'redux-persist/lib/storage'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export type TRootState = ReturnType<typeof rootReducer>

type TExtendedPersistConfig = PersistConfig<TRootState> & {
  whitelist: (keyof TRootState)[]
}

const persistConfig: TExtendedPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const sagaMiddleware = createSagaMiddleware()

const middleWares = [sagaMiddleware]

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

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
