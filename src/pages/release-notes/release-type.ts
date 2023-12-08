export type ReleaseType = 'FSP' | 'REGULATOR'
export type ReleaseStatus = 'PUBLISHED' | 'UNPUBLISHED'

export type Release = {
  id: number
  name: string
  descriptions: string[]
  type: ReleaseType
  month: string
  year: string
  status: ReleaseStatus
  newFeatures: string[]
  upgrades: string[]
  fixes: string[]
  createdAt: string
  updatedAt: string
}

export type LatestRelease = {
  fspRelease: Pick<Release, 'month' | 'year' | 'type'> | null
  regRelease: Pick<Release, 'month' | 'year' | 'type'> | null
}
