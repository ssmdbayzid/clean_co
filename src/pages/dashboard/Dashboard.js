import React from 'react'
import { Outlet } from 'react-router-dom'
import DboardSidebar from '../../components/DboardSidebar'


const Dashboard = () => {


  return ( <div>
      <DboardSidebar>
        <h1 className='text-3xl font-bold'>Welcome to Deshboard</h1>
        <h1 className='text-3xl font-bold'>Welcome to Deshboard</h1>
        <h1 className='text-3xl font-bold'>Welcome to Deshboard</h1>
        <Outlet />
        
      </DboardSidebar>
  </div>

  )
}

export default Dashboard