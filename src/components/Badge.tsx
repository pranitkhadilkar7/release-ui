type Props = {
  text: string
  className?: string
}

export function Badge({ text, className = '' }: Props) {
  return (
    <div
      className={`tw-text-sm tw-py-1.5 tw-px-4 tw-rounded-md tw-text-primary tw-inline-block tw-bg-primary tw-bg-opacity-10 ${className}`}
    >
      {text}
    </div>
  )
}
