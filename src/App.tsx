

import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <div>
        <Link to="/home"> home </Link>
        <Link to="/about"> about </Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default App

