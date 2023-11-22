import emtechLogo from '../../assets/images/dark-theme-logo.png'

export function FspReleaseNotes() {
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
    </div>
  )
}
