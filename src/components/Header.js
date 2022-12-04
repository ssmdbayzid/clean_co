import React from 'react'
import { NavLink } from 'react-router-dom'
import { themeChange } from 'theme-change'
const Header = ({children}) => {

  return (
    <div className="drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    
    <div className="w-full navbar bg-base-100">
      <div className="flex-1 px-2 mx-2 text-2xl font-bold text-primary">Clean Co.</div>
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-none hidden lg:block">
        
        <ul className="menu menu-horizontal text-md gap-2">          
          <li><NavLink to="/home" className="rounded-lg">Home</NavLink></li>
          <li><NavLink to="/services" className="rounded-lg">Services</NavLink></li>
          <li><NavLink to="/about" className="rounded-lg">About</NavLink></li>
          <li><NavLink to="/contact" className="rounded-lg">Contact</NavLink></li>
          <li><NavLink to="/log-in" className="rounded-lg">Log In</NavLink></li>
          <li><NavLink to="/sign-up" className="rounded-lg">Sign Up</NavLink></li>
          <li><button>check</button></li>
          <li><button  onClick={()=>themeChange(false)} data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">Theme</button></li>
          <li className='dropdown dropdown-hover dropdown-end'>            
        <label tabIndex={0} className="btn m-1  btn-primary btn-outline">Hover</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ">
          <li><a href='#'>Item 1</a></li>
          <li><a href='#'>Item 2</a></li>
        </ul>

          </li>
        </ul>
      </div>
    </div>
    
    {children}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100">
      
    <li><NavLink to="/services">Services</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    <li><NavLink to="/log-in">Log In</NavLink></li>
    <li><NavLink to="/sign-up">Sign Up</NavLink></li>
    </ul>
    
  </div>
</div>
  )
}

export default Header