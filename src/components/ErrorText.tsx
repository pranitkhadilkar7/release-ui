type Props = {
  text: string
  className?: string
}

export function ErrorText({ text, className = '' }: Props) {
  return (
    <p className={`tw-text-sm tw-text-red-600 ${className}`} id="email-error">
      {text}
    </p>
  )
}
