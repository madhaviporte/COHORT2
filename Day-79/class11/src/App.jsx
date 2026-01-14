import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import RandomAbout from './pages/RandomAbout'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='products/men' element={<Men/>}/>
        <Route path='products/women' element={<Women/>}/>

        <Route path='/about' element={<About/>}/>

      </Routes>
    </div>
  )
}

export default App
