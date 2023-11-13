import { Login } from '../pages/login/Login'

type RouteInfo = {
  path: string
  component: () => JSX.Element
}

export const PATH = {
  home: '/',
  login: '/login',
  signup: '/signup',
}

export const PUBLIC_ROUTES = []

export const AUTH_ROUTES: RouteInfo[] = [
  {
    path: PATH.login,
    component: Login,
  },
]

export const PRIVATE_ROUTES = []
