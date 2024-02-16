import { ChangeEventHandler  } from 'react'

export type InputProps = {
  label: string,
  password?: boolean,
  placeholder?: string,
  value?: string,
  name?: string,
  onValueChange?: ChangeEventHandler,
}
