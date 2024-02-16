import { Provider as ReduxProvider } from 'react-redux'

import store from './state'

import { useTheme } from './themes/ThemeProvider'

import Header from './components/Header'

import { AuthContextProvider } from './contexts/AuthContext'
import AlertProvider from "./contexts/AlertContext"

import Main from './main'

const Root = () => {
  const { currentTheme } = useTheme()

  return (
    <ReduxProvider store={store}>
      <AlertProvider>
        <AuthContextProvider>
          <div
            style={{ backgroundColor: currentTheme.background }}
            className="flex flex-col p-6 min-h-screen"
          >
            <Header />
            <Main />
          </div>
        </AuthContextProvider>
      </AlertProvider>
    </ReduxProvider>
  )
}

export default Root;