import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";
import "../Style/InsauranceType.css";
import "../Style/ListingStep.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../utils/FormDataContext";


export default function MultipleBooking() {
  const [multibooking, setSelectedOption] = useState("");
  const [duration, setSelectedOption1] = useState("");
  const { updateFormData } = useFormData();


  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleRadioChange2 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const navigate = useNavigate();


    const handleSubmit = async (e) => {
      e.preventDefault();
      let formData;
      if(multibooking === "yes")
      {
       formData = {multibooking, duration};
  updateFormData(formData);

      }
      else{
       formData = {multibooking};
  updateFormData(formData);


      }
      navigate("/operatorBooking");
    };

  return (
    <>
      <Navbar />
      <div className="insauranceType">
        <div className="insauranceTypeL">
          <h1>Do you want to allow multiple bookings in one day?</h1>
          <p>
            Earn more from your boat by allowing multiple bookings on the same
            day. You have control over the start times and durations you offer.
          </p>
        </div>
        <div className="insauranceTypeR">
          <label className="insauraanceRow">
            <div className="ins-main--wrap ins-main--wrap1">
              <input
                type="radio"
                name="multipleBooking"
                value="yes"
                onChange={handleRadioChange}
                checked={multibooking === "yes"}
              ></input>
              <span>
                <h4>Yes </h4>
              </span>
              <label style={{ width: "150px", padding: "8px" }}>
                MOST COMMON
              </label>
            </div>
            <div
              className={`${
                multibooking === "yes"
                  ? "reCreational"
                  : "reCreational1"
              }`}
            >
              <span>How much time do you need in between bookings?</span>
              <p>
                Example: if your boat returns at 3:00 PM and you can have it
                ready for your next rental by 3:30 PM, select 30 minutes.
              </p>
              <div className="needTime">
                <div className="timeDuration">
                  <input
                    type="radio"
                    name="needTime"
                    value="30 min"
                    onChange={handleRadioChange2}
                    checked={duration === "30 min"}
                  ></input>
                  <span>30 min</span>
                </div>
                <div className="timeDuration">
                  <input
                    type="radio"
                    name="needTime"
                    value="1 hour"
                    onChange={handleRadioChange2}
                    checked={duration === "1 hour"}
                  ></input>
                  <span>1 hour</span>
                </div>
                <div className="timeDuration">
                  <input
                    type="radio"
                    name="needTime"
                    value="2 hour"
                    onChange={handleRadioChange2}
                    checked={duration === "2 hour"}
                  ></input>
                  <span>2 hour</span>
                </div>
                <div className="timeDuration">
                  <input
                    type="radio"
                    name="needTime"
                    value="3 hour"
                    onChange={handleRadioChange2}
                    checked={duration === "3 hour"}
                  ></input>
                  <span>3 hour</span>
                </div>
              </div>
            </div>
          </label>

          <label className="insauraanceRow">
            <input
              type="radio"
              name="multibooking"
              value="no"
              onChange={handleRadioChange}
              checked={multibooking === "no"}
            ></input>
            <span>
              <h4>No</h4>
              <p>This boat can only be booked once a day</p>
            </span>
            {/* <label style={{ opacity: "0" }}>Most common</label> */}
          </label>
        </div>
        <div className="listStepButton">
          <div className="wrapper">
            <NavLink to="/advanceNotice">
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
            {/* <NavLink to="/operatorBooking"> */}
              {" "}
              <button onClick={handleSubmit}>Continue</button>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
}
