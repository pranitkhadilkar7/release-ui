import emtechLogo from '../assets/images/logo.png'

export function LogoHeader() {
  return (
    <div className="tw-w-full tw-py-6 tw-flex sm:tw-justify-start tw-justify-around tw-px-28">
      <img src={emtechLogo} alt="EMTECH Logo" className="tw-max-h-5" />
    </div>
  )
}
