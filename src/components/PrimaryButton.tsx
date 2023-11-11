type Props = {
  title: string
  className?: string
}

export function PrimaryButton({ title, className }: Props) {
  return (
    <button
      className={`tw-p-4.5 tw-bg-primary tw-rounded-lg tw-border tw-border-primary tw-border-solid tw-text-white ${className}`}
    >
      {title}
    </button>
  )
}
