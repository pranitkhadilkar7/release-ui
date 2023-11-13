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

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:3004/' })

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
    toast.error(result?.error?.data?.message)
  }
  return result
}

export const apiService = createApi({
  reducerPath: 'applicationApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/' }),
  baseQuery: baseQueryWithToastImpl,
  endpoints: () => ({}),
})
