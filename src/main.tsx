import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UserCard } from './components/UserCard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserCard name='John Doe' occupation='software engineer' />
  </StrictMode>,
)
