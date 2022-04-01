import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

let store
const persistedReducer = persistReducer(persistConfig, rootReducer)

function initStore(initialState) {
    return createStore(
        persistedReducer,
        initialState,
        applyMiddleware(thunkMiddleware)
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        store = undefined
    }
    if (typeof window === 'undefined') return _store

    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    const persistor = persistStore(store)
    return { store, persistor }
}
