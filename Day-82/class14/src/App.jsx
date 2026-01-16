import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Section from './components/Section'

const App = () => {
  return (
    <div>
      <Navbar />
      <Section>
        <h1>Halku</h1>
        <h2>Batman re</h2>
      </Section>
      <Footer/>
    </div>
  )
}

export default App
