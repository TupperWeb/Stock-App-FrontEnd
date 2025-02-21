import './App.css'

import { Link, Route, Routes } from'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Login } from './components/Login'
import { Package } from 'lucide-react'
import { AdminDashboard } from './components/AdminDashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<Login />} />
        <Route path='/admin' element={<AdminDashboard/>} />
      </Routes>
    </>
  )
}

export default App
