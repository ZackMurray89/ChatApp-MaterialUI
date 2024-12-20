import { createContext } from 'react';
import { ThemeContextTypes } from './ThemeContextProvider';

export const ThemeContext = createContext<ThemeContextTypes>({
  mode: 'light',
  handleSetTheme: (newMode) => {
    return newMode;
  },
});
