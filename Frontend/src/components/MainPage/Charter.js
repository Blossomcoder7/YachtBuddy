import React from 'react'
import Navbar from '../LandingPage/Navbar'
import Footer from '../LandingPage/Footer'
import ContactUs from '../LandingPage/ContactUs'
import CharterHerosection from '../SubComponents/CharterHerosection';
import "../Style/Charter.css";
import YachtRental from '../SubComponents/YachtRental';
import AboutUs from '../SubComponents/AboutUs';
import Features from '../SubComponents/Features';
import OurGallary from '../SubComponents/OurGallary';
import GoogleMap from '../SubComponents/GoogleMap';

export default function Charter() {
  return (
    <>
    <div className='charter'>
    <Navbar/>
    <CharterHerosection/>
    <YachtRental/>
    <AboutUs/>
    <Features/>
    <OurGallary/>
    <GoogleMap/>
    <div style={{ marginTop: "-12px" }}>
  <ContactUs />
</div>
    <Footer/>
    </div>
    </>
  )
}
