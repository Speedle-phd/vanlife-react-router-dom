import React from 'react'

import HostNav from '../components/HostNav'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useGlobalAuth } from '../context/AuthContextProvider'

const HostLayout = () => {
   const {token} = useGlobalAuth()
   const {pathname: path} = useLocation()
   return (
      <>
      {/* <HostNav/> */}
         {token ? <HostNav /> : <Navigate to='/login' state={{message: "You must log in first", path}}/>}
      </>
   )
}

export default HostLayout
