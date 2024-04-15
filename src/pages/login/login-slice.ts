import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import { getAccessTokenFromLocal } from '../../utils/storageUtils'

const initialState = {
  isLoggedIn:
    typeof window !== 'undefined' ? !!getAccessTokenFromLocal() : false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
    },
  },
})

export const { login, logout } = loginSlice.actions

export const loginReducer = loginSlice.reducer

export const loginSelector = (state: RootState) => state.login
