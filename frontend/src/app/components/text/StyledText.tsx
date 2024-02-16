import { Typography } from '@mui/material'
import { useTheme } from '../../themes/ThemeProvider'

import { Props } from './types'

const StyledText = ({ 
  children, 
  textAlign, 
  secondaryText
}:Props) => {
  const { currentTheme } = useTheme()

  return (
    <Typography 
      variant="body1" 
      style={{ 
        color: secondaryText ? currentTheme.onSecondary: currentTheme.onSurface,
        flexGrow: 1,
        textAlign: textAlign,
      }}
    >
      {children}
    </Typography>
  )
};

export default StyledText;