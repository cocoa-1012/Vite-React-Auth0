import { createContext, useState, useContext, ReactNode } from 'react';
import overallTheme, { Theme, darkTheme } from './Theme';

type ThemeString = 'light' | 'dark';

interface ProviderProps {
  children: ReactNode
}

interface ThemeContextProps {
  theme: ThemeString;
  setTheme: React.Dispatch<React.SetStateAction<ThemeString>>;
  dataConnected: boolean,
  setDataConnected: React.Dispatch<React.SetStateAction<boolean>>,
  currentTheme: Theme
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  setTheme: () => {},
  dataConnected: false,
  setDataConnected: () => {},
  currentTheme: darkTheme
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeString>('dark');
  const [dataConnected, setDataConnected] = useState<boolean>(false);
  const currentTheme = overallTheme[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentTheme, dataConnected, setDataConnected}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
