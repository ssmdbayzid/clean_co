import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Routers from '../Routers/Routers'
// import Routers from '../Routers/Routers'

const Layout = () => {
  return (
    <div>
        <Header>
          <Routers/>
        </Header>

           
        <Footer/>

    </div>
  )
}

export default Layout