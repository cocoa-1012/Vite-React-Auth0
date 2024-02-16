import { ChangeEventHandler  } from 'react'

export type DateProps = {
  label: string,
  placeholder?: string,
  value?: string,
  name?: string;
  onValueChange?: ChangeEventHandler,
}
