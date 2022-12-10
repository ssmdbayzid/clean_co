import React from 'react'
import { NavLink } from 'react-router-dom'

const DboardSidebar = ({children}) => {
  return (
    <div className="drawer drawer-mobile bg-accent">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

  <div className="drawer-content flex flex-col items-center justify-center">
    {children}
  </div> 

  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
    <div className='pt-28 w-64 md:w-80 px-4 bg-base-300/20'>
    <h1 className='text-center text-2xl text-primary font-bold'>Dashboard</h1> 
    <ul className="menu   mt-5 p-2 text-base-content">
      
    <li className='mt-3'><NavLink to="/dashboard/add-service">Add Services</NavLink></li>
    <li className='mt-3'><NavLink to="/dashboard/add-admin">Add Admin</NavLink></li>
    
    </ul>
    </div>
  
  </div>
</div>
  )
}

export default DboardSidebar