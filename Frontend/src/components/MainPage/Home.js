import React from 'react'
import Navbar from '../LandingPage/Navbar'
import HeroSection from '../LandingPage/HeroSection'
import Crew from '../LandingPage/Crew'
import PopularBoats from '../LandingPage/PopularBoats'
import ListYourBoat from '../LandingPage/ListYourBoat'
import ContactUs from '../LandingPage/ContactUs'
import Footer from '../LandingPage/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Crew/>
    <PopularBoats/>
    <ListYourBoat/>
    <ContactUs/>
    <Footer/>
    </>
  )
}
