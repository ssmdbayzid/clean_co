import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import DboardSidebar from '../../components/DboardSidebar'
import AddAdmin from './AddAdmin'
import AddServices from './AddServices'

const Dashboard = () => {


  return ( <div>
      <DboardSidebar>
        <h1 className='text-3xl font-bold'>Welcome to Deshboard</h1>
        <h1 className='text-3xl font-bold'>Welcome to Deshboard</h1>
        <h1 className='text-3xl font-bold'>Welcome to Deshboard</h1>
        {/* <Outlet /> */}
        <Routes>
          <Route path='/dashboard/add-service' element={< AddServices/>} />
          <Route path='/dashboard/add-admin' element={< AddAdmin/>} />
        </Routes>
      </DboardSidebar>
  </div>

  )
}

export default Dashboard