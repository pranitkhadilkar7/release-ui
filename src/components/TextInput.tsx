import { UseFormRegister } from 'react-hook-form'

type Props = {
  id: string
  label: string
  placeholder: string
  type: 'email' | 'text'
  name: string
  register: UseFormRegister<any>
  required?: boolean
  children?: JSX.Element
}

export function TextInput({
  id,
  label,
  placeholder,
  type,
  name,
  register,
  required,
  children,
}: Props) {
  return (
    <div className="tw-w-full">
      <label
        htmlFor={id}
        className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900 tw-font-proxima_novabold"
      >
        {label}
        {required && '*'}
      </label>
      <div className="tw-mt-2">
        <input
          type={type}
          id={id}
          className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-px-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset 
                  tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-primary focus:tw-outline-none 
                  sm:tw-text-sm sm:tw-leading-6"
          placeholder={placeholder}
          {...register(name, { required })}
        />
        {children ?? <></>}
      </div>
    </div>
  )
}
