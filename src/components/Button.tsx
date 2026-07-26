import type { ReactNode } from "react"
import './styles/Button.css'

interface ButtonProps{
    children? : ReactNode,
    label : string,
    onClick : ()=>void,
    primary?: 'primary' | undefined,
    danger?:'danger' | undefined
}
export function Button ({label, onClick , danger , primary, children }:ButtonProps){
    return (
        <button onClick={onClick} className={`button ${primary!==undefined ? ' primary':''} ${danger!==undefined ? ' danger':''}`}>
            {label} 
            {children}
        </button>
    )
}