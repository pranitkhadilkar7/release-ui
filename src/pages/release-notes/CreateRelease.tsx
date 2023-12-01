import { LogoHeader } from '../../components/LogoHeader'

export function CreateRelease() {
  return (
    <div className="w-flex tw-flex-col tw-h-full tw-overflow-auto">
      <LogoHeader />
      <div className="tw-flex-grow tw-w-full sm:tw-w-1/2 tw-mx-auto tw-max-w-150 tw-p-6">
        <h3 className="tw-font-bold tw-text-[1.75rem] tw-leading-9 tw-mt-2 tw-mb-2">
          Create New Release
        </h3>
        <div className="tw-my-4">
          <div className="tw-w-full">
            <label
              htmlFor="releaseName"
              className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
            >
              Name
            </label>
            <div className="tw-mt-2">
              <input
                type="text"
                id="releaseName"
                className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-p-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset 
                  tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-primary focus:tw-outline-none 
                  sm:tw-text-sm sm:tw-leading-6"
                placeholder="New Fintech/Regulator Release"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
