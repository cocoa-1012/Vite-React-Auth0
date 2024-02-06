import { Typography } from '@mui/material';
import { useTheme } from '../../themes/ThemeProvider';

const StyledTitle = ( props:any ) => {
  const { textAlign } = props;
  const { currentTheme } = useTheme();

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
      {props.children}
    </Typography>
  );
};

export default StyledTitle;