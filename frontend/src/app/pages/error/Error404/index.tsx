import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
} from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import pageNotFound from './assets/404.svg'

function Error404(): React.ReactElement {
  return (
    <Container>
      <Box component='center'>

        <Box
          component='img'
          src={pageNotFound}
          width={218}
          height={156}
          alt='Not Found'
          mb={6}
        />

        <Typography variant='h1' mb={4}>Oops! 404 - Page not found.</Typography>
        <Typography variant='h5' mb={6}>We can’t seem to find the page you are looking for.</Typography>
        <Divider />
        <Box mt={6}>
          <Button to='/' component={RouterLink}>Go Back Home</Button>
        </Box>
      </Box>
    </Container>
  )
}

export default React.memo(Error404)
