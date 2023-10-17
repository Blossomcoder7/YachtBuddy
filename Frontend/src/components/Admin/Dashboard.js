import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import "./Style/Dashboard.css"

export default function Dashboard() {
  return (
   <>
     <div className="admin-dashboard">
        <Sidebar />
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
