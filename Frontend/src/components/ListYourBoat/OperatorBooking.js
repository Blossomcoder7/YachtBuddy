import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";
import "../Style/OperatorBooking.css";
import axios from "axios";
import { useFormData } from "../../utils/FormDataContext";
import { useNavigate } from "react-router-dom";

export default function OperatorBooking() {
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(false);
  const [renter] = useState("Yes");
  const [uscg] = useState("Yes");
  const [pay, setPay] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const { formData, updateFormData } = useFormData();
  const [durationPrices, setDurationPrices] = useState({});

  const navigate = useNavigate();

  const handleCheckboxClick = (name) => {
    if (checkedItems.includes(name)) {
      setCheckedItems(checkedItems.filter((item) => item !== name));
    } else {
      setCheckedItems([...checkedItems, name]);
    }
    console.log(checkedItems);
  };

  const payHandel = (e) => {
    setPay(e.target.value);
  };

  const handleCheckbox1Click = (e) => {
    setCheckbox1(!checkbox1);
  };

  const handleCheckbox2Click = (e) => {
    setCheckbox2(!checkbox2);
  };

  const checkboxes = [
    { name: "1 hour", key: "1Hour" },
    { name: "2 hour", key: "2Hour" },
    { name: "4 hour", key: "4Hour" },
    { name: "6 hour", key: "6Hour" },
    { name: "8 hour", key: "8Hour" },
    { name: "1 day",  key: "1day" },
  ];
  const handlePriceChange = (duration, price) => {
    setDurationPrices({ ...durationPrices, [duration]: price });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let Data;
    if (checkbox1 && checkbox2) {
      Data = { renter, uscg, checkedItems,durationPrices, pay };
    } else if (checkbox1 === false && checkbox2 === true) {
      Data = { uscg, checkedItems,durationPrices, pay };
    } else {
      Data = { renter, checkedItems, pay,durationPrices};
    }

    updateFormData(Data);
    navigate("/review");

  };

  return (
    <>
      <Navbar />
      <div className="operatorBooking">
        <div className="titleDescL">
          <h1>Choose who operates your boat and desired booking durations.</h1>
          <p>
            You can let renters who you approve and/or a captain to operate your
            boat. Learn more about captained rental requirements.
          </p>
          <div className="titleCont">
            <div className="lookingFor">
              <img
                src="https://www.boatsetter.com/images/light-bulb.svg"
                alt=""
              ></img>
              <p>We offer flexibility for you and captains</p>
            </div>
            <div className="descripDivider"></div>
            <p>
              Boatsetter will provide a captain list which you can approve from.
              If you or a captain you know wish to operate the boat, joining the
              network is easy. Learn more about the Boatsetter Captain Network.
            </p>
          </div>
        </div>
        <div className="operatorBookingR">
          <h6>Who can operate your boat? Select one or both options.</h6>
          <div className="operateOption">
            <span>
              <input
                type="checkbox"
                name="operator"
                value="Renter operates my boat"
                checked={checkbox1}
                onClick={handleCheckbox1Click}
              ></input>
              <p>Renter operates my boat</p>
              <label>MOST COMMON</label>
            </span>
            <div className="descripDivider"></div>

            <span>
              <input
                type="checkbox"
                name="operator"
                value="USCG-certified captain operates my boat"
                checked={checkbox2}
                onClick={handleCheckbox2Click}
              ></input>
              <p>USCG-certified captain operates my boat</p>
            </span>
          </div>
          <h6>Select which durations you’d like to offer.</h6>
          {/* <div className="durationOffer">
            {checkboxes.map((checkbox) => (
              <div className="durationOfferT">
                <input
                  type="checkbox"
                  name={checkbox.name}
                  value={checkbox.name}
                  checked={checkedItems.includes(checkbox.name)}
                  onClick={() => handleCheckboxClick(checkbox.name)}
                ></input>
                <span>{checkbox.name}</span>
              </div>
            ))}
          </div> */}
          <div className="durationOffer">
            {checkboxes.map((checkbox) => (
              <div className="durationOfferT">
                <input
                  type="checkbox"
                  name={checkbox.key}
                  value={checkbox.name}
                  checked={checkedItems.includes(checkbox.name)}
                  onClick={() => handleCheckboxClick(checkbox.name)}
                />
                <span>{checkbox.name}</span>
              </div>
            ))}
          </div>
          <div className="durationPriCe">
            {checkedItems.map((duration) => (
              <div className="durationPriceInput">
                {/* <span>{duration}</span> */}
                <input
                  type="text"
                  placeholder={`${duration} Enter price`}
                  name={`${duration}-price`}  // Add the name attribute
                  value={durationPrices[duration] || ""}  // Add the value attribute
                  onChange={(e) => handlePriceChange(duration, e.target.value)}
                />
              </div>
            ))}
          </div>
          <h6>Who pays for fuel?</h6>
          <div className="payFuel">
            <span>
              <input
                type="radio"
                name="whoPay"
                value="renterPay"
                onChange={payHandel}
                checked={pay === "renterPay"}
              ></input>
              <p>Renter Pays</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#47B7AC"
                  d="M11 18h2v-2h-2v2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2a2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4Z"
                />
              </svg>
            </span>
            <span>
              <input
                type="radio"
                name="whoPay"
                value="iPay"
                onChange={payHandel}
                checked={pay === "iPay"}
              ></input>
              <p>I Pay</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#47B7AC"
                  d="M11 18h2v-2h-2v2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2a2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="listStepButton">
        <div className="wrapper">
          {/* <NavLink to="/boatImages"> */}
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
          {/* </NavLink> */}
          {/* <NavLink to="/availability  "> */}
          <button onClick={handleSubmit}>Continue</button>
          {/* </NavLink> */}
        </div>
      </div>
    </>
  );
}
