import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

// const people = [
//   { id: 1, name: 'Wade Cooper' },
//   { id: 2, name: 'Arlene Mccoy' },
//   { id: 3, name: 'Devon Webb' },
//   { id: 4, name: 'Tom Cook' },
//   { id: 5, name: 'Tanya Fox' },
//   { id: 6, name: 'Hellen Schmidt' },
//   { id: 7, name: 'Caroline Schultz' },
//   { id: 8, name: 'Mason Heaney' },
//   { id: 9, name: 'Claudie Smitham' },
//   { id: 10, name: 'Emil Schaefer' },
// ]

export type DropdownOption = {
  id: number | string
  name: string
}

type Props = {
  label: string
  placeholder: string
  options: DropdownOption[]
  onChange: (value: DropdownOption) => void
  children?: JSX.Element
  required?: boolean
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export function Dropdown({
  label,
  placeholder,
  options,
  onChange,
  children,
  required,
}: Props) {
  const [selected, setSelected] = useState<DropdownOption>()

  return (
    <Listbox
      value={selected}
      onChange={(value) => {
        onChange(value)
        setSelected(value)
      }}
    >
      {({ open }) => (
        <>
          <Listbox.Label className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900">
            {label}
            {required && '*'}
          </Listbox.Label>
          <div className="tw-relative tw-mt-2">
            <Listbox.Button
              className="tw-relative tw-w-full tw-cursor-default tw-rounded-md tw-bg-white tw-py-1.5 tw-pl-3 tw-pr-10 tw-text-left tw-text-gray-900 tw-shadow-sm tw-ring-1 
        tw-ring-inset tw-ring-gray-300 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-primary sm:tw-text-sm sm:tw-leading-6"
            >
              {selected ? (
                <span className="tw-block tw-truncate">{selected.name}</span>
              ) : (
                <span className="tw-block tw-truncate tw-text-gray-400">
                  {placeholder}
                </span>
              )}
              <span className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-2">
                <ChevronUpDownIcon
                  className="tw-h-5 tw-w-5 tw-text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            {children ?? <></>}
            <Transition
              show={open}
              as={Fragment}
              leave="tw-transition tw-ease-in tw-duration-100"
              leaveFrom="tw-opacity-100"
              leaveTo="tw-opacity-0"
            >
              <Listbox.Options
                className="tw-absolute tw-z-10 tw-mt-1 tw-max-h-60 tw-w-full tw-overflow-auto tw-rounded-md tw-bg-white tw-py-1 tw-text-base
                 tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none sm:tw-text-sm"
              >
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'tw-bg-primary tw-text-white'
                          : 'tw-text-gray-900',
                        'tw-relative tw-cursor-default tw-select-none tw-py-2 tw-pl-3 tw-pr-9'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'tw-font-semibold' : 'tw-font-normal',
                            'tw-block tw-truncate'
                          )}
                        >
                          {option.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'tw-text-white' : 'tw-text-primary',
                              'tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-4'
                            )}
                          >
                            <CheckIcon
                              className="tw-h-5 tw-w-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
