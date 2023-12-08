import { DropdownOption } from '../components/Dropdown'
import { ReleaseType } from '../pages/release-notes/release-type'

export const MONTH_OPTIONS: DropdownOption<number>[] = [
  { id: 1, name: 'January' },
  { id: 2, name: 'February' },
  { id: 3, name: 'March' },
  { id: 4, name: 'April' },
  { id: 5, name: 'May' },
  { id: 6, name: 'June' },
  { id: 7, name: 'July' },
  { id: 8, name: 'August' },
  { id: 9, name: 'September' },
  { id: 10, name: 'October' },
  { id: 11, name: 'November' },
  { id: 12, name: 'December' },
]

export const YEAR_OPTIONS: DropdownOption<number>[] = [
  { id: 2023, name: '2023' },
  { id: 2024, name: '2024' },
]

export const RELEASE_OPTIONS: DropdownOption<ReleaseType>[] = [
  { id: 'FSP', name: 'Fintech' },
  { id: 'REGULATOR', name: 'Regulator' },
]
