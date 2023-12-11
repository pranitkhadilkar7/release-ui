import { useState } from 'react'
import emtechLogo from '../../assets/images/dark-theme-logo.png'
import { useGetReleasesQuery } from './release-notes-service'
import { Release } from '../../components/Release'
import { Spinner } from '../../icons/Spinner'

export function FspReleaseNotes() {
  const [pageSize, setPageSize] = useState(1)
  const { data: releases, isFetching } = useGetReleasesQuery({
    type: 'FSP',
    pageSize,
  })

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
        {releases?.data?.map((release, index) => (
          <Release
            key={`${release.id}`}
            id={release.id}
            name={release.name}
            descriptions={release.descriptions}
            month={release.month}
            year={release.year}
            newFeatures={release.newFeatures}
            upgrades={release.upgrades}
            fixes={release.fixes}
            className={
              releases.data.length > 1 && index < releases.data.length - 1
                ? 'tw-border-b-2 tw-border-solid tw-border-border-1 tw-text-white'
                : 'tw-text-white tw-mt-3'
            }
          />
        ))}
        <div className="tw-text-white tw-text-lg tw-font-normal">
          <p className="tw-mb-6">Do you have questions?</p>
          <p className="tw-mb-6">
            If you have any questions about this release, please send us an
            email at{' '}
            <a href="mailto:support@emtech.com" className="tw-text-secondary">
              support@emtech.com
            </a>
          </p>
          <p className="tw-mb-8">We'd love to hear from you!</p>
        </div>
        <div className="tw-mx-auto tw-w-3/4">
          <div className="tw-border-b-2 tw-border-solid tw-border-border-1" />

          <div
            className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-text-lg tw-font-normal tw-text-primary tw-cursor-pointer"
            onClick={() => {
              setPageSize((prev) => {
                return prev + 1
              })
            }}
          >
            {isFetching ? (
              <div className="tw-mt-3">
                <Spinner />
              </div>
            ) : (
              <>
                <p className="tw-my-3 tw-mr-1">Show previous changelogs</p>
                <svg
                  width="18px"
                  height="18px"
                  version="1.1"
                  viewBox="0 0 700 700"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      fill="currentColor"
                      d="m350 345.52 195.89-195.89c12.836-12.84 33.648-12.84 46.484 0 12.84 12.836 12.84 33.648 0 46.484l-219.13 219.13c-6.418 6.418-14.832 9.6289-23.242 9.6289s-16.824-3.2109-23.242-9.6289l-219.13-219.13c-12.84-12.836-12.84-33.648 0-46.484 12.836-12.84 33.648-12.84 46.484 0z"
                    />
                  </g>
                </svg>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
