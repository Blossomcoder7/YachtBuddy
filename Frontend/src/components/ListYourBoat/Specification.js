import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";
import { NavLink } from "react-router-dom";
import "../Style/Specification.css";
import { useNavigate } from "react-router-dom";
import {useFormData } from '../../utils/FormDataContext';

export default function Specification() {
  const [power, setPower] = useState("");
  const [length, setLength] = useState("");
  const [cateogiry, setCateogiry] = useState("");
  const [passangerCapacity, setPassangerCapacity] = useState(""); 
  const { formData, updateFormData } = useFormData();

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= 1900; year--) {
    years.push(year);
  }
  // const categoryOptions= ["", "Airboat", "Aluminium Fishing", "Angler","Bow rider", "Bass boat", "Catamarn", "CEnter console","Clasic", "Commercial", "Convertible", "Cruiser", "Cuddy cabin", "Deck boat", "Dive boat", "Downeast", "Dual console", "Duck boat", "Elecctric", "Express Cruiser","Fish and ski", "Flats boat", "Flybridge", "HouseBoat", "Inflatable outboard", "Jet Boat", "Jet ski / personal water craft", "Jon Boat", "<ega yacht", "Motor yacht", "Offshore sport fishing", "Performance", "Performance fishing", "Pilothouse", "Ponton", "Rigid inflatable", "Runabout","Saltwater fishing", "Ski and wakeboard","skiff", "Trawler","Walkaround","Weekender","Other"];
const categoryOptions = ["Cishing Charter", "Pontoon Boats Rental", "Bachelor Party Boat Rental","Party Boats", "Yacht Rental", "Sailing", "Luxury Yacht", "Cruising","Boat rentals","Bachelorette Party"];
  // const options = {
  //   bayliner: ["Dx2000", "Dx2050", "Dx2200", "Dx2250", "Element E18"],
  //   beneteauUSA: [
  //     "Gran Turismo 32lb",
  //     "Gran Turismo 32 Joystick",
  //     "Gran Turismo 36 lb",
  //     "Gran Turismo 36 lb Joystick",
  //     "Gran Turismo 41 Joystick",
  //   ],
  //   catalina: ["12.5 Expo", "14.2", "14.2 Expo", "16.5", "22 Capri"],
  //   seaRayBoats: ["Sdx 250", "Sdx 250 oB", "Sdx 270", "Sdx 270 Ob", "Sdx 290"],
  //   yamaha: [
  //     "190 Fish Deluxe",
  //     "190  Fish Sport",
  //     "195 Fish DEluxe",
  //     "195 Fish Sport",
  //     "195s",
  //   ],
  // };

  const handleSelectChange4 = (e) => {
    setPower(e.target.value);
    console.log(power)
  };
  const handleSelectChange55 = (e) => {
    setLength(e.target.value);
    console.log(length)
  };
  const handleSelectChange6 = (e) => {
    setPassangerCapacity(e.target.value);
    console.log(passangerCapacity)
  };
  const handleSelectChange7 = (e) => {
    setCateogiry(e.target.value);
    console.log(cateogiry)
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {power, length, passangerCapacity, cateogiry};
    updateFormData(formData);
        navigate("/availability");
  };
  return (
    <>
      <Navbar />
      <div className="speciFication">
        <div className="speciFicationL">
            <span>
          <h1>Boat specifications</h1>
          <p>
            Please add your boat’s specifications. Some are already populated
            based on information you provided earlier.
          </p>
          </span>
        </div>
        <div className="speciFicationR">
          <div className="listForm">
            <form>
              <select id="year" name="year" >
                <option>{formData.year}</option>

               </select>

              <select id="make" name="make">
                <option value="">{formData.make}</option>
              
              </select>

              <select id="model" name="model">
                <option>{formData.model}</option>
               
              </select>

              <select id="power" name="power" onChange={handleSelectChange4}>
                <option value="Power">Power</option>
                <option value="SAil">Sail</option>
              </select>

              <input type="number" placeholder="Length (ft)"   name="length" value={length} onChange={handleSelectChange55}></input>

              <select id="category" name="category" onChange={handleSelectChange7}>
                <option value="">Category</option>
                {categoryOptions.map((categoryOption) => (
                  <option key={categoryOption} value={categoryOption}>
                    {categoryOption}
                  </option>
                ))}
              </select>
              <input type="number" placeholder="Passanger Capacity" min={0} max={10} name="passangerCapacity" value={passangerCapacity.passangerCapacity} onChange={handleSelectChange6}></input>
            </form>
          </div>
        </div>
      </div>
      <div className="listStepButton">
        <div className="wrapper">
          <NavLink to="/boatImages">
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
        {/* <NavLink to="/availability  "> */}
          <button onClick={handleSubmit}>Continue</button>
          {/* </NavLink> */}
        </div>
      </div>
    </>
  );
}
