import React from 'react'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Course from './components/Course'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return (
    <div className='w-full dark:bg-gray-900 dark:text-white' >
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/course' element={<Course/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer></Footer>
    </div>
  )
}

export default App
