import React, { useState } from "react";
import "../Style/BoatLocation.css";
import Navbar from "../LandingPage/Navbar";
import "../Style/ListingStep.css";
import { NavLink } from "react-router-dom";
import countries from "./Countries";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../utils/FormDataContext";


export default function BoatLoacation() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [formData, setFormData] = useState({
    locationType: "",
    country: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    zipCode: "",
  });
  const { updateFormData } = useFormData();


  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

 
  if (!formData.locationType) {
    alert("Please select a Location Type.");
    return;
  }

  if (!formData.country) {
    alert("Please select a Country.");
    return;
  }

  if (!formData.address1) {
    alert("Please enter the Address.");
    return;
  }

  if (!formData.city) {
    alert("Please enter the City.");
    return;
  }

  if (!formData.state) {
    alert("Please enter the State / Province.");
    return;
  }

  if (!formData.zipCode) {
    alert("Please enter the Zip Code.");
    return;
  }
  updateFormData(formData);
  navigate("/boatDescription");
  };
  const handleCountry = (e) => {
    handleCountryChange(e);
    handleInputChange(e);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  return (
    <>
      <Navbar />
      <div className="boatLocation">
        <div className="boatLocationL">
          <h1>Where is your boat?</h1>
          <p>
            To protect your privacy, we only show your boat’s exact location to
            guests once you’ve confirmed their trip.
          </p>
        </div>
        <div className="boatLocationR">
          <select
            id="mySelect"
            name="locationType"
            value={formData.locationType}
            onChange={handleInputChange}
          >
            <option>Location Type</option>
            <option value="Marina Slip">Marina Slip</option>
            <option value="Marina Dry Storage">Marina Dry Storage</option>
            <option value="Marina Rack Storage">Marina Rack Storage</option>
            <option value="Marina mooring">Marina mooring</option>
            <option value="Residence trailer">Residence trailer</option>
            <option value="Residence Slip">Residence Slip</option>
            <option value="Residence mooring">Residence mooring</option>
            <option value="storageFacility">Storage Facility</option>
            <option value="storageTrailer ">Storage Trailer</option>
          </select>
          <h1>Address Information</h1>
          <form>
            {/* <input type="text" placeholder="Marina Name"></input>
            <input type="text" placeholder="Slip Number"></input> */}
            <select
              id="country"
              name="country"
              value={selectedCountry}
              onChange={handleCountry}
            >
              <option value="">United Kingdom</option> {/* Default option */}
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Address"
              name="address1"
              value={formData.address1}
              onChange={handleInputChange}
            ></input>
            <input
              type="text"
              placeholder="Street address 2"
              name="address2"
              value={formData.address2}
              onChange={handleInputChange}
            ></input>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            ></input>
            <input
              type="text"
              placeholder="State / Provience"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
            ></input>
            <input
              type="text"
              placeholder="Zip code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
            ></input>
          </form>
        </div>
      </div>
      <div className="listStepButton">
        <div className="wrapper">
          <NavLink to="/listYourBoat">
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
          {/* <NavLink to="/boatDescription">
            {" "} */}
          <button onClick={handleSubmit}>Continue</button>
          {/* </NavLink> */}
        </div>
      </div>
    </>
  );
}
