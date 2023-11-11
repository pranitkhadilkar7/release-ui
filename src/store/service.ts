import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiService = createApi({
  reducerPath: 'applicationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/' }),
  endpoints: () => ({}),
})
