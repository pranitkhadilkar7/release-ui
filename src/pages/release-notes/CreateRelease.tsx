import { Dropdown } from '../../components/Dropdown'
import { LogoHeader } from '../../components/LogoHeader'
import { TextInput } from '../../components/TextInput'
import { MONTH_OPTIONS, YEAR_OPTIONS } from '../../utils/constant'

export function CreateRelease() {
  return (
    <div className="w-flex tw-flex-col tw-h-full tw-overflow-auto tw-bg-back-swerl tw-bg-no-repeat">
      <LogoHeader />
      <div className="tw-w-full sm:tw-w-1/2 tw-mx-auto tw-max-w-150 tw-p-6">
        <h3 className="tw-font-bold tw-text-[1.75rem] tw-leading-9 tw-mt-2 tw-mb-2">
          Create New Release
        </h3>
        <div className="tw-my-4">
          <TextInput
            id="releaseName"
            label="Name"
            placeholder="Name"
            type="text"
          />
          <div className="tw-mt-3 tw-flex tw-flex-row">
            <div className="tw-basis-1/2">
              <Dropdown
                label="Month"
                placeholder="Month"
                options={MONTH_OPTIONS}
              />
            </div>
            <div className="tw-basis-1/2 tw-ml-4">
              <Dropdown
                label="Year"
                placeholder="Year"
                options={YEAR_OPTIONS}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
