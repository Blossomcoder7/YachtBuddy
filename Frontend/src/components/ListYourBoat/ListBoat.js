import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";
import "../Style/ListBoat.css";
import map from "../../images/map-marker-alt.svg";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../utils/FormDataContext";

export default function ListBoat() {
  const [selectedValue, setSelectedValue] = useState("");
  const [formData, setFormData] = useState({
    boatAddress: "",
    year: "",
    make: "",
    model: "",
  });
  const { updateFormData } = useFormData();


  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= 1900; year--) {
    years.push(year);
  }

  const options = {
    bayliner: ["Dx2000", "Dx2050", "Dx2200", "Dx2250", "Element E18"],
    beneteauUSA: [
      "Gran Turismo 32lb",
      "Gran Turismo 32 Joystick",
      "Gran Turismo 36 lb",
      "Gran Turismo 36 lb Joystick",
      "Gran Turismo 41 Joystick",
    ],
    catalina: ["12.5 Expo", "14.2", "14.2 Expo", "16.5", "22 Capri"],
    seaRayBoats: ["Sdx 250", "Sdx 250 oB", "Sdx 270", "Sdx 270 Ob", "Sdx 290"],
    yamaha: [
      "190 Fish Deluxe",
      "190  Fish Sport",
      "195 Fish DEluxe",
      "195 Fish Sport",
      "195s",
    ],
  };

  const yearSelected = (e) => {
    handleSelectChange(e);
    handleInputChange(e);
  }

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    
  if (!formData.boatAddress) {
    alert("Please enter a Boat Address.");
    return;
  }
  
  if (!formData.year || isNaN(formData.year)) {
    alert("Please enter a valid Year.");
    return;
  }

  if (!formData.make) {
    alert("Please select a Make.");
    return;
  }

  if (!formData.model) {
    alert("Please select a Model.");
    return;
  }

  updateFormData(formData);
  navigate('/listingStep');

  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };

  return (
    <>
      <Navbar />
      <div className="ListBoat">
        <div className="boatFilter">
          <div className="wrapper">
            <div className="listBoatM">
              <div className="listBoatL">
                <h1>Earn money by renting out your boat.</h1>
                <p>
                  This information will help us identify the rest of your boat
                  details, which you can review later. Want to make sure your
                  boat is eligible before starting? Learn more here.
                </p>
              </div>
              <div className="listBoatR">
                <div className="listForm">
                  <form>
                    <div className="locationInput">
                      <input
                        type="search"
                        name="boatAddress"
                        placeholder="Boat Address"
                        value={formData.boatAddress}
                        onChange={handleInputChange}
                      />
                      <img src={map} alt=""></img>
                    </div>

                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                    >
                      <option>Year</option>

                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>

                    <select
                      id="make"
                      name="make"
                      onChange={yearSelected}
                      value={formData.make}
                    >
                      <option value="">Make</option>
                      <option value="" disabled>
                        Top Make
                      </option>
                      <option value="bayliner" key={1}>Bayliner</option>
                      <option value="beneteauUSA" key={2}>Beneteau USA</option>
                      <option value="catalina" key={3}>Catalina</option>
                      <option value="seaRayBoats" key={4}>Sea Ray Boats</option>
                      <option value="yamaha" key={5}>Yamaha</option>
                    </select>
                    <select
                      id="model"
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                    >
                      <option>Model</option>
                      {options[selectedValue] &&
                        options[selectedValue].map((option) => (
                          <option value={option} key={option}>{option}</option>
                        ))}
                    </select>

                    <div className="dividerLine"></div>

                    <div className="priceEstimate">
                      {/* <div style={{textAlign:"left"}}>
                      <p>Estimated monthly</p>
                      <p>
                        earnings : <span style={{ color: "#47b7ac" }}>$0</span>
                      </p>
                    </div> */}
                      {/* <NavLink to="/listingStep">
                        {" "} */}
                        <button onClick={handleSubmit}> GET STARTED</button>{" "}
                      {/* </NavLink> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
