import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { AUTH_ROUTES } from './routeConfig'
import { AuthNotRequired } from './AuthNotRequired'

export function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {AUTH_ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <AuthNotRequired>
              <route.component />
            </AuthNotRequired>
          }
        />
      ))}
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}
