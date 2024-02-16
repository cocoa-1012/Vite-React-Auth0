import { ChangeEventHandler  } from 'react'

export type TextAreaProps = {
  label: string,
  placeholder?: string,
  value?: string,
  name?: string,
  onValueChange?: ChangeEventHandler,
}
