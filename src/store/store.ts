import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiService } from './service'
import { middleware } from './middleware'
import { loginReducer } from '../pages/login/login-slice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware, middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
