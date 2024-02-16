import React, {
  createContext,
  useContext,
  useState,
} from 'react'

import { AlertProps } from '../../components/Alert/types'

interface AlertContextType {
  alert: undefined | Partial<AlertProps>,
  setAlert: React.Dispatch<React.SetStateAction<undefined | Partial<AlertProps>>>,
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export const useAlert = () => {
  const context = useContext(AlertContext)
  if (!context) {
    throw new Error('useAlert must be used within a AlertProvider')
  }

  return context
}

interface AlertProviderProps {
  children: React.ReactNode,
}

// eslint-disable-next-line react/function-component-definition
const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [
    alert,
    setAlert,
  ] = useState<undefined | Partial<AlertProps>>(undefined)

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AlertContext.Provider value={{
      alert,
      setAlert,
    }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export default AlertProvider
