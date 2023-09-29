'use client';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { Theme, ThemeContextValue } from '@app/(root)/types';
import useLocalStorage from '../hooks/useLocalStorage';

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>('dark');
  const { addItemToLocalStorage, getItemFromLocalStorage } = useLocalStorage();
  const updateTheme = useCallback(
    (theme: Theme) => {
      const currentThemeMode = getItemFromLocalStorage('theme');
      if (
        theme === 'system' ||
        (!currentThemeMode &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
        addItemToLocalStorage('theme', 'dark');
      } else {
        setTheme(theme);
        addItemToLocalStorage('theme', theme);
        document.documentElement.classList.add(theme);
      }
    },
    [addItemToLocalStorage, getItemFromLocalStorage],
  );
  useEffect(() => {
    updateTheme(theme);
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [updateTheme, theme]);

  return (
    <ThemeContext.Provider
      value={{
        mode: theme,
        updateTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
