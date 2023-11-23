import { ListMarker } from './ListMarker'

type Props = {
  text: string
  listMarkerClassName?: string
}

export function ListItem({ text, listMarkerClassName }: Props) {
  return (
    <div className="tw-flex tw-flex-row tw-items-center">
      <ListMarker className={listMarkerClassName} />
      <p className="tw-grow">{text}</p>
    </div>
  )
}
