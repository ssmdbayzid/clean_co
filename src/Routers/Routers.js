import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, About, Contact, Services, LogIn, SignOut } from '../pages'

const Routers = () => {
  return (
    <Routes>      
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/log-in' element={<LogIn />}/>
      <Route path='/sign-up' element={<SignOut />}/>
    </Routes>
  )
}

export default Routers