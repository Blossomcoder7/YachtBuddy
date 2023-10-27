import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "../Style/HeroSection.css";
import calander from "../../images/calendar-alt.svg";
import map from "../../images/map-marker-alt.svg";
import user from "../../images/length.svg";
import arrow from "../../images/Group 6.svg";
import price from "../../images/price.svg";
import backendURL from "../../AxiosApi";


export default function CharterHerosection() {
    const [isFocused, setIsFocused] = useState(false);
    const [inputType, setInputType] = useState("text");
    const [reqstData, setReqstData] = useState("");
  
    const handleFocus = () => {
      setIsFocused(true);
      setInputType((prevInputType) => "date"); 
    };
  
    const handleBlur = () => {
      setIsFocused(false);
      setInputType((prevInputType) => "text");
    };
  
    useEffect(() => {
      AOS.init({ duration: 3000 });
    });
  
    const handelInputChange = (e) => {
      const { name, value } = e.target;
      setReqstData((reqstData) => ({
        ...reqstData,
        [name]: value,
      }));
      console.log(reqstData)
    };
  
    const onsubmit = async(e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${backendURL}/request/request`,reqstData);
        console.log(response);
      } catch (error) {
      console.log(error);
  
        
      }
  
    }

  return (
    <>
    <div className="heroSection ">
      <div className="wrapper herosection-1 herosection-2 ">
        <h1 data-aos="fade-up">
        Find the best yacht rentals near you
        </h1>
        <span data-aos="fade-left">Going beyond destinations</span>
        <div className="boxShadow" data-aos="fade-down">
          <div className="boatRequest">
            <form action="submit_form.php" method="post">
              <div className="inputRequest">
                <img src={map} alt=""></img>{" "}
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={reqstData.location}
                  onChange={handelInputChange}
                ></input>
              </div>
              <div className="inputRequest">
                <img src={calander} alt=""></img>{" "}
                <input
                  type={inputType}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder={
                    isFocused ? "Input is focused" : "Duration Date"
                  }
                  name="date"
                  value={reqstData.date}
                  onChange={handelInputChange}
                />
              </div>
              <div className="inputRequest">
                <img src={user} alt=""></img>{" "}
                <input
                  type="number"
                  placeholder="Passangers"
                  name="passanger"
                  value={reqstData.passanger}
                  onChange={handelInputChange}
                ></input>
              </div>
              <div className="inputRequest">
                <img src={price} alt=""></img>{" "}
                <input
                  type="number"
                  placeholder="Price"
                  name="price"
                  value={reqstData.price}
                  onChange={handelInputChange}
                ></input>
                {/* <img src={arrow1} alt=""></img> */}
              </div>
              <div className="inputRequest inputRequest1">
                <button onClick={onsubmit}>
                  SEARCH<img src={arrow} alt=""></img>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
