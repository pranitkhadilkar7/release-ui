import { useCallback, useState } from 'react'

export function useBooleanToggle(initialValue: boolean) {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => {
    setValue((prev) => !prev)
  }, [])

  return [value, toggle]
}
