import { Home } from '../pages/home/Home'
import { Login } from '../pages/login/Login'
import { CreateRelease } from '../pages/release-notes/CreateRelease'
import { FspReleaseNotes } from '../pages/release-notes/FspReleaseNotes'
import { RegulatorReleaseNotes } from '../pages/release-notes/RegulatorReleaseNotes'
import { Signup } from '../pages/signup/Signup'

type RouteInfo = {
  path: string
  component: () => JSX.Element
}

export const PATH = {
  home: '/emtech-release-ui',
  login: '/emtech-release-ui/login',
  signup: '/emtech-release-ui/signup',
  fspReleaseNotes: '/emtech-release-ui/release-notes/fsp',
  regulatorReleaseNotes: '/emtech-release-ui/release-notes/regulator',
  createRelease: '/emtech-release-ui/release-notes/create',
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
