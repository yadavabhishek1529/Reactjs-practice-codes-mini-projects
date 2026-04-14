import React from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'    //(npm i react-router-dom) : command
import Navbar from './components/Navbar'


const App = () => {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/Product' element = {<Product />} />
      </Routes>
    </div>
  )
}

export default App