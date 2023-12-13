import { apiService } from '../../store/service'
import { SignUpForm } from './Signup'

const registerApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation<{ accessToken: string }, SignUpForm>({
      query: (body) => ({
        url: 'auth/signup',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useSignupMutation } = registerApi
