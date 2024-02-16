import React from 'react'
import {
  Alert as MuiAlert,
  Snackbar,
} from '@mui/material'

import { AlertProps } from './types'

function Alert({
  openError,
  onClose,
  description,
  type = 'error',
}: AlertProps): React.ReactElement {
  return (
    <Snackbar
      open={openError}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <MuiAlert onClose={onClose} severity={type} sx={{ width: '100%' }} variant='filled'>
        {description}
      </MuiAlert>
    </Snackbar>
  )
}

export default Alert
