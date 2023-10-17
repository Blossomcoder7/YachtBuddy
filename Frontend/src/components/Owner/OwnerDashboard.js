import React from 'react'
import Navbar from './Navbar'
import Sidebar from "./OwnSidebar"
import { Outlet } from 'react-router-dom'
import "./Style/Dashboard.css"

export default function OwnerDashboard() {
  return (
   <>
     <div className="admin-dashboard">
        <Sidebar/>
        <div className='content_wrapper'>
          <Navbar />
          <div className="content">
            <Outlet/>
          </div>
        </div>
      </div>
   </>
  )
}
