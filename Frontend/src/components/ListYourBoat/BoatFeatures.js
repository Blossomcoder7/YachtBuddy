import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";
import "../Style/BoatFeatures.css";
import { NavLink } from "react-router-dom";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../utils/FormDataContext";


export default function BoatFeatures() {

  const [features, setFeatures] = useState([]); 
  const [extras, setExtras] = useState([]); 
  const [navigation, setNavigations] = useState([]); 
  const { updateFormData } = useFormData();


    const checkboxes = [
      { name: "airConditioning", label: "Air Conditioning" },
      { name: "anchor", label: "Anchor" },
      { name: "bathroom", label: "Bathroom" },
      { name: "bluetoothAudio", label: "Bluetooth Audio" },
      { name: "cooler", label: "Cooler/ Ice Chest" },
      { name: "deckShower", label: "Deck Shower" },
      { name: "fishFinder", label: "Fish Finder" },
      { name: "grill", label: "Grill" },
      { name: "livewell", label: "Livewell / Beitwell" },
      { name: "refrigerator", label: "Refrigerator" },
      { name: "rodHolders", label: "Rod Holders" },
      { name: "shower", label: "Shower" },
      { name: "stereo", label: "Stereo" },
      { name: "stereoAuxInput", label: "Stereo AUX Input" },
      { name: "swimLadder", label: "Swim Ladder" },
      { name: "wifi", label: "WIFI" },
      // Add more checkboxes here
    ];
    const extrasCheckboxes = [
      { name: "lifeJackets", label: "Life Jackets" },
      { name: "fishingGear", label: "Fishing Gear" },
      { name: "floatingIsland", label: "Floating Island" },
      { name: "floatingMat", label: "Floating Mat" },
      { name: "inflatableToys", label: "Inflatable Toys" },
      { name: "jetSki", label: "Jet Ski" },
      { name: "kayaks", label: "Kayaks" },
      { name: "paddleBoards", label: "Paddleboards" },
      { name: "snorkelingGear", label: "Snorkeling Gear" },
      { name: "tender", label: "Tender" },
      { name: "wakeboard", label: "Wakeboard" },
      { name: "waterScooter", label: "Water Scooter" },
      { name: "waterSkis", label: "Water Skis" },
    ];
    const navigationCheckboxes = [
      { name: "bowThruster", label: "Bow Thruster" },
      { name: "depthFinder", label: "Depth Finder" },
      { name: "gps", label: "GPS" },
      { name: "vhfRadio", label: "VHF Radio" },
      { name: "radar", label: "Radar" },
      { name: "sonar", label: "Sonar" },
    ];
     
    const handleCheckboxClick = (name) => {
      if (features.includes(name)) {
        setFeatures(features.filter(item => item !== name));
      } else {
        setFeatures([...features, name]);
      }
      console.log(features);
    };
    const handleCheckboxClick2 = (name) => {
      if (extras.includes(name)) {
        setExtras(extras.filter(item => item !== name));
      } else {
        setExtras([...extras, name]);
      }
      console.log(extras);
    };
    const handleCheckboxClick3 = (name) => {
      if (navigation.includes(name)) {
        setNavigations(navigation.filter(item => item !== name));
      } else {
        setNavigations([...navigation, name]);
      }
      console.log(navigation);
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const Data = {features,extras,navigation};
    updateFormData(Data);
    navigate("/boatSpecification");


  console.log(Data)
    //  try {
    //     const response = await axios.post(
    //       `${backendURL}/listYourBoat/boatFeature`,
    //       formData
    //     );
    //     if (response.status === 200) {
    //       navigate("/boatImages");
    //     } else if (response.status === 400) {
    //       // Handle validation errors (e.g., invalid form data)
    //       alert("Invalid form data. Please check your input.");
    //     } else {
    //       // Handle other error cases
    //       alert("An error occurred. Please try again later.");
    //     }
    //   } catch (error) {
    //     console.error("Error logging in:", error);
    //   }
    };
    
    return (

    <>
      <Navbar />
      <>
      <form onSubmit={handleSubmit}>
        <div className="boatFeature">
          <div className="boatFeatureL">
            <h1>Boat features</h1>
            <p>
              Show off what you offer on your boat! Renters are more likely to
              choose boats with lots of features that enable them to have a fun
              time on the water
            </p>
          </div>

          <div className="boatFeatureR">
            <div className="boatfeture">
              <h3>Features</h3>
              <div className="featureItem">
             { checkboxes.map((checkbox) => (
             <div className="fetureList">
                  <input
                    type="checkbox"
                    name={checkbox.name}
                    value={checkbox.name}
                    checked={features.includes(checkbox.name)}
                  onClick={() => handleCheckboxClick(checkbox.name)}
                  ></input>
                 <span>{checkbox.label}</span>
                </div>))}
                
                
              </div>
            </div>
            <div className="boatfeture">
              <h3>Extras</h3>
              <div className="featureItem">
              { extrasCheckboxes.map((checkbox) => (
             <div className="fetureList">
                  <input
                    type="checkbox"
                    name={checkbox.name}
                    value={checkbox.name}
                    checked={extras.includes(checkbox.name)}
                  onClick={() => handleCheckboxClick2(checkbox.name)}
                  ></input>
                 <span>{checkbox.label}</span>
                </div>))}
              </div>
            </div>
            <div className="boatfeture">
              <h3>Navigation</h3>
              <div className="featureItem">
              { navigationCheckboxes.map((checkbox) => (
             <div className="fetureList">
                  <input
                    type="checkbox"
                    name={checkbox.name}
                    value={checkbox.name}
                    checked={navigation.includes(checkbox.name)}
                  onClick={() => handleCheckboxClick3(checkbox.name)}
                  ></input>
                 <span>{checkbox.label}</span>
                </div>))}
                
              </div>
            </div>
          </div>
          
        </div>
        <div className="listStepButton">
        <div className="wrapper">
          <NavLink to="/alowedOnBoat">
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
        {/* <NavLink to="/boatImages"> */}
          <button type="submit">Continue</button>
          {/* </NavLink> */}
        </div>
      </div>
      </form>

      </>
    </>
  );
}
