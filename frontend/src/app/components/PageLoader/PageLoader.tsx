import CircularProgress from '@mui/material/CircularProgress'
import { useTheme } from "../../themes/ThemeProvider"

const PageLoader: React.FC = () => {
  const { currentTheme } = useTheme()
  const style = {
    color: currentTheme.primary
  }
  
  return (
    <div className='max-w-[500px] mx-auto flex flex-col gap-4 items-center h-[calc(100vh-13rem)] place-content-center'>
      <CircularProgress style={style} disableShrink />
    </div>
  )
}

export default PageLoader