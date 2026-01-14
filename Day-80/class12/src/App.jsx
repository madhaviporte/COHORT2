import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />}/>
        <Route path='/courses' element = {<Courses/>}/>
      </Routes>
    </div>
  )
}

export default App
