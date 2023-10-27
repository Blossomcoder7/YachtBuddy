import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";
import "../Style/InsauranceType.css";
import "../Style/ListingStep.css";
import { NavLink } from "react-router-dom";
// import axios from "axi
import { useNavigate } from "react-router-dom";
// import { localhost } from "../../Route";
import { useFormData } from "../../utils/FormDataContext";

export default function Availability() {
  const [availability, setSelectedOption] = useState("");
  const { updateFormData } = useFormData();

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = { availability };
    console.log(availability)
    updateFormData(Data);
    if(availability === "Default availability"){
      navigate("/advanceNotice");
    }else{
      navigate("/startTime");
    }
  };

  return (
    <>
      <Navbar />
      <div className="insauranceType">
        <div className="insauranceTypeL">
          <h1>Select the available days and start times</h1>
          <p>
            Approval for your boat is contingent on having valid insurance. This
            insurance can either be recreational boat coverage or commercial
            charter operator insurance.
          </p>
        </div>
        <div className="insauranceTypeR">
          <label className="insauraanceRow">
            <div className="ins-main--wrap ins-main--wrap1">
              <input
                type="radio"
                name="insurance"
                value="Default availability"
                onChange={handleRadioChange}
                checked={availability === "Default availability"}
              ></input>
              <span>
                <h4>Default availability </h4>
              </span>
            </div>
            <div
              className={`${
                availability === "Default availability"
                  ? "reCreational"
                  : "reCreational1"
              }`}
            >
              <p>Your boat will be available</p>
              <span>Monday to Sunday, from 8:00 AM to 6:00 PM</span>
            </div>
          </label>

          <label className="insauraanceRow">
            <input
              type="radio"
              name="insurance"
              value="Custom availability"
              onChange={handleRadioChange}
              checked={availability === "Custom availability"}
            ></input>
            <span>
              <h4>Custom availability</h4>
              <p>Customize start times for each day of the week.</p>
            </span>
            {/* <label style={{ opacity: "0" }}>Most common</label> */}
          </label>
        </div>
        <div className="listStepButton">
          <div className="wrapper">
            <NavLink to="/boatSpecification">
              {" "}
              <span>
                <svg
                  fill="#0e7873 "
                  height="22"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1008 1008"
                >
                  <path d="M658.6 875.4c-6.6 0-13.2-4-17.2-7.9L295.2 521.2c-4-4-7.9-11.9-7.9-17.2 0-6.6 4-13.2 7.9-17.2l346.3-346.3c4-4 10.6-7.9 17.2-7.9 5.3 0 13.2 4 17.2 7.9l37 37c4 4 7.9 10.6 7.9 17.2 0 5.3-4 13.2-7.9 17.2L420.8 504.1l292.1 292.1c4 4 7.9 11.9 7.9 17.2 0 6.6-4 13.2-7.9 17.2l-37 37c-4.1 3.8-12 7.8-17.3 7.8z"></path>
                </svg>
              </span>
            </NavLink>
            {/* <NavLink to="/advanceNotice"> */}{" "}
            <button onClick={handleSubmit}>Continue</button>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
}
