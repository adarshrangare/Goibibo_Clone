import React from 'react'
import { NavLink } from 'react-router-dom'

const MyTripNav = () => {
  return (
    <NavLink to={"/mysupport/trips"} className='flex items-center' >
        <div className="logo-trip logo-nav-item w-9 h-9"></div>
        <div className="text mr-5">
            <div className="font-medium text-xs text-blue-600 ">
                My Trip
            </div>
            <div className="font-medium text-sm">
                Manage Booking
            </div>
        </div>
    </NavLink>
  )
}

export default MyTripNav