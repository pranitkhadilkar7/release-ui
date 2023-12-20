import { Badge } from './Badge'
import { ListItem } from './ListItem'

type Props = {
  id: number
  name: string
  descriptions: string[]
  month: string
  year: string
  newFeatures: string[]
  upgrades: string[]
  fixes: string[]
  className?: string
}

export function Release({
  id,
  name,
  descriptions,
  month,
  year,
  newFeatures,
  upgrades,
  fixes,
  className,
}: Props) {
  return (
    <div
      className={`${className} tw-w-full tw-text-lg tw-font-normal tw-pb-10`}
    >
      <p className="tw-text-date-1 tw-text-xl">
        {month} {year}
      </p>
      <h3 className="tw-text-2xl tw-font-semibold tw-mb-4 tw-font-proxima_novabold">
        {name}
      </h3>

      {!!descriptions.length && (
        <div className="tw-mb-4">
          {descriptions.map((description, index) => (
            <p key={`${id}-${index}-description`}>{description}</p>
          ))}
        </div>
      )}

      {!!newFeatures.length && (
        <div className="tw-mb-4">
          <Badge
            text="New Features"
            className="tw-mb-3 tw-bg-emerald-600 tw-text-emerald-600"
          />
          {newFeatures.map((feature, index) => (
            <ListItem
              key={`${id}-${index}fix`}
              text={feature}
              listMarkerClassName="tw-bg-emerald-600"
            />
          ))}
        </div>
      )}

      {!!upgrades.length && (
        <div className="tw-mb-4">
          <Badge
            text="Upgrades"
            className="tw-mb-3 tw-bg-secondary tw-text-secondary"
          />
          {upgrades.map((feature, index) => (
            <ListItem
              key={`${id}-${index}-new-upgrades`}
              text={feature}
              listMarkerClassName="tw-bg-secondary"
            />
          ))}
        </div>
      )}

      {!!fixes.length && (
        <div className="tw-mb-4">
          <Badge
            text="Fixes"
            className="tw-mb-3 tw-bg-primary tw-text-primary"
          />
          {fixes.map((fix, index) => (
            <ListItem
              key={`${id}-${index}fix`}
              text={fix}
              listMarkerClassName="tw-bg-primary"
            />
          ))}
        </div>
      )}
    </div>
  )
}
