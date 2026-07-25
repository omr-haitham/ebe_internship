import { type ThemeContextType } from "../context/ThemeContext"
import "./styles/ThemeButton.css"

export function ThemeButton ({theme , toggleTheme}:ThemeContextType){

    return(
        <button onClick={toggleTheme} className={`button ${theme}`}> 
        {theme === 'light'? 'dark🌕' : 'light☀️'}
        </button>
    )

}