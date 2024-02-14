import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { toast } from 'react-toastify'
import { logout } from '../pages/login/login-slice'
import { clearLocalStorage } from '../utils/storageUtils'
import { API_HOST, API_PORT, API_PROTOCOL } from '../utils/constant'

const baseUrl = API_PORT
  ? `${API_PROTOCOL}://${API_HOST}:${API_PORT}/`
  : `${API_PROTOCOL}://${API_HOST}/`

const baseQuery = fetchBaseQuery({ baseUrl })

const baseQueryWithToastImpl: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = (await baseQuery(args, api, extraOptions)) as QueryReturnValue<
    any,
    { status: number; data: any },
    FetchBaseQueryMeta
  >
  if (result?.data?.message) {
    toast.success(result.data.message)
  } else if (result?.error?.data?.message) {
    if (result?.error?.status === 401) {
      clearLocalStorage()
      api.dispatch(logout())
    }
    toast.error(result?.error?.data?.message)
  }
  return result
}

export const apiService = createApi({
  reducerPath: 'applicationApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/' }),
  baseQuery: baseQueryWithToastImpl,
  endpoints: () => ({}),
  tagTypes: ['RELEASE'],
})
