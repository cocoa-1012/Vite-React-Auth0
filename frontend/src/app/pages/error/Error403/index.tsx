import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
} from '@mui/material'
import React from 'react'

import useNavigate from '../../../hooks/useNavigate'

import DocumentWrapper from '../../../components/DocumentWrapper'

import accessDenied from './assets/403.svg'

function Error403(): React.ReactElement {
  const navigate = useNavigate()

  return (
    <DocumentWrapper title='Board Game Night | Access Denied'>
      <Container>
        <Box component='center'>

          <Box
            component='img'
            src={accessDenied}
            width={218}
            height={156}
            alt='Not Found'
            mb={6}
          />

          <Typography variant='h1' mb={4}>Oops! 403 - access denied.</Typography>
          <Typography variant='h5' mb={6}>Sorry, you do not have permission to access this page.</Typography>
          <Divider />
          <Box mt={6}>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </Box>
        </Box>
      </Container>
    </DocumentWrapper>
  )
}

export default React.memo(Error403)
