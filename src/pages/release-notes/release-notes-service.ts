import { apiService } from '../../store/service'
import { Release, ReleaseType } from './release-type'

const releaseApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    getReleases: build.query<
      { data: Release[]; total: number },
      { type: ReleaseType; pageSize: number }
    >({
      query: (params) => ({
        url: '/release',
        method: 'GET',
        params: { ...params },
      }),
    }),
  }),
})

export const { useGetReleasesQuery } = releaseApi
