import { combineReducers } from "@reduxjs/toolkit";
import {specializationsReducer }from '@/entities/specializations'
import { baseApi } from "@/shared/api/baseApi";
import { authReduser } from "@/entities/auth/model/authSlice";

export const rootReduser = combineReducers({
    specializations: specializationsReducer,
    authorization: authReduser,
    [baseApi.reducerPath]: baseApi.reducer,
})