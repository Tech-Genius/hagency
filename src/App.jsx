import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'

function App() {

  return (
    <>
      <Header />
      <Routes>

<Route path='/' element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='portfolio' element={<Portfolio/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
