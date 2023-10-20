import React, { useEffect, useState } from "react";
import Navbar from "../LandingPage/Navbar";
import "../Style/Review.css";
import axios from "axios";
import backendURL from "../../AxiosApi";
import {useFormData } from '../../utils/FormDataContext';
import "../Style/BoatPhotos.css";
import { NavLink, useNavigate } from "react-router-dom";




export default function Review() {
  const [data, setData] = useState([]);
  const { formData} = useFormData();
  const { updateFormData } = useFormData();

  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [selectedImage4, setSelectedImage4] = useState(null);
  const [selectedImage5, setSelectedImage5] = useState(null);
  const [selectedImage6, setSelectedImage6] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);

  const navigate = useNavigate();

  // Function to handle file input change
  function handleImageChange1(event) {
    const file = event.target.files[0];
    console.log(file)
    setImage1(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectedImage1(reader.result);
      };
    }
  }
  function handleImageChange2(event) {
    const file = event.target.files[0];
    setImage2(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectedImage2(reader.result);
      };
    }
  }
  function handleImageChange3(event) {
    const file = event.target.files[0];
    setImage3(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectedImage3(reader.result);
      };
    }
  }
  function handleImageChange4(event) {
    const file = event.target.files[0];
    setImage4(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectedImage4(reader.result);
      };
    }
  }
  function handleImageChange5(event) {
    const file = event.target.files[0];
    setImage5(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectedImage5(reader.result);
      };
    }
  }
  function handleImageChange6(event) {
    const file = event.target.files[0];
    setImage6(file);

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectedImage6(reader.result);
      };
    }
  }


  const continueHandel = async () => {
    if (selectedImage1 && selectedImage2 && selectedImage3 && selectedImage4) {
      console.log("Everything is Ok");

      let formData1 = new FormData();

      formData1.append("images", selectedImage1 || "");
      formData1.append("images", selectedImage2 || "");
      formData1.append("images", selectedImage3 || "");
      formData1.append("images", selectedImage4 || "");

      // Add optional images only if they are selected
      if (selectedImage5) {
        formData1.append("images", selectedImage5 || "");
      }

      if (selectedImage6) {
        formData1.append("images", selectedImage6 || "");
      }

      const base64Images = [selectedImage1, selectedImage2, selectedImage3, selectedImage4, selectedImage5, selectedImage6]
        .filter(image => image !== null)
        .map(image => image.split(",")[1] || "");

      try {
        const response = await axios.post(
          `${backendURL}/listYourBoat/listYourBoat`,
          {formData, images: base64Images}
        );
       

        if (response.status === 200) {
          const imageIds = response.data.objectIds;
          updateFormData(imageIds);
          alert("Successfull Submit")
          navigate("/");
        } else if (response.status === 400) {
          alert("Invalid form data. Please check your input.");
        } else {
          alert("An error occurred. Please try again later.");
        }
      } catch (error) {
        console.error("Error uploading images:", error);
      }
    } else {
      alert("Minimum 4 Images Required");
    }
  };

  const policyObject = [
    {
      type: "flexible",
      description:
        "The Flexible Cancellation Policy is designed to offer maximum flexibility to guests and encourages last-minute bookings. Under this policy, guests can receive a 100% payout for cancellations made within 24 hours of the booking start time. This policy is ideal for owners who want to attract spontaneous travelers and accommodate short-notice changes in plans",
      TypicalTerms:
        "100% payout if canceled within 24 hours of the booking start time. No refund if canceled more than 24 hours before the booking start time.",
    },
    {
      type: "moderate",
      description:
        "The Flexible Cancellation Policy is designed to offer maximum flexibility to guests and encourages last-minute bookings. Under this policy, guests can receive a 100% payout for cancellations made within 24 hours of the booking start time. This policy is ideal for owners who want to attract spontaneous travelers and accommodate short-notice changes in plans",
      TypicalTerms:
        "100% payout if canceled within 24 hours of the booking start time. No refund if canceled more than 24 hours before the booking start time.",
    },
    {
      type: "strict",
      description:
        "The Flexible Cancellation Policy is designed to offer maximum flexibility to guests and encourages last-minute bookings. Under this policy, guests can receive a 100% payout for cancellations made within 24 hours of the booking start time. This policy is ideal for owners who want to attract spontaneous travelers and accommodate short-notice changes in plans",
      TypicalTerms:
        "100% payout if canceled within 24 hours of the booking start time. No refund if canceled more than 24 hours before the booking start time.",
    },
  ];


  return (
    <>
      <Navbar />
      <div className="reviewPage">
        <div className="reviewHead">
          <h1>Please review your boat listing before submitting.</h1>
        </div>
        <>
      <>
        <div className="uploadPic">
          <div className="titleDescL">
            <h1>Boat photos</h1>
            <p>
              It’s important for renters to see your boat before they request
              it.
            </p>
            <NavLink to="/boatSpecification"><label>Skip for now</label></NavLink>
            <div className="titleCont">
              <div className="lookingFor">
                <img src="https://www.boatsetter.com/images/light-bulb.svg" alt=""></img>
                <p>Tips to get great photos on your boat</p>
              </div>
              <div className="descripDivider"></div>
              <h3>Boat Images</h3>
              <p>
                <b>
                  A great Images helps your boat stand out in search results.
                </b>
              </p>
              <div className="descripDivider"></div>
              {/* <h3>Boat Description</h3> */}
              <ul>
                <li>Use your camera or smartphone.</li>
                <li>Avoid using flash. Boats look best in natural light.</li>
                <li>Tidy up before taking interior shots.</li>
                <li>
                  Take photos in landscape mode and avoid extreme close-ups.
                </li>
              </ul>
            </div>
          </div>
          <div className="uploadPicR">
            <p>
              Once you have a good photo that shows the whole boat, add more
              displaying the boat’s details and interior, especially any cool or
              unique features.
            </p>
            <span>
              Drag and drop or click here to choose photos (4 minimum)
            </span>
            <p>
              Avoid photos with company logos and phone numbers. Photos
              containing this information will be edited or removed. Photos with
              at least 960px width display the best. Acceptable photo formats:
              JPG, PNG, GIF, BMP. Max file size: 245MB
            </p>
            <div className="uploadGallary">
              <div className="mainGallaryImg">
                <div className="gallaryImg">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange1}
                    style={{}}
                    id="imageInput"
                  />
                </div>
                {selectedImage1 && (
                  <div className="previewImg">
                    <img src={selectedImage1} alt="Selected" />
                  </div>
                )}
                <div className="uploadIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#47B7AC"
                      d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16h-2Zm-5 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"
                    />
                  </svg>
                </div>
                <span>Cover Photo</span>
              </div>
              <div className="mainGallaryImg">
                <div className="gallaryImg">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange2}
                    style={{}}
                    id="imageInput"
                  />
                </div>
                {selectedImage2 && (
                  <div className="previewImg">
                    <img src={selectedImage2} alt="Selected" />
                  </div>
                )}
                <div className="uploadIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#47B7AC"
                      d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16h-2Zm-5 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"
                    />
                  </svg>
                </div>
                <span>Photo 2</span>
              </div>
              <div className="mainGallaryImg">
                <div className="gallaryImg">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange3}
                    style={{}}
                    id="imageInput"
                  />
                </div>
                {selectedImage3 && (
                  <div className="previewImg">
                    <img src={selectedImage3} alt="Selected" />
                  </div>
                )}
                <div className="uploadIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#47B7AC"
                      d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16h-2Zm-5 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"
                    />
                  </svg>
                </div>
                <span>Photo 3</span>
              </div>
              <div className="mainGallaryImg">
                <div className="gallaryImg">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange4}
                    style={{}}
                    id="imageInput"
                  />
                </div>
                {selectedImage4 && (
                  <div className="previewImg">
                    <img src={selectedImage4} alt="Selected" />
                  </div>
                )}
                <div className="uploadIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#47B7AC"
                      d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16h-2Zm-5 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"
                    />
                  </svg>
                </div>
                <span>Photos 4</span>
              </div>
              <div className="mainGallaryImg">
                <div className="gallaryImg">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange5}
                    style={{}}
                    id="imageInput"
                  />
                </div>
                {selectedImage5 && (
                  <div className="previewImg">
                    <img src={selectedImage5} alt="Selected" />
                  </div>
                )}
                <div className="uploadIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#47B7AC"
                      d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16h-2Zm-5 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"
                    />
                  </svg>
                </div>
                <span>Photos 5</span>
              </div>
              <div className="mainGallaryImg">
                <div className="gallaryImg">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange6}
                    style={{}}
                    id="imageInput"
                  />
                </div>
                {selectedImage6 && (
                  <div className="previewImg">
                    <img src={selectedImage6} alt="Selected" />
                  </div>
                )}
                <div className="uploadIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#47B7AC"
                      d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16h-2Zm-5 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"
                    />
                  </svg>
                </div>
                <span>Photos 6</span>
              </div>

            </div>
          </div>
        </div>
      </>
    </>
        <div className="wrapper">
          <div className="boatDetails">
            <div className="boatDetailsL">
              <h1>Boat details</h1>
            </div>
            <div className="boatDetailsR">
              <div className="detailsContent">
                <h2>Specifications</h2>
                <div className="contentRow">
                  <ul>
                    <li>Year</li>
                    <li>Make</li>
                    <li>Model</li>
                    <li>Length (ft)</li>
                    <li>Type</li>
                    <li>Category</li>
                    <li>Passenger capacity</li>
                  </ul>
                  <ul>
                    <li>{formData.year}</li>
                    <li>{formData.make}</li>
                    <li>{formData.model}</li>
                    <li>{formData.length}</li>
                    <li>{formData.power}</li>
                    <li>{formData.cateogiry}</li>
                    <li>{formData.passangerCapacity}</li>
                  </ul>
                </div>
                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
              <div className="detailsContent">
                <h2>Location</h2>
                <div className="contentRow">
                  <ul>
                    <li>Location type</li>
                    <li>Country / Territory</li>
                    <li>Street address 1</li>
                    <li>City (ft)</li>
                    <li>State / Province</li>
                    <li>Zip code</li>
                  </ul>
                  <ul>
                    <li>{formData.locationType}</li>
                    <li>{formData.country}</li>
                    <li>{formData.address1}</li>
                    <li>{formData.city}</li>
                    <li>{formData.state}</li>
                    <li>{formData.zipCode}</li>
                  </ul>
                </div>
                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
              <div className="detailsContent">
                <h2>Title</h2>
                <p style={{ marginTop: "20px" }}>{formData.title}</p>
                <div className="coNteNtDivider"></div>
                <h2>Description</h2>
                <p style={{ marginTop: "20px" }}>{formData.description}</p>
                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
              <div className="detailsContent detailsContent2">
                <h2>Cancelation Policy</h2>
                {policyObject.map((datas) =>
                  datas.type === `${formData.policy}` ? (
                    <div key={datas.type} className="detailsContent2">
                      <hr />
                      <span>{datas.type}</span>
                      <span>Description</span>
                      <p>{datas.description}</p>
                      <span>Typical Terms</span>
                      <p>{datas.TypicalTerms}</p>
                    </div>
                  ) : null
                )}
                <div className="coNteNtDivider"></div>

                <span>Edit</span>
              </div>

              <div className="detailsContent">
                <h2>Preferences</h2>
                <p>What is allowed on your boat?</p>
                <ul>
                  {formData.allowedOnBoat && Array.isArray(formData.allowedOnBoat) ? (
                    formData.allowedOnBoat.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) : (
                    <li>No preferences available</li>
                  )}
                </ul>
               

                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
              <div className="detailsContent">
                <h2>Features</h2>
                <h3 className="featirehD">Features</h3>
                <ul className="featireList">
                  {formData.features && Array.isArray(formData.features) ? (
                    formData.features.map((item, index) => (
                      <li key={index}>{item}</li>
                      ))
                      ) : (
                        <li>No preferences available</li>
                      )}
                </ul>
                <h3 className="featirehD">Extras</h3>
                <ul className="featireList">
                {formData.extras && Array.isArray(formData.extras) ? (
                    formData.extras.map((item, index) => (
                      <li key={index}>{item}</li>
                      ))
                      ) : (
                        <li>No preferences available</li>
                      )}
                </ul>
                <h3 className="featirehD">Navigation</h3>
                <ul className="featireList">
                {formData.navigation && Array.isArray(formData.navigation) ? (
                    formData.navigation.map((item, index) => (
                      <li key={index}>{item}</li>
                      ))
                      ) : (
                        <li>No preferences available</li>
                      )}
                </ul>

                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
            </div>
          </div>
          <div className="coNteNtDivider coNteNtDivider1"></div>
          <div className="boatDetails">
            <div className="boatDetailsL">
              <h1>Availability</h1>
            </div>
            <div className="boatDetailsR">
              <div className="detailsContent availbility">
                <h2>Start times</h2>
                <div>
                  <label>Monday</label>
                  <p>6:30 AM - 6:00 PM</p>
                </div>
                <div>
                  <label>Monday</label>
                  <p>6:30 AM - 6:00 PM</p>
                </div>
                <div>
                  <label>Monday</label>
                  <p>6:30 AM - 6:00 PM</p>
                </div>
                <div>
                  <label>Monday</label>
                  <p>6:30 AM - 6:00 PM</p>
                </div>
                <div>
                  <label>Monday</label>
                  <p>6:30 AM - 6:00 PM</p>
                </div>
                <div>
                  <label>Monday</label>
                  <p>6:30 AM - 6:00 PM</p>
                </div>
                <div>
                  <label>Monday</label>
                  <p>6:30 AM - 6:00 PM</p>
                </div>

                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
              <div className="detailsContent availbility">
                <h2>Advance notice</h2>
                <div>
                  <p>Advance Notice</p>
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#000000bd",
                    }}
                  >
                    {formData.advanceNotice}
                  </label>
                </div>

                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
              <div className="detailsContent availbility">
                <h2>Multiple-booking days</h2>
                <div>
                  <p>Allow multiple bookings on the same day</p>
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#000000bd",
                    }}
                  >
                  {data.multiBooking}
                  </label>
                </div>
                <div>
                  <p>Buffer time</p>
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#000000bd",
                    }}
                  >
                    30 min
                  </label>
                </div>
                

                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
              <div className="detailsContent availbility">
                <h3>Booking options</h3>
                <label>
                  <p>Is this a captained fishing charter?</p>
                  <p style={{ fontWeight: "bold" }}>No</p>
                </label>
                <label>
                  <p>Renter operates my boat</p>
                  <p style={{ fontWeight: "bold" }}>{formData.renter === "Yes" ? "Yes" :"No"}</p>
                </label>
                <label>
                  <p>USCG-certified captain operates my boat</p>
                  <p style={{ fontWeight: "bold" }}>{formData.uscg === "Yes" ? "Yes" :"No"}</p>
                </label>
                <div className="coNteNtDivider"></div>
                <h3>Booking durations</h3>
                <ul>
                {formData.duration && Array.isArray(formData.duration) ? (
                    formData.duration.map((item, index) => (
                      <li key={index}>{item}</li>
                      ))
                      ) : (
                        <li>No preferences available</li>
                      )}
                </ul>
                <h3>Fuel policy</h3>
                <label>
                  <p>Who pays for fuel?</p>
                  <p style={{ fontWeight: "bold" }}>{formData.pay}</p>
                </label>
                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
            </div>
          </div>
          <button onClick={continueHandel} className="suBmIt">Submit </button>
          <div className="coNteNtDivider coNteNtDivider1"></div>

          <div className="boatDetails">
            <div className="boatDetailsL">
              <h1>YACHTBUDDY</h1>
            </div>
            <div className="boatDetailsR">
              <ul>
                <li>
                  Keep your boat well-maintained and make sure all regulatory
                  and safety requirements have been met so your renters are safe
                  on the water.
                </li>
                <li>
                  Clean and refuel your boat before every trip so guests have an
                  enjoyable experience.
                </li>
              </ul>
              <p style={{ color: "gray" }}>
                These standards keep our boat sharing community safe and
                reliable. By clicking “Submit”, you‘re agreeing to our
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
