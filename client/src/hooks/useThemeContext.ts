import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
