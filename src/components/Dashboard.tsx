
import type { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";
import { ThemeButton } from "./ThemeButton";
import "./styles/Dashboard.css"

interface DashboardPropsTypes{
    children : ReactNode
}
export function Dashboard({children}:DashboardPropsTypes){
    
    const {theme, toggleTheme} = useTheme();
    
    return (
        <div className={`Dashboard ${theme}`}>
            <div className="themer">
                <p>Current theme= {theme}</p>
                <ThemeButton theme={theme} toggleTheme={toggleTheme}/>    
            </div>
            {children}
        </div>
    )
}