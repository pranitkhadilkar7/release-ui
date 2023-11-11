type Props = {
  title: string
}

export function PrimaryButton({ title }: Props) {
  return (
    <button className="tw-p-4.5 tw-bg-primary tw-rounded-lg tw-border tw-border-primary tw-border-solid tw-text-white">
      {title}
    </button>
  )
}
