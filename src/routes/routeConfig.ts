import { Home } from '../pages/home/Home'
import { Login } from '../pages/login/Login'
import { CreateRelease } from '../pages/release-notes/CreateRelease'
import { FspReleaseNotes } from '../pages/release-notes/FspReleaseNotes'
import { RegulatorReleaseNotes } from '../pages/release-notes/RegulatorReleaseNotes'

type RouteInfo = {
  path: string
  component: () => JSX.Element
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

export const AUTH_ROUTES: RouteInfo[] = [
  {
    path: PATH.login,
    component: Login,
  },
]

export const PRIVATE_ROUTES: RouteInfo[] = [
  {
    path: PATH.createRelease,
    component: CreateRelease,
  },
]
