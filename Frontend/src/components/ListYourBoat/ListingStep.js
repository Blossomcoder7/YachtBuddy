import React from "react";
import Navbar from "../LandingPage/Navbar";
import "../Style/ListingStep.css";
import { NavLink } from "react-router-dom";

export default function ListingStep() {
  return (
    <>
      <Navbar />
      <div className="listingStep">
        <div className="wrapper">
          <div className="listStepContent">
            <div className="listStepL">
              <h1>Let’s get started</h1>
              <p>You’ll be done in less than 15 minutes.</p>
            </div>
            <div className="listStepR">
              <h2>List your boat in 5 quick steps</h2>
              <div className="listcontent">
                <div className="listLine"></div>
                <ul>
                  <li>Boat details (4 boat photos minimum)</li>
                  <li>Insurance information if applicable</li>
                  <li>Availability</li>
                  <li>Operators and durations</li>
                  <li>Review and submit</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
        <div className="listStepButton">
        <div className="wrapper">

          <NavLink to="/listYourBoat"> <span>
              <svg
                fill="#0e7873 "
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1008 1008"
              >
                <path d="M658.6 875.4c-6.6 0-13.2-4-17.2-7.9L295.2 521.2c-4-4-7.9-11.9-7.9-17.2 0-6.6 4-13.2 7.9-17.2l346.3-346.3c4-4 10.6-7.9 17.2-7.9 5.3 0 13.2 4 17.2 7.9l37 37c4 4 7.9 10.6 7.9 17.2 0 5.3-4 13.2-7.9 17.2L420.8 504.1l292.1 292.1c4 4 7.9 11.9 7.9 17.2 0 6.6-4 13.2-7.9 17.2l-37 37c-4.1 3.8-12 7.8-17.3 7.8z"></path>
              </svg>
            </span></NavLink> 
           <NavLink to="/boatLocation"> <button>Continue</button></NavLink>
          </div>
          </div>
      </div>
    </>
  );
}
