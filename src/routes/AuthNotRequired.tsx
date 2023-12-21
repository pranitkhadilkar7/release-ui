import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

type Props = {
  children: JSX.Element
}

export function AuthNotRequired({ children }: Props) {
  const { isLoggedIn } = useAuth()
  const location = useLocation()

  if (isLoggedIn) {
    return (
      <Navigate to="/emtech-release-ui" state={{ from: location }} replace />
    )
  }
  return children
}
