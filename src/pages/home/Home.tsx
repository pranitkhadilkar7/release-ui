import { LogoHeader } from '../../components/LogoHeader'
import { ReleaseTypeCard } from '../../components/ReleaseTypeCard'

export function Home() {
  return (
    <div className="tw-flex tw-flex-col tw-h-full tw-overflow-auto">
      <LogoHeader />
      <div
        className="tw-grow tw-flex tw-flex-row tw-items-center tw-justify-center tw-px-6 tw-bg-back-swerl tw-bg-no-repeat 
          lg:tw-bg-50% lg:tw-bg-left-24 tw-bg-center tw-bg-cover"
      >
        <div className="tw-flex tw-flex-row tw-flex-wrap tw-items-center tw-justify-center">
          <ReleaseTypeCard
            title="Regulator Release notes"
            lastUpdateMonth="November"
            lastUpdateYear="2023"
            buttonText="I'm a Regulator"
            className="tw-p-4.5 tw-bg-white-house tw-bg-no-repeat tw-bg-50% tw-bg-right"
          />
          <ReleaseTypeCard
            title="FSP Release notes"
            lastUpdateMonth="November"
            lastUpdateYear="2023"
            buttonText="I'm a FSP"
            className="tw-p-4.5 tw-bg-rocket tw-bg-no-repeat tw-bg-50% tw-bg-right"
          />
        </div>
      </div>
    </div>
  )
}
