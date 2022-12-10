import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAdmin from '../hooks/useAdmin'

const AdminRoute = () => {
  const [admin] = useAdmin()

  if(!admin) {
    return <Navigate to="/home" />
  }

  return <Outlet />
}

export default AdminRoute