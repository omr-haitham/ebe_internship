import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UserCard } from './components/UserCard'
import { ThemeProvider } from './context/providers/ThemeContextProvider'
import { Dashboard } from './components/Dashboard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Dashboard>
        <UserCard name='John Doe' occupation='software engineer' />
      </Dashboard>
    </ThemeProvider>
  </StrictMode>,
)
