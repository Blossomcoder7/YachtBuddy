import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";
import "../Style/CancelationPolicy.css";
import { NavLink } from "react-router-dom";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../utils/FormDataContext";


export default function CancelationPolicy() {
    const [policy, setPolicy] = useState("");
  const { updateFormData } = useFormData();


  const handleRadioChange = (event) => {
    setPolicy(event.target.value);
    
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!policy) {
      alert("Please select a policy ");
      return;
  }

    const formData = {policy};
  updateFormData(formData);
  navigate("/alowedOnBoat");

  };
  return (
    <>
      <Navbar />
      <>
      <div className="cancelPolicyMain">
        <div className="cancelPolicy">
          <div className="cancelPolicyL">
            <h1>Cancellation policy</h1>
            <p>
              Select how you want to handle trip cancellations. Learn more about
              our cancellation options.
            </p>
          </div>
          <div className="cancelPolicyR">
            <div className="cancelPolicy1">
              <input type="radio"
                name="policy"
                value="flexible"
                onChange={handleRadioChange}
                checked={policy === "flexible"}></input>
              <span>
                <h4>Flexible</h4>
                {/* <label>RECOMMENDED</label> */}
              </span>
              <div className="typicalTerms">
                <span>
                  <h3>Description</h3>
                  <p>
                    The Flexible Cancellation Policy is designed to offer
                    maximum flexibility to guests and encourages last-minute
                    bookings. Under this policy, guests can receive a 100%
                    payout for cancellations made within 24 hours of the booking
                    start time. This policy is ideal for owners who want to
                    attract spontaneous travelers and accommodate short-notice
                    changes in plans.
                  </p>
                </span>
                <span>
                  <h3>Typical Terms:</h3>
                  <ul>
                    <li>
                    100% payout if canceled within 24 hours of the booking start time.
                    </li>
                    <li>
                    No refund if canceled more than 24 hours before the booking start time.
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="cancelPolicy1">
              <input type="radio"
                name="policy"
                value="moderate"
                onChange={handleRadioChange}
                checked={policy === "moderate"}></input>
              <span>
                <h4>Moderate</h4>
                {/* <label>RECOMMENDED</label> */}
              </span>
              <div className="typicalTerms">
                <span>
                  <h3>Description</h3>
                  <p>
                    The Moderate Cancellation Policy strikes a balance between
                    flexibility and protection for the owner's interests. Guests
                    can receive a 100% payout for cancellations made within 2
                    days of the booking start time, allowing some flexibility
                    for last-minute changes. However, a reduced payout of 50% is
                    offered for cancellations made between 2-5 days of the
                    booking start time, providing owners with partial
                    compensation for their time and resources.
                  </p>
                </span>
                <span>
                  <h3>Typical Terms:</h3>
                  <ul>
                    <li>
                      100% payout if canceled within 2 days of the booking start
                      time.
                    </li>
                    <li>
                      50% payout if canceled between 2-5 days of the booking
                      start time.
                    </li>
                    <li>
                      No refund if canceled more than 5 days before the booking
                      start time.
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="cancelPolicy1">
              <input type="radio"
                name="policy"
                value="strict"
                onChange={handleRadioChange}
                checked={policy === "strict"}></input>
              <span>
                <h4> Strict</h4>
                {/* <label>RECOMMENDED</label> */}
              </span>
              <div className="typicalTerms">
                <span>
                  <h3>Description</h3>
                  <p>
                    The Strict Cancellation Policy is designed to protect the
                    owner's interests by minimizing the risk of last-minute
                    cancellations. Guests can receive a 100% payout for
                    cancellations made within 14 days of the booking start time,
                    ensuring that owners are compensated for advanced bookings.
                    However, a reduced payout of 50% is offered for
                    cancellations made between 14-30 days of the booking start
                    time, providing some compensation for cancellations that
                    occur further in advance.
                  </p>
                </span>
                <span>
                  <h3>Typical Terms:</h3>
                  <ul>
                    <li>
                      100% payout if canceled within 14 days of the booking
                      start time.
                    </li>
                    <li>
                      50% payout if canceled between 14-30 days of the booking
                      start time.
                    </li>
                    <li>
                      No refund if canceled more than 30 days before the booking
                      start time.
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="listStepButton">
        {/* <div className="wrapper"> */}
          <NavLink to="/boatLocation">
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
      {/* <NavLink to="/alowedOnBoat"> */}
        <button onClick={handleSubmit}>Continue</button>
        {/* </NavLink> */}
        </div>
      </div>
      {/* </div> */}
      </>
    </>
  );
}
