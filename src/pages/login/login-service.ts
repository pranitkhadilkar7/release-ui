import { apiService } from '../../store/service'
import { SignInForm } from './Login'

const loginApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, SignInForm>({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation } = loginApi
