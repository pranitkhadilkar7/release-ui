import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

export function ListMarker({ className }: Props) {
  return (
    <div
      className={twMerge(
        'tw-rounded-full tw-h-2 tw-w-2',
        className ?? 'tw-bg-primary'
      )}
    />
  )
}
