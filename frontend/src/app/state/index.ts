import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import sessionReducer from './slices/session'

import bgaApi from './api'

export const rootReducer = combineReducers({
  session: sessionReducer,
  [bgaApi.reducerPath]: bgaApi.reducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [
    'session',
  ],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
        REHYDRATE,
      ],
    },
  }).concat(bgaApi.middleware),
})

export default store

export const persistor = persistStore(store)
