import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";
import "../Style/AdvanceNotice.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useFormData } from "../../utils/FormDataContext";

export default function AdvanceNotice() {
  const [advanceNotice, setAdvanceNotice] = useState("");
  const { updateFormData } = useFormData();

  const handleRadioChange = (event) => {
    setAdvanceNotice(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = { advanceNotice };
    console.log(Data);
    updateFormData(Data);

    navigate("/multiBooking");

      };

  return (
    <>
      <Navbar />
      <div className="advanceNotice">
        <div className="advanceNoticeL">
          <span>
            <h1>Select your advance notice</h1>
            <p>
              How much time do you need to prepare for potential last-minute
              requests? For example, if you select 7 days, this boat will only
              be available for bookings that start at least 7 days later. We
              recommend selecting 6 hours or less to capture last-minute
              bookings.
            </p>
          </span>
        </div>
        <div className="advanceNoticeR">
          <div className="timeSlot">
            <input
              type="radio"
              name="time"
              value="1 hour"
              onChange={handleRadioChange}
              checked={advanceNotice === "1 hour"}
            ></input>
            <span>1 hour</span>
          </div>
          <div className="timeSlot">
            <input
              type="radio"
              name="time"
              value="3 hour"
              onChange={handleRadioChange}
              checked={advanceNotice === "3 hour"}
            ></input>
            <span>3 hour</span>
          </div>
          <div className="timeSlot">
            <input
              type="radio"
              name="time"
              value="6 hour"
              onChange={handleRadioChange}
              checked={advanceNotice === "6 hour"}
            ></input>
            <span>6 hour</span>
          </div>
          <div className="timeSlot">
            <input
              type="radio"
              name="time"
              value="12 hour"
              onChange={handleRadioChange}
              checked={advanceNotice === "12 hour"}
            ></input>
            <span>12 hour</span>
          </div>
          <div className="timeSlot">
            <input
              type="radio"
              name="time"
              value="1 day"
              onChange={handleRadioChange}
              checked={advanceNotice === "1 day"}
            ></input>
            <span>1 day</span>
          </div>
          <div className="timeSlot">
            <input
              type="radio"
              name="time"
              value="3 day"
              onChange={handleRadioChange}
              checked={advanceNotice === "3 day"}
            ></input>
            <span>3 day</span>
          </div>
          <div className="timeSlot">
            <input
              type="radio"
              name="time"
              value="7 day"
              onChange={handleRadioChange}
              checked={advanceNotice === "7 day"}
            ></input>
            <span>7 day</span>
          </div>
        </div>
      </div>
      <div className="listStepButton">
        <div className="wrapper">
          <NavLink to="/availability">
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
          {/* <NavLink to="/multiBooking"> */}
          <button onClick={handleSubmit}>Continue</button>
          {/* </NavLink> */}
        </div>
      </div>
    </>
  );
}
