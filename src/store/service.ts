import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:3004/' })

const baseQueryWithToastImpl: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  console.log(result)
  return result
}

export const apiService = createApi({
  reducerPath: 'applicationApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/' }),
  baseQuery: baseQueryWithToastImpl,
  endpoints: () => ({}),
})
