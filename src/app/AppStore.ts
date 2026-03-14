import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux'
import type {TypedUseSelectorHook} from 'react-redux'
import {rootReduser} from './AppRedusers';
import { baseApi } from "@/shared/api/baseApi";

export const store = configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(baseApi.middleware)
}) 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector