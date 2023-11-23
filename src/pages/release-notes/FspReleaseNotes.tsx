import { useState } from 'react'
import emtechLogo from '../../assets/images/dark-theme-logo.png'
import { useGetReleasesQuery } from './release-notes-service'
import { Release } from '../../components/Release'

export function FspReleaseNotes() {
  const [pageSize] = useState(1)
  const { data: release } = useGetReleasesQuery({ type: 'FSP', pageSize })

  return (
    <div className="tw-flex tw-flex-col tw-h-full tw-overflow-auto tw-bg-relase-page tw-bg-no-repeat tw-bg-cover tw-bg-[#25313e]">
      <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-py-6 tw-px-30">
        <img src={emtechLogo} alt="EMTECH Logo" className="tw-max-h-5" />
        <div className="tw-flex tw-flex-col tw-justify-between tw-pl-6 tw-text-white">
          <p className="tw-text-base">Emtech FSP Release notes</p>
          <a href="/" className="tw-text-sm">
            emtech.com
          </a>
        </div>
      </div>
      <div className="tw-flex tw-flex-col tw-px-10 md:tw-mx-auto md:tw-w-3/5 md:tw-px-0">
        {release?.data?.map((release) => (
          <Release
            key={`${release.id}`}
            id={release.id}
            name={release.name}
            descriptions={release.description}
            month={release.month}
            year={release.year}
            newFeatures={release.newFeatures}
            upgrades={release.upgrades}
            fixes={release.fixes}
          />
        ))}
      </div>
    </div>
  )
}
