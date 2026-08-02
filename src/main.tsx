import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'

import { ThemeProvider } from './context/providers/ThemeContextProvider'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { TasksProvider } from './context/providers/TasksProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <TasksProvider>
        <RouterProvider router={router}/>
      </TasksProvider>
    </ThemeProvider> 
  </StrictMode>,
)
