export function TextareaInput() {
  return (
    <div className="tw-w-full">
      <label
        htmlFor="about"
        className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
      >
        Description
      </label>
      <div className="tw-mt-2">
        <textarea
          id="about"
          name="about"
          rows={2}
          className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-px-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset 
                  tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-primary focus:tw-outline-none 
                  sm:tw-text-sm sm:tw-leading-6"
          defaultValue={''}
          placeholder="Description"
        />
      </div>
    </div>
  )
}
