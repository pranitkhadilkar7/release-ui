import { apiService } from '../../store/service'
import { LatestRelease, Release, ReleaseType } from './release-type'

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
    getLatestRelease: build.query<LatestRelease, void>({
      query: () => ({
        url: '/release/latest',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetReleasesQuery, useGetLatestReleaseQuery } = releaseApi
