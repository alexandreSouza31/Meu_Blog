
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'

import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='container_app'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <h1>meu blog</h1>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
