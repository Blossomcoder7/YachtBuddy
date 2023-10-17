import React, { useState } from "react";
import "../Style/TitleDescription.css";
import Navbar from "../LandingPage/Navbar";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useFormData } from '../../utils/FormDataContext';

import backendURL from "../../AxiosApi";

export default function TitleDescription() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState('');
  const maxCharCount = 100; // Set your desired character limit here
  const { updateFormData } = useFormData();

  
  const navigate = useNavigate();
 
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxCharCount) {
      setTitle(value);
    }
  };
  const handleField2Change = (e) => {
    const value = e.target.value;
    if (value.length <= maxCharCount) {
      setDescription(value);

    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form data
 
  if (!title) {
    alert("Please Add Title.");
    return;
  }

  if (! description) {
    alert("Please Add Desccription.");
    return;
  }

    const formData = {title,description}
    updateFormData(formData);
        navigate("/cancelPolicy");
  

    // try {
    //   const response = await axios.post(
    //     `${backendURL}/listYourBoat/boatTitle`,
    //     formData
    //   );
    //   if (response.status === 200) {
    //     navigate("/cancelPolicy");
    //   } else if (response.status === 400) {
    //     // Handle validation errors (e.g., invalid form data)
    //     alert("Invalid form data. Please check your input.");
    //   } else {
    //     // Handle other error cases
    //     alert("An error occurred. Please try again later.");
    //   }
    // } catch (error) {
    //   console.error("Error logging in:", error);
    // }
  };

  return (
    <>
      <Navbar />
      <div className="titleDesc">
        <div className="titleDescL">
          <h1>Your Boat Listing</h1>
          <div className="titleCont">
            <div className="lookingFor">
              <img src="https://www.boatsetter.com/images/light-bulb.svg"></img>
              <p>
                This is what renters will see when looking for boats in your
                area. You can always edit this later.
              </p>
            </div>
            <div className="descripDivider"></div>
            <h3>Boat Title</h3>
            <p>
              <b>A great title helps your boat stand out in search results.</b>
            </p>
            <div className="descripDivider"></div>
            <h3>Boat Description</h3>
            <ul>
              <li>Where can your boat go on the water?</li>
              <li>
                Provide itinerary suggestions of places to see or take a swim
              </li>
              <li>List any extra perks/toys that come with your boat</li>
              <li>
                Be transparent if there any additional costs not included (like
                fuel)
              </li>
              <li>Hint at nearby parking options to your boat</li>
            </ul>
          </div>
        </div>
        <div className="titleDescR">
          <h2>Boat Title and Description</h2>
          <span>
          <input
            placeholder="Listing Title"
            type="text"
            id="inputField"
            name="title"
            value={title}
            onChange={handleInputChange}
            maxLength={maxCharCount}
            required
          ></input>
          <p>Characters left: {maxCharCount - title.length}/{maxCharCount}</p></span>
          <div className="descripDivider"></div>
          <textarea rows={15} placeholder="Description" name="description" value={description}
        onChange={handleField2Change}
        maxLength={maxCharCount}
        required></textarea>
        </div>
      </div>
      <div className="listStepButton">
        <div className="wrapper">
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
          <button onClick={handleSubmit} >Continue</button>
        </div>
      </div>
    </>
  );
}
