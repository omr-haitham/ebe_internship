import { createContext, useContext } from "react";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const themeContext = createContext<ThemeContextType | undefined>(undefined);

export type Theme = "light" | "dark";
export const useTheme = (): ThemeContextType => {
  const context = useContext(themeContext);
    if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
export {themeContext};