const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN'

export function storeAccessTokenAtLocal(accessToken: string) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
}

export function getAccessTokenFromLocal() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)
  return accessToken
}

export function clearLocalStorage() {
  localStorage.clear()
}
