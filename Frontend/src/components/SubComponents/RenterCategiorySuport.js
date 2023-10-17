import React from 'react'
import "../Style/Support.css"
import Navbar from '../LandingPage/Navbar'
import Footer from '../LandingPage/Footer'
import search from "../../images/search 1.svg"
import { NavLink } from 'react-router-dom'



export default function RenterCategiorySuport() {
  return (
   <>
   <Navbar/>
   <div className='renterCategiry'>
    <div className='wrapper'>
        <div className='headRenter'>
            <h1>Renters</h1>
            <span>
        <img src={search} alt=''></img>
      <input type='search' placeholder='Search Help Artical'></input>
      </span>
        </div>
        <h2>Categories</h2>
        <div className='browseCategiory browseCategiory1 '>
   <NavLink to=""><div className='categoryCont'>Getting Started</div></NavLink>
   <NavLink to=""><div className='categoryCont'>Booking a Boat</div></NavLink>
   <NavLink to=""> <div className='categoryCont'>Paying for your booking</div></NavLink>
   <NavLink to="">  <div className='categoryCont'>Making your booking</div></NavLink>
   <NavLink to="">  <div className='categoryCont'>Day of the booking</div></NavLink>
      </div>
    </div>
   </div>
   <Footer/>
   </>
  )
}
