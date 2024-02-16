import { ChangeEventHandler  } from 'react'

export type SearchProps = {
  placeholder?: string,
  value?: string,
  name?: string,
  onValueChange?: ChangeEventHandler,
}
