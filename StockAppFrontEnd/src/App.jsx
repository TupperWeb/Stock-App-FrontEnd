import './App.css'

import { Link, Route, Routes } from'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Login } from './components/Login'
import { Package } from 'lucide-react'

function App() {
  return (
    <>
      <header className='w-full bg-slate-600 text-white p-4'>
        <nav className='flex justify-between gap-4 font-bold'>
        <Link to='/'><Package size='32' /></Link>
          <ul className='flex justify-center space-x-4'>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<h1 className='text-center pt-4'>Home</h1>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
