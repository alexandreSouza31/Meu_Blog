//context
import { AuthProvider } from './components/context/AuthContext'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Login from './components/pages/Login/Login'
import Register from './components/pages/Register/Register'
import Terms from './components/pages/Terms/Terms'

//styles
import './App.css'

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='container_app'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/terms' element={<Terms />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
