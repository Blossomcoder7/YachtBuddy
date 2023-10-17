import React from "react";
import "../Style/AboutUs.css";
import aboutImg from "../../images/aboutImg.png";

export default function AboutUs() {
  return (
    <>
      <div className="aboutUs">
        <div className="wrapper aboutMain">
          <div className="aboutL">
            <img src={aboutImg} alt=""></img>
          </div>
          <div className="aboutR">
            <h2> About Us</h2>
            <p>
              As the global leader in peer-to-peer boat rentals, Yacht Buddy
              offers an easy, safe and accessible way to experience on-the-water
              adventure. With boat rentals in 600+ locations, finding a boat is
              easy and with the option to tap into the largest network of USCG
              licensed captains, boating experience is not required.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
