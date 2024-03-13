import { useAuth } from '../hooks/useAuth'

export function withAuthentication(WrappedComponent: () => JSX.Element) {
  return (props: any) => {
    const { isLoggedIn } = useAuth()
    return (
      <>
        {isLoggedIn ? (
          <WrappedComponent {...props} />
        ) : (
          <div className="tw-h-full tw-w-full tw-flex tw-flex-col tw-overflow-auto">
            <div className="tw-justify-center tw-items-centere">
              <p className="tw-text-xl tw-font-medium">
                Please login to access this Page
              </p>
            </div>
          </div>
        )}
      </>
    )
  }
}
