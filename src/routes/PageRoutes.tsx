import { Route, Routes } from 'react-router-dom'
import { AUTH_ROUTES, PUBLIC_ROUTES } from './routeConfig'
import { AuthNotRequired } from './AuthNotRequired'

export function PageRoutes() {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
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
