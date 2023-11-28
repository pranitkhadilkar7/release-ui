import { useNavigate } from 'react-router-dom'
import { LogoHeader } from '../../components/LogoHeader'
import { ReleaseTypeCard } from '../../components/ReleaseTypeCard'
import { PATH } from '../../routes/routeConfig'
import { useGetLatestReleaseQuery } from '../release-notes/release-notes-service'
import { ReleaseTypeLoadingCard } from '../../components/ReleaseTypeLoadingCard'

export function Home() {
  const navigate = useNavigate()
  const { data: release, isFetching } = useGetLatestReleaseQuery()

  return (
    <div className="tw-flex tw-flex-col tw-h-full tw-overflow-auto">
      <LogoHeader />
      <div
        className="tw-grow tw-flex tw-flex-row tw-items-center tw-justify-center tw-px-6 tw-bg-back-swerl tw-bg-no-repeat 
          lg:tw-bg-50% lg:tw-bg-left-24 tw-bg-center tw-bg-cover"
      >
        <div className="tw-flex tw-flex-row tw-flex-wrap tw-items-center tw-justify-center">
          {isFetching ? (
            <>
              <ReleaseTypeLoadingCard />
              <ReleaseTypeLoadingCard />
            </>
          ) : (
            <>
              <ReleaseTypeCard
                title="Regulator Release notes"
                lastUpdateMonth={release?.regRelease?.month ?? '--'}
                lastUpdateYear={release?.regRelease?.year ?? '--'}
                buttonText="I'm a Regulator"
                onButtonClick={() => {
                  navigate(PATH.regulatorReleaseNotes)
                }}
                className="tw-bg-white-house tw-bg-no-repeat tw-bg-50% tw-bg-right"
              />
              <ReleaseTypeCard
                title="FSP Release notes"
                lastUpdateMonth={release?.fspRelease?.month ?? '--'}
                lastUpdateYear={release?.fspRelease?.year ?? '--'}
                buttonText="I'm a FSP"
                onButtonClick={() => {
                  navigate(PATH.fspReleaseNotes)
                }}
                className="tw-bg-rocket tw-bg-no-repeat tw-bg-50% tw-bg-right"
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
