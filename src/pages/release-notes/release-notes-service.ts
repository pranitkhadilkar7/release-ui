import { apiService } from '../../store/service'
import { getAccessTokenFromLocal } from '../../utils/storageUtils'
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
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result?.data?.map(({ id }) => ({
                type: 'RELEASE' as const,
                id: `${id}`,
              })),
            ]
          : ['RELEASE'],
    }),
    getLatestRelease: build.query<LatestRelease, void>({
      query: () => ({
        url: '/release/latest',
        method: 'GET',
      }),
      providesTags: ['RELEASE'],
    }),
    createRelease: build.mutation<
      any,
      Omit<Release, 'id' | 'createdAt' | 'updatedAt'>
    >({
      query: (body) => ({
        url: '/release/create',
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${getAccessTokenFromLocal()}`,
        },
      }),
      invalidatesTags: ['RELEASE'],
    }),
  }),
})

export const {
  useGetReleasesQuery,
  useGetLatestReleaseQuery,
  useCreateReleaseMutation,
} = releaseApi
