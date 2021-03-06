import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import persistedReducer from '../reducers'

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)
