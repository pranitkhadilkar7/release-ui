import { twMerge } from 'tailwind-merge'

type Props = {
  text: string
  className?: string
}

export function Badge({ text, className }: Props) {
  return (
    <div
      className={twMerge(
        'tw-text-sm tw-py-1.5 tw-px-4 tw-rounded-md tw-inline-block tw-bg-opacity-10',
        className ?? 'tw-bg-primary tw-text-primary'
      )}
    >
      {text}
    </div>
  )
}
