'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({ children, defaultTheme = 'light' }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    // Get theme from localStorage or use default
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored && ['dark', 'light'].includes(stored)) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      // Add transition class for smooth theme switching
      const root = window.document.documentElement;
      root.classList.add('theme-transition');

      // Update the document class
      root.classList.remove('light', 'dark');
      root.classList.add(theme);

      // Remove transition class after animation
      setTimeout(() => {
        root.classList.remove('theme-transition');
      }, 300);

      // Store in localStorage
      localStorage.setItem('theme', theme);
    };

    updateTheme();
  }, [theme]);

  const contextValue: ThemeContextType = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}