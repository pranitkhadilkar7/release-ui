import { useSelector } from 'react-redux'
import { loginSelector } from '../pages/login/login-slice'

export function useAuth() {
  const { isLoggedIn } = useSelector(loginSelector)
  return { isLoggedIn }
}
