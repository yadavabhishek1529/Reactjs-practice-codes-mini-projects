import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import NotFound from './Pages/notFound'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Courses from './Pages/Courses'
import CourseDetail from './Pages/CourseDetail'
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          {/* <Route path='/courses/:id' element={<CourseDetail />} /> */}
          <Route path='/courses/:CourseId' element={<CourseDetail />} />
          <Route path='/product' element={<Product />} >
            <Route path='men' element={<Men />} />
            <Route path='women' element={<Women />} />
            <Route path='kids' element={<Kids />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
          

        </Routes>
      <Footer />
    </div>
  )
}

export default App