import { LazyExoticComponent, lazy } from 'react'
import { Home } from '../pages/home/Home'
import { CreateRelease } from '../pages/release-notes/CreateRelease'
import { FspReleaseNotes } from '../pages/release-notes/FspReleaseNotes'
import { RegulatorReleaseNotes } from '../pages/release-notes/RegulatorReleaseNotes'

const Login = lazy(() => import('../pages/login/Login'))
const Signup = lazy(() => import('../pages/signup/Signup'))

type RouteInfo = {
  path: string
  component: () => JSX.Element
}

type LazyRouteInfo = {
  path: string
  component: LazyExoticComponent<() => JSX.Element>
}

export const PATH = {
  home: '/',
  login: '/login',
  signup: '/signup',
  fspReleaseNotes: '/release-notes/fsp',
  regulatorReleaseNotes: '/release-notes/regulator',
  createRelease: '/release-notes/create',
}

export const PUBLIC_ROUTES: RouteInfo[] = [
  {
    path: PATH.home,
    component: Home,
  },
  {
    path: PATH.fspReleaseNotes,
    component: FspReleaseNotes,
  },
  {
    path: PATH.regulatorReleaseNotes,
    component: RegulatorReleaseNotes,
  },
]

export const AUTH_ROUTES: LazyRouteInfo[] = [
  {
    path: PATH.login,
    component: Login,
  },
  {
    path: PATH.signup,
    component: Signup,
  },
]

export const PRIVATE_ROUTES: RouteInfo[] = [
  {
    path: PATH.createRelease,
    component: CreateRelease,
  },
]
