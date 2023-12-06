import { UseFormRegister } from 'react-hook-form'
import { TrashIcon, PlusCircleIcon } from '@heroicons/react/20/solid'
import { twMerge } from 'tailwind-merge'

type Props = {
  id: string
  label?: string
  placeholder: string
  name: string
  register: UseFormRegister<any>
  required?: boolean
  showRemoveIcon?: boolean
  showAddIcon?: boolean
  onRemove?: () => void
  onAdd?: () => void
  hasError?: boolean
}

export function TextareaInput({
  id,
  label,
  placeholder,
  name,
  register,
  required,
  showRemoveIcon,
  showAddIcon,
  onRemove,
  onAdd,
  hasError,
}: Props) {
  return (
    <div className="tw-w-full">
      {!!label && (
        <label
          htmlFor={id}
          className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900 tw-font-proxima_novabold"
        >
          {label}
          {required && '*'}
        </label>
      )}
      <div className="tw-mt-2">
        <textarea
          id={id}
          rows={2}
          className={twMerge(
            'tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-px-3 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-outline-none sm:tw-text-sm sm:tw-leading-6',
            hasError
              ? 'tw-ring-red-600 focus:tw-ring-red-600'
              : 'tw-ring-gray-300 focus:tw-ring-primary'
          )}
          defaultValue={''}
          placeholder={placeholder}
          {...register(name, { required })}
        />
        <div className="tw-flex tw-items-center tw-justify-end tw-mt-1">
          {showAddIcon && (
            <PlusCircleIcon
              className="tw-h-5 tw-w-5 tw-cursor-pointer"
              onClick={onAdd}
            />
          )}
          {showRemoveIcon && (
            <TrashIcon
              className="tw-h-5 tw-w-5 tw-cursor-pointer"
              onClick={onRemove}
            />
          )}
        </div>
      </div>
    </div>
  )
}
