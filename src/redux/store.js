import { configureStore } from '@reduxjs/toolkit' // checked
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux' //checked
import { persistStore, persistReducer } from 'redux-persist' // checked
import { rootPersistConfig, rootReducer } from './rootReducer'

const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer), 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }) 
})

const persitor = persistStore(store)

const { dispatch } = store; 

const useSelector = useAppSelector

const useDispatch = () => useAppDispatch();

export {store, persitor, dispatch, useSelector, useDispatch}