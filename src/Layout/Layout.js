import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminRoute from '../authentication/AdminRoute'
import PvtAuth from '../authentication/PvtAuth'
// import Footer from '../components/Footer'
import Header from '../components/Header'
import AddAdmin from '../pages/dashboard/AddAdmin'
import AddServices from '../pages/dashboard/AddServices'
import Dashboard from '../pages/dashboard/Dashboard'
import { pvtRoute } from '../Routers/privateRoute'
import { publicRoute } from '../Routers/publicRoute'


// import Routers from '../Routers/Routers'

const Layout = () => {
  return (
    <div>
        <Header>
          <Routes>
            {
              publicRoute.map(({path, Component}, index)=><Route key={index} path={path} element={<Component />} />
              )
            }  
            { pvtRoute.map(({path, Component}, index)=>
            <Route element={<PvtAuth />}>
               <Route key={index} path={path} element={<Component />} />
            </Route>)}
            <Route element={<AdminRoute/>}>
              <Route path='/dashboard' element={<Dashboard />}>
                <Route path='add-admin' index element={<AddAdmin />}/>
                <Route path='add-service' element={<AddServices />}/>
              </Route>
              </Route>          
          </Routes>  
        </Header>           
        {/* <Footer/> */}

    </div>
  )
}

export default Layout