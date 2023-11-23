import { useState } from 'react'
import emtechLogo from '../../assets/images/dark-theme-logo.png'
import { useGetReleasesQuery } from './release-notes-service'

export function FspReleaseNotes() {
  const [pageSize] = useState(1)
  const {} = useGetReleasesQuery({ type: 'FSP', pageSize })

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
        <div className="tw-w-full tw-text-white">
          <p className="tw-text-date-1 tw-text-xl">September 2023</p>
          <h3 className="tw-text-2xl tw-font-semibold tw-mb-4 tw-font-proxima_novabold">
            Improved User Experience
          </h3>
          <p className="tw-text-lg tw-font-normal">
            We improved navigation on the platform to enhance the user
            experience of financial service providers (FSPs).In addition we also
            worked on
          </p>
        </div>
      </div>
    </div>
  )
}
