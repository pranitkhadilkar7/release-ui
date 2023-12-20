import { ListMarker } from './ListMarker'

type Props = {
  text: string
  listMarkerClassName?: string
}

export function ListItem({ text, listMarkerClassName }: Props) {
  return (
    <div className="tw-flex tw-flex-row tw-items-center">
      <div className="tw-mx-3">
        <ListMarker className={listMarkerClassName} />
      </div>

      <p className="">{text}</p>
    </div>
  )
}
