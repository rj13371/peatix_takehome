import React, { useState, FC, ReactNode } from 'react';
import { IThemeContext } from '../interfaces/ITheme';

interface ThemeProviderProps {
  children?: ReactNode;
}

const defaultState = {
  dark: false,
};

export const ThemeContext = React.createContext<IThemeContext>(defaultState);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
