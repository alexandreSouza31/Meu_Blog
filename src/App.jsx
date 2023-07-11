//context
import { AuthProvider } from './components/context/AuthContext'
import { useAuthentication } from './hooks/useAuthentication'

//react
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//pages and layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Login from './components/pages/Login/Login'
import Register from './components/pages/Register/Register'
import Terms from './components/pages/Terms/Terms'

//styles
import './App.css'
import { onAuthStateChanged } from 'firebase/auth'

const App = () => {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {//verifica se o usuário está logado quando é realizado cadastro, login, etc.
      setUser(user)
    })
  },[auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <AuthProvider value={user}>{/*consigo acessar o usuário em tds os locais */}
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
