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
import { TextareaInput } from '../../components/TextareaInput'
import { useCreateReleaseMutation } from './release-notes-service'
import { ReleaseType } from './release-type'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../routes/routeConfig'

type RelaseForm = {
  name: string
  month: string
  year: string
  type: ReleaseType
  descriptions: { description: string }[]
  newFeatures: { feature: string }[]
  upgrades: { upgrade: string }[]
  fixes: { fix: string }[]
}

export function CreateRelease() {
  const navigate = useNavigate()
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
      type: '' as ReleaseType,
      descriptions: [{ description: '' }],
      newFeatures: [{ feature: '' }],
      upgrades: [{ upgrade: '' }],
      fixes: [{ fix: '' }],
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
  const {
    fields: newFeatureFields,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({
    control,
    name: 'newFeatures',
  })
  const {
    fields: upgradeFields,
    append: appendUpgrade,
    remove: removeUpgrade,
  } = useFieldArray({
    control,
    name: 'upgrades',
  })
  const {
    fields: fixFields,
    append: appendFix,
    remove: removeFix,
  } = useFieldArray({ control, name: 'fixes' })

  const [createRelease, { isLoading }] = useCreateReleaseMutation()

  function onSubmit(data: RelaseForm) {
    createRelease({
      ...data,
      descriptions: data.descriptions
        .filter(({ description }) => !!description)
        .map(({ description }) => description),
      newFeatures: data.newFeatures
        .filter(({ feature }) => !!feature)
        .map(({ feature }) => feature),
      upgrades: data.upgrades
        .filter(({ upgrade }) => !!upgrade)
        .map(({ upgrade }) => upgrade),
      fixes: data.fixes.filter(({ fix }) => !!fix).map(({ fix }) => fix),
      status: 'PUBLISHED',
    }).then((res: any) => {
      if (res.data) {
        navigate(PATH.home)
      }
    })
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
            hasError={!!errors.name}
          />
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
                    required
                    hasError={!!errors.month}
                  />
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
                    required
                    hasError={!!errors.year}
                  />
                )}
              />
            </div>
          </div>
          <div className="tw-mt-3">
            <Controller
              control={control}
              name="type"
              defaultValue={'' as ReleaseType}
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
                  required
                  hasError={!!errors.type}
                />
              )}
            />
          </div>
          <div className="tw-mt-5">
            {descriptionFields.map((field, index) => (
              <TextareaInput
                key={`descriptions.${index}.description`}
                id={`descriptions.${index}.description`}
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
                hasError={
                  errors.descriptions?.length
                    ? !!errors.descriptions[index]
                    : false
                }
              />
            ))}
          </div>
          <div className="tw-mt-2">
            {newFeatureFields.map((field, index) => (
              <TextareaInput
                key={`newFeatures.${index}.feature`}
                id={`newFeatures.${index}.feature`}
                name={`newFeatures.${index}.feature`}
                label={index === 0 ? 'New Features' : ''}
                placeholder="New Feature"
                register={register}
                showAddIcon={index === newFeatureFields.length - 1}
                showRemoveIcon={index < newFeatureFields.length - 1}
                onAdd={() => {
                  appendFeature({ feature: '' })
                }}
                onRemove={() => {
                  removeFeature(index)
                }}
              />
            ))}
          </div>
          <div className="tw-mt-2">
            {upgradeFields.map((field, index) => (
              <TextareaInput
                key={`upgrades.${index}.upgrade`}
                id={`upgrades.${index}.upgrade`}
                name={`upgrades.${index}.upgrade`}
                label={index === 0 ? 'Upgrades' : ''}
                placeholder="Upgrades"
                register={register}
                showAddIcon={index === upgradeFields.length - 1}
                showRemoveIcon={index < upgradeFields.length - 1}
                onAdd={() => {
                  appendUpgrade({ upgrade: '' })
                }}
                onRemove={() => {
                  removeUpgrade(index)
                }}
              />
            ))}
          </div>
          <div className="tw-mt-2">
            {fixFields.map((field, index) => (
              <TextareaInput
                key={`fixes.${index}.fix`}
                id={`fixes.${index}.fix`}
                name={`fixes.${index}.fix`}
                label={index === 0 ? 'Fixes' : ''}
                placeholder="Fixes"
                register={register}
                showAddIcon={index === fixFields.length - 1}
                showRemoveIcon={index < fixFields.length - 1}
                onAdd={() => {
                  appendFix({ fix: '' })
                }}
                onRemove={() => {
                  removeFix(index)
                }}
              />
            ))}
          </div>
          <PrimaryButton
            title="Submit"
            className="tw-h-10 tw-w-full tw-mt-5"
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
            showSpinner={isLoading}
          />
        </div>
      </div>
    </div>
  )
}
