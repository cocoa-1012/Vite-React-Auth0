import React from 'react'

import type { SessionState } from '../../../state//slices/session/types'

export type Props = {
  children?: React.ReactElement,
  otherwise?: React.ReactElement | (React.ReactElement | undefined)[],
  test?: Test | Test[],
  /**
   * @todo fix toast types
   */
  toast?: (undefined)[],
}

export type Test = (session: SessionState) => boolean
