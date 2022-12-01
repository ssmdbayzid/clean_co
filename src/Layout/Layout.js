import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import routes from '../routes/routes'

const Layout = () => {
  return (
    <div>
        <Header/>
           <div>
            <routes />

           </div>

        <Footer/>

    </div>
  )
}

export default Layout