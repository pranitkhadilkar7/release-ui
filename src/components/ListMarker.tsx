type Props = {
  className?: string
}

export function ListMarker({ className }: Props) {
  return (
    <div
      className={`tw-rounded-full tw-bg-primary tw-h-2 tw-w-2 tw-mx-3 ${className}`}
    />
  )
}
