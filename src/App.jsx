
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className='container_app'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <h1>meu blog</h1>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
