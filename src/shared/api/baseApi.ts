import type { RootState } from '@/app/AppStore';
import { logout, setToken } from '@/entities/auth/model/authSlice';
import { createApi, fetchBaseQuery, type BaseQueryFn } from '@reduxjs/toolkit/query/react';
const apiUrl = import.meta.env.VITE_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
  // управляет тем, отправляются ли куки вместе с запросом и разрешается ли их принимать/сохранять
  credentials: 'include',
  //устанавливаем предварительные заголовки
  prepareHeaders: (headers, { getState }) => {
    //берем токен из кэш и передаем в заголовок
    const token = (getState() as RootState).authorization.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn = async (
  args,  
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);
  // args — это URL, метод, тело запроса и т.д. пример мы передаем ниже { url: '/auth/refresh', method: 'GET' },
  // api — доступ к dispatch, getState, endpoint
  // extraOptions — дополнительные настройки
  if (result.error?.status === 401) {
    // пробуем обновить токен
    const refreshResult = await baseQuery(
      { url: '/auth/refresh', method: 'GET' },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      const newToken = (refreshResult.data as any).access_token;
      api.dispatch(setToken(newToken));
      // повторяем оригинальный запрос
      result = await baseQuery(args, api, extraOptions);
    } else {
      // с помощью api вызываем logout для выхода из аккаунта
      // обнуляем токен в кэш в redux 
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});


