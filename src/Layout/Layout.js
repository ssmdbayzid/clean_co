import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Routers, { publicRoute } from '../Routers/Routers'
// import Routers from '../Routers/Routers'

const Layout = () => {
  return (
    <div>
        <Header>
          <Routes>
            {
              publicRoute.map(({path, Component}, index)=><Route key={index} path={path} element={<Component />} />
              )}  
          </Routes>        
        </Header>           
        <Footer/>

    </div>
  )
}

export default Layout