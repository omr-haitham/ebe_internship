import { useState, type ReactNode } from "react";
import { themeContext } from "../ThemeContext";
import { type Theme } from "../ThemeContext";

interface themeProviderProps
{
    children:ReactNode,

}

export function ThemeProvider ({children } : themeProviderProps)
{
    const [theme , setTheme] = useState<Theme>("light");
    const toggleTheme = ()=>{ setTheme(prev=> (prev === 'light'? 'dark' : 'light'))}
    return <themeContext.Provider value={{theme , toggleTheme}}> {children} </themeContext.Provider>
}