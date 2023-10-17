import React from 'react'
import Navbar from '../LandingPage/Navbar'
import Footer from '../LandingPage/Footer'
import "../Style/Support.css"
import search from "../../images/search 1.svg"
import { NavLink } from 'react-router-dom'

export default function Support() {
  return (
    <>
    <Navbar/>
   <div className='headSupport'>
    <div className='wrapper'>
      <h1>Boatsetter Support</h1>
      <p>Everything you need to know about Boatsetter</p>
      <span>
        <img src={search} alt=''></img>
      <input type='search' placeholder='Search Help Artical'></input>
      </span>
    </div>
   </div>
   <div className='lowerSupport'>
    <div className='wrapper'>
      <h1>Browse by Category</h1>
      <p>Explore our knowledge base and see everything we have to offer</p>
      <div className='browseCategiory'>
   <NavLink to="/renterSupport"><div className='categoryCont'>Renters</div></NavLink>
   <NavLink to="/renterSupport"><div className='categoryCont'>Owners</div></NavLink>
   <NavLink to="/renterSupport"> <div className='categoryCont'>Captains</div></NavLink>
   <NavLink to="/renterSupport">  <div className='categoryCont'>About Boatsetter</div></NavLink>
      </div>
      <div className='helpInfo'>
        <h1>Still have questions?</h1>
        <p>We are here to help!</p>
        <button>Contact Us</button>
      </div>
    </div>
   </div>
   
    <Footer/>
    </>
  )
}
