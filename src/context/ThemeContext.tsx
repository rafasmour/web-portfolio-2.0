import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeContextProviderProps = {
  children: ReactNode;
}

type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider   = ({ children }: ThemeContextProviderProps) => {
  const systemDefaultTheme: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches ?? false;
  const [dark, setDark] = useState<boolean>(systemDefaultTheme);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  const toggleTheme: () => void = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};