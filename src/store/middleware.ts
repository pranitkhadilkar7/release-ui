import { Middleware } from '@reduxjs/toolkit'

export const middleware: Middleware = (api) => (next) => (action) => {
  const response = next(action)
  return response
}
