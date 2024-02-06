import { Typography } from '@mui/material';
import { useTheme } from '../../themes/ThemeProvider';

const StyledText = (props:any) => {
  const { children, textAlign, secondaryText } = props;
  const { currentTheme } = useTheme();

  return (
    <Typography 
      variant="body1" 
      style={{ 
        color: secondaryText ? currentTheme.onSecondary: currentTheme.onSurface,
        flexGrow: 1,
        textAlign: textAlign,
        // fontFamily: "sans-serif"
      }}
    >
      {children}
    </Typography>
  );
};

export default StyledText;