import { ChangeEventHandler  } from 'react'

export type UploadProps = {
  label: string,
  placeholder?: string,
  value?: string,
  name?: string,
  onValueChange?: ChangeEventHandler,
}