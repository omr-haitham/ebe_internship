import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import { TaskBoard } from './components/TaskBoard.tsx'
import { ThemeProvider } from './context/providers/ThemeContextProvider'
import { Dashboard } from './components/Dashboard'
import { UserCard } from './components/UserCard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Dashboard>
        <UserCard name='jane doe' occupation='profesional sleeper'/>
        <TaskBoard/>
      </Dashboard>  
    </ThemeProvider>
  </StrictMode>,
)
