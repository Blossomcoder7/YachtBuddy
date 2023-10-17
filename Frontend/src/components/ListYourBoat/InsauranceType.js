import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";
import "../Style/InsauranceType.css";
import "../Style/ListingStep.css";
import { NavLink } from "react-router-dom";

export default function InsauranceType() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <Navbar />
      <div className="insauranceType">
        <div className="insauranceTypeL">
          <h1>What types of insurance are you currently covered by?</h1>
          <p>
            Approval for your boat is contingent on having valid insurance. This
            insurance can either be recreational boat coverage or commercial
            charter operator insurance.
          </p>
        </div>
        <div className="insauranceTypeR">
          {/* <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}> */}
            <label className="insauraanceRow">
                <div class="ins-main--wrap">
                <input
                type="radio"
                name="insurance"
                value="recreational"
                onChange={handleRadioChange}
                checked={selectedOption === "recreational"}
              ></input>
              <span>
                <h4>I have recreational boat insurance </h4>
                <p>Select this if you own a personal boat.</p>
              </span>
              <label>Most common</label>
              </div>
              <div className={`${selectedOption === "recreational"?"reCreational":"reCreational1"}`}>
              <p>
                YACHTBUDDY and GEICO BoatUS teamed up to create an exclusive
                insurance plan required for owners listing their personal boats
                that covers the duration of the rental. This policy is added on
                top of your recreational policy for a fee, allowing you to rent
                your boat for peer-to-peer use.
                
              </p>
              <span>
                    <img src="https://www.boatsetter.com/images/geico-logo.svg" alt=""></img>
                    <img src="https://www.boatsetter.com/images/boatus-logo.svg" alt=""></img>
                </span>
            </div>
            </label>
            
          {/* </div> */}

          <label className="insauraanceRow">
            <input
              type="radio"
              name="insurance"
              value="commercial"
              onChange={handleRadioChange}
              checked={selectedOption === "commercial"}
            ></input>
            <span>
              <h4>I have commercial charter insurance </h4>
              <p>Select this if you run a boat rental or charter business.</p>
            </span>
            {/* <label style={{ opacity: "0" }}>Most common</label> */}
          </label>
        </div>
        <div className="listStepButton">
          <div className="wrapper">
          <NavLink to="/listingStep">  <span>
              <svg
                fill="#0e7873 "
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1008 1008"
              >
                <path d="M658.6 875.4c-6.6 0-13.2-4-17.2-7.9L295.2 521.2c-4-4-7.9-11.9-7.9-17.2 0-6.6 4-13.2 7.9-17.2l346.3-346.3c4-4 10.6-7.9 17.2-7.9 5.3 0 13.2 4 17.2 7.9l37 37c4 4 7.9 10.6 7.9 17.2 0 5.3-4 13.2-7.9 17.2L420.8 504.1l292.1 292.1c4 4 7.9 11.9 7.9 17.2 0 6.6-4 13.2-7.9 17.2l-37 37c-4.1 3.8-12 7.8-17.3 7.8z"></path>
              </svg>
            </span></NavLink>
          <NavLink to="/boatLocation">  <button>Continue</button></NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
