import React, { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

type UseThemeReturnType = { theme: Theme; toggleTheme: () => void };

const useTheme = (): UseThemeReturnType => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
};

export default useTheme;
