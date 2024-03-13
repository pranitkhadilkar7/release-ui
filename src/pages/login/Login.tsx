import { PrimaryButton } from '../../components/PrimaryButton'
import emtechLogo from '../../assets/images/logo.png'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ErrorText } from '../../components/ErrorText'
import isEmail from 'validator/lib/isEmail'
import { useLoginMutation } from './login-service'
import { useNavigate } from 'react-router-dom'
import { storeAccessTokenAtLocal } from '../../utils/storageUtils'
import { PATH } from '../../routes/routeConfig'
import { useDispatch } from 'react-redux'
import { login } from './login-slice'
import { Suspense } from 'react'

export type SignInForm = {
  email: string
  password: string
}

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({ mode: 'onChange' })

  const [loginUser, { isLoading }] = useLoginMutation()

  const onSubmit: SubmitHandler<SignInForm> = (data) => {
    loginUser(data).then((res: any) => {
      if (res?.data?.accessToken) {
        storeAccessTokenAtLocal(res.data.accessToken)
        dispatch(login())
        navigate(PATH.home)
      }
    })
  }

  return (
    <Suspense fallback="Loading...">
      <div className="tw-flex tw-flex-col tw-h-full tw-overflow-auto">
        <div className="tw-grow tw-flex tw-flex-row tw-items-center tw-justify-center">
          <div className="tw-flex tw-flex-col tw-items-center tw-max-w-full tw-min-w-50 md:tw-max-w-100 md:tw-min-w-100">
            <img
              src={emtechLogo}
              alt="EMTECH Logo"
              className="tw-max-h-5 tw-mb-4"
            />
            <h3 className="tw-font-bold tw-text-[1.75rem] tw-leading-9 tw-mt-2 tw-text-[#1e252d] tw-mb-2">
              Sign In to your account
            </h3>
            <div className="tw-w-full">
              <label
                htmlFor="email"
                className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
              >
                Email
              </label>
              <div className="tw-mt-2">
                <input
                  type="email"
                  id="email"
                  className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-px-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset 
                  tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-primary focus:tw-outline-none 
                  sm:tw-text-sm sm:tw-leading-6"
                  placeholder="you@example.com"
                  {...register('email', {
                    required: true,
                    validate: { isEmail: (value) => isEmail(value) },
                  })}
                />
                {errors.email && (
                  <ErrorText
                    text="Not a valid email address"
                    className="tw-mt-2"
                  />
                )}
              </div>
            </div>

            <div className="tw-w-full tw-my-4">
              <label
                htmlFor="password"
                className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
              >
                Password
              </label>
              <div className="tw-mt-2">
                <input
                  type="password"
                  id="password"
                  className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-px-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset 
                  tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-primary focus:tw-outline-none 
                  sm:tw-text-sm sm:tw-leading-6"
                  placeholder="Password"
                  {...register('password', { required: true })}
                />
                {errors.password && (
                  <>
                    <ErrorText
                      text="Not a valid password"
                      className="tw-mt-2"
                    />
                  </>
                )}
              </div>
            </div>
            <PrimaryButton
              title="Sign In"
              className="tw-h-10 tw-w-full tw-mt-2"
              disabled={isLoading}
              showSpinner={isLoading}
              onClick={handleSubmit(onSubmit)}
            />
            <p className="tw-mt-4 tw-text-sm tw-text-gray-500">
              Not a member?{' '}
              <a
                href="/"
                className="tw-font-semibold tw-leading-6 tw-text-primary hover:tw-text-primary"
                onClick={(e) => {
                  e.preventDefault()
                  navigate(PATH.signup)
                }}
              >
                Register for free
              </a>
            </p>
            <p className="tw-mt-1 tw-text-sm tw-text-gray-500">
              Not here to create a release?{' '}
              <a
                href="/"
                className="tw-font-semibold tw-leading-6 tw-text-primary hover:tw-text-primary"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/')
                }}
              >
                Check our releases
              </a>
            </p>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
