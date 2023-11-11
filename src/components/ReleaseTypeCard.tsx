import { PrimaryButton } from './PrimaryButton'

type Props = {
  title: string
  lastUpdateMonth: string
  lastUpdateYear: string
  buttonText: string
  className?: string
}

export function ReleaseTypeCard({
  title,
  lastUpdateMonth,
  lastUpdateYear,
  buttonText,
  className = '',
}: Props) {
  return (
    <div
      className={`tw-min-h-112.5 tw-max-w-full tw-min-w-50 md:tw-max-w-125 md:tw-min-w-125 tw-bg-guyabano 
      tw-m-5 tw-p-10 tw-rounded-2xl tw-border-2 tw-border-solid tw-border-guyabano hover:tw-border-primary
      tw-flex tw-flex-col ${className}`}
    >
      <h3 className="tw-font-bold tw-text-[1.75rem] tw-leading-9 tw-mt-2 tw-text-[#1e252d] tw-mb-2">
        {title}
      </h3>
      <p className="tw-font-normal tw-text-xl tw-text-[#47698e] tw-leading-6.5 tw-tracking-[0.063rem] tw-mb-4">
        Last update: {lastUpdateMonth} {lastUpdateYear}
      </p>
      <div>
        <PrimaryButton title={buttonText} />
      </div>
    </div>
  )
}
