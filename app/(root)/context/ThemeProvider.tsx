'use client';
import React, { createContext, useCallback, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeContextValue {
  mode: Theme;
  updateTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>('dark');
  const updateTheme = useCallback((theme: Theme) => {
    setTheme(theme);
    document.documentElement.classList.add(theme);
  }, []);
  useEffect(() => {
    updateTheme('dark');
  }, [updateTheme]);

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
