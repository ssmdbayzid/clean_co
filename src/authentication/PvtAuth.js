import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PvtAuth = () => {
  const user = false;
  const location = useLocation()

  if(!user) {
    return <Navigate to="/log-in" state={{from:location}} replace />
  }

  return <Outlet />
}

export default PvtAuth