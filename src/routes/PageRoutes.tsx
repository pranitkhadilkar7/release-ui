import { Route, Routes } from 'react-router-dom'
import { AUTH_ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES } from './routeConfig'
import { AuthNotRequired } from './AuthNotRequired'
import { RequireAuth } from './RequireAuth'
import { Suspense } from 'react'

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
            <Suspense>
              <AuthNotRequired>
                <route.component />
              </AuthNotRequired>
            </Suspense>
          }
        />
      ))}
      {PRIVATE_ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <RequireAuth>
              <route.component />
            </RequireAuth>
          }
        />
      ))}
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}
