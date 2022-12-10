import React from 'react'

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

  <div className="drawer-side  ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
    <div className='mt-28 w-64 md:w-80'>
    <h1 className='text-center text-2xl text-primary font-bold'>Dashboard</h1> 
    <ul className="menu   mt-5 p-2 text-base-content">
      
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
    </div>
  
  </div>
</div>
  )
}

export default Dashboard