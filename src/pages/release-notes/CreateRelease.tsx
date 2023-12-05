import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { Dropdown } from '../../components/Dropdown'
import { LogoHeader } from '../../components/LogoHeader'
import { TextInput } from '../../components/TextInput'

import {
  MONTH_OPTIONS,
  RELEASE_OPTIONS,
  YEAR_OPTIONS,
} from '../../utils/constant'
import { PrimaryButton } from '../../components/PrimaryButton'
import { ErrorText } from '../../components/ErrorText'
import { TextareaInput } from '../../components/TextareaInput'

type RelaseForm = {
  name: string
  month: string
  year: string
  type: string
  descriptions: { description: string }[]
}

export function CreateRelease() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RelaseForm>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      month: '',
      year: '',
      type: '',
      descriptions: [{ description: '' }],
    },
  })
  const {
    fields: descriptionFields,
    append: appendDescription,
    remove: removeDescription,
  } = useFieldArray({
    control,
    name: 'descriptions',
  })

  function onSubmit(data: RelaseForm) {
    console.log(data)
  }

  return (
    <div className="w-flex tw-flex-col tw-h-full tw-overflow-auto tw-bg-back-swerl tw-bg-no-repeat">
      <LogoHeader />
      <div className="tw-w-full sm:tw-w-1/2 tw-mx-auto tw-max-w-150 tw-p-6">
        <h3 className="tw-font-bold tw-text-[1.75rem] tw-leading-9 tw-mt-2 tw-mb-2">
          Create New Release
        </h3>
        <div className="tw-my-4">
          <TextInput
            id="releaseName"
            label="Name"
            placeholder="Name"
            type="text"
            name="name"
            register={register}
            required
          >
            {errors.name && (
              <ErrorText text="Not a valid release name" className="tw-mt-2" />
            )}
          </TextInput>
          <div className="tw-mt-3 tw-flex tw-flex-row">
            <div className="tw-basis-1/2">
              <Controller
                control={control}
                name="month"
                defaultValue=""
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <Dropdown
                    label="Month"
                    placeholder="Month"
                    options={MONTH_OPTIONS}
                    onChange={(value) => {
                      if (value) {
                        onChange(value.name)
                        return
                      }
                      onChange('')
                    }}
                  >
                    {errors.month && (
                      <ErrorText
                        text="Not a valid release month"
                        className="tw-mt-2"
                      />
                    )}
                  </Dropdown>
                )}
              />
            </div>
            <div className="tw-basis-1/2 tw-ml-4">
              <Controller
                control={control}
                name="year"
                defaultValue=""
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <Dropdown
                    label="Year"
                    placeholder="Year"
                    options={YEAR_OPTIONS}
                    onChange={(value) => {
                      if (value) {
                        onChange(value.name)
                        return
                      }
                      onChange('')
                    }}
                  >
                    {errors.year && (
                      <ErrorText
                        text="Not a valid release year"
                        className="tw-mt-2"
                      />
                    )}
                  </Dropdown>
                )}
              />
            </div>
          </div>
          <div className="tw-mt-3">
            <Controller
              control={control}
              name="type"
              defaultValue=""
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Dropdown
                  label="Type"
                  placeholder="Type"
                  options={RELEASE_OPTIONS}
                  onChange={(value) => {
                    if (value) {
                      onChange(value.id)
                      return
                    }
                    onChange('')
                  }}
                >
                  {errors.type && (
                    <ErrorText
                      text="Not a valid release type"
                      className="tw-mt-2"
                    />
                  )}
                </Dropdown>
              )}
            />
          </div>
          <div className="tw-mt-5">
            {descriptionFields.map((field, index) => (
              <TextareaInput
                id="description"
                name={`descriptions.${index}.description`}
                label={index === 0 ? 'Description' : ''}
                placeholder="Description"
                showAddIcon={index === descriptionFields.length - 1}
                showRemoveIcon={index < descriptionFields.length - 1}
                register={register}
                required
                onAdd={() => {
                  appendDescription({ description: '' })
                }}
                onRemove={() => {
                  removeDescription(index)
                }}
              />
            ))}
          </div>
          <PrimaryButton
            title="Submit"
            className="tw-h-10 tw-w-full tw-mt-5"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </div>
  )
}
