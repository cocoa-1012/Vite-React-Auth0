import { Typography } from '@mui/material'
import { useTheme } from '../../themes/ThemeProvider'

import { Props } from './types'

const StyledTitle = ( { children, textAlign, }:Props ) => {
  const { currentTheme } = useTheme()

  return (
    <Typography 
      variant="h5" 
      sx={{
        color: currentTheme.onSurface,
        flexGrow: 1,
        textAlign: textAlign,
        fontFamily: "sans-serif"
      }}
    >
      {children}
    </Typography>
  )
}

export default StyledTitle;