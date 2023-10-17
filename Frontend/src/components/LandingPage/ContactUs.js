import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Style/ContactUs.css";
import phone from "../../images/phone-volume.svg"

export default function ContactUs() {
  useEffect(()=>{
    AOS.init({duration:3000});
      });
  return (
    <>
    <div className='contact'>
    <div className='contactUs wrapper'>
        <div className='contactL' data-aos="fade-right">
            <span>Contact Us</span>
            <h1>Call Our Experts</h1>
            <p>Discuss your charter questions with a Vacation Planner today!</p>
        </div>
        <div className='contactR' data-aos="fade-left">
          <div className='contactR-c'>
            <img src={phone} alt=''></img>
            <span>+44(0) 2380 45 7733</span>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
