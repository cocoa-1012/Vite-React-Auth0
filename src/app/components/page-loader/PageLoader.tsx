import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from "../../themes/ThemeProvider";

const PageLoader: React.FC = () => {
  const { currentTheme } = useTheme();
  const style = {
    color: currentTheme.primary
  }
  return (
      <CircularProgress style={style} disableShrink />
  );
};

export default PageLoader;