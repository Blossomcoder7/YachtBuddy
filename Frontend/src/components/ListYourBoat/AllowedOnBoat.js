import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";
import "../Style/AllowedOnBoat.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../utils/FormDataContext";

export default function AllowedOnBoat() {
  const [allowedOnBoat, setCheckedItems] = useState([]);
  const { updateFormData } = useFormData();

  const handleCheckboxClick = (name) => {
    if (allowedOnBoat.includes(name)) {
      setCheckedItems(allowedOnBoat.filter((item) => item !== name));
    } else {
      setCheckedItems([...allowedOnBoat, name]);
    }
    console.log(allowedOnBoat);
  };

  const checkboxes = [
    { name: "shoes", label: "Shoes" },
    { name: "glassBotels", label: "Glass Bottles" },
    { name: "fishing", label: "Fishing" },
    { name: "pets", label: "Pets" },
    { name: "kidsUnder12", label: "Kids Under 12" },
    { name: "smoking", label: "Smoking" },
    { name: "alcohol", label: "Alcohol" },
    { name: "liveaboard", label: "Liveaboard" },
    { name: "swimming", label: "Swimming" },
    { name: "redWine", label: "Red Wine" },
  ];
const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = { allowedOnBoat };
    console.log(Data);
    updateFormData(Data);
    navigate("/boatFeature");
 };

  return (
    <>
      <Navbar />
      <div className="allowedOnBoat">
        <div className="allowedOnBoatL">
          <h1>What is allowed on your boat?</h1>
        </div>
        <div className="allowedOnBoatR">
          {/* <div className="allowedList"> */}
          {checkboxes.map((checkbox) => (
            <div className="allowedList" key={checkbox.name}>
              <input
                type="checkbox"
                name={checkbox.name}
                value={checkbox.name}
                checked={allowedOnBoat.includes(checkbox.name)}
                onClick={() => handleCheckboxClick(checkbox.name)}
              />
              <span>{checkbox.label}</span>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
      <div className="listStepButton">
        <div className="wrapper">
          <NavLink to="/cancelPolicy">
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
          {/* <NavLink to="/boatFeature"> */}
          <button onClick={handleSubmit}>Continue</button>
          {/* </NavLink> */}
        </div>
      </div>
    </>
  );
}
