import emtechLogo from '../../assets/images/logo.png'

export function RegulatorReleaseNotes() {
  return (
    <div className="tw-flex tw-flex-col tw-h-full tw-overflow-auto tw-bg-relase-page tw-bg-no-repeat tw-bg-cover">
      <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-py-6 tw-px-30">
        <img src={emtechLogo} alt="EMTECH Logo" className="tw-max-h-5" />
        <div className="tw-flex tw-flex-col tw-justify-between tw-pl-6">
          <p className="tw-text-base">Emtech Regulator Release notes</p>
          <a href="/" className="tw-text-[#6b7280] tw-text-sm">
            emtech.com
          </a>
        </div>
      </div>
    </div>
  )
}
