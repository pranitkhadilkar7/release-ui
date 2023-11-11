import { Spinner } from '../icons/Spinner'

type Props = {
  title: string
  className?: string
  onClick: () => void
  disabled?: boolean
  showSpinner?: boolean
}

export function PrimaryButton({
  title,
  className,
  onClick,
  disabled,
  showSpinner,
}: Props) {
  return (
    <button
      className={`tw-bg-primary tw-rounded-lg tw-border tw-border-primary tw-border-solid tw-text-white 
        disabled:tw-bg-gray-500 disabled:tw-border-gray-500 tw-flex tw-flex-row tw-items-center tw-justify-around ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {showSpinner ? <Spinner /> : title}
    </button>
  )
}
