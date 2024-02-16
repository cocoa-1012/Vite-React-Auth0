import {
  PropsWithChildren,
  ReactNode,
} from 'react'

export type Props = PropsWithChildren<{ children?: ReactNode }> & {
  meta?: ReactNode,
  metaDescription?: string,
  metaKeywords?: string,
  styles?: string,
  title?: string,
}
