type Props = {
  title: string
  className?: string
  onClick: () => void
}

export function PrimaryButton({ title, className, onClick }: Props) {
  return (
    <button
      className={`tw-p-4.5 tw-bg-primary tw-rounded-lg tw-border tw-border-primary tw-border-solid tw-text-white ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
