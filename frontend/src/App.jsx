import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Course from './components/Course'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'
import axios from 'axios'
import { Toaster } from 'react-hot-toast';
function App() {
  const [book,Setbook]=useState([])
  useEffect(()=>{
    const getBooks=async ()=>{
      try {
        const res=await axios.get("http://localhost:4001/book")
        Setbook(res.data);
      } catch (error) {
        console.log("ERROR",error)
      }
    }
    getBooks()
  },[])
  return (
    <div className='w-full dark:bg-gray-900 dark:text-white' >
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home book={book}/>} />
          <Route path='/course' element={<Course book={book}/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer></Footer>
        <Toaster></Toaster>
    </div>
  )
}

export default App
