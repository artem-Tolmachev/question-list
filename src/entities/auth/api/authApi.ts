import { baseApi } from "@/shared/api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    refreshToken: builder.query<any, void>({
      query: () => {
       return {
        url: 'auth/refresh',
        method: 'GET',
        headers: {
            'accept': 'application/json',
        },
      }}
    }),
    login: builder.mutation({
        query: ({username, password}) => ({
            url: 'auth/login',
            method: 'POST', 
            params: {
                "username": username,
                "password": password
            }
        })
    })
  }),
});

export const { useLazyRefreshTokenQuery, useLoginMutation } = authApi;
