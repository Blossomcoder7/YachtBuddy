import React, { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "../Style/HeroSection.css";
import calander from "../../images/calendar-alt.svg";
import map from "../../images/map-marker-alt.svg";
import user1 from "../../images/users.svg";
import arrow from "../../images/Group 6.svg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import backendURL from "../../AxiosApi";
import { DateRangePicker } from "react-date-range";
import {format} from "date-fns";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

export default function HeroSection() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputType, setInputType] = useState("text");
  const [reqstData, setReqstData] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
     {
       startDate: new Date(),
       endDate: new Date(),
       key: "selection",
     },
  ]);

  const { user, setUser } = useContext(UserContext);  

  useEffect(() => {
    AOS.init({ duration: 3000 });
  });

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setReqstData((reqstData) => ({
      ...reqstData,
      [name]: value,
    }));
    console.log(reqstData);
  };

  const navigate = useNavigate();

  const onsubmit = async (e) => {
    e.preventDefault();
    console.log(date);
    console.log(reqstData)
    if (user) {
     
      try {
        const response = await axios.post(
          `${backendURL}/request/request`,
         { reqstData, date }
        );
        console.log(response);
        if (response.status === 200) {
          alert("Your Request Send Successfuly");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Kindly Sign Up Before Proceeding");
    }
  };

  return (
    <>
      <div className="heroSection ">
        <div className="wrapper herosection-1">
          <h1 data-aos="fade-up">
            Enjoy The Best Experience Out on The Water{" "}
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
                <div className="inputRequest CalaNder" onClick={() => setOpenDate(!openDate)}>
              <img src={calander} alt="" />
              <span >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
              </span>
             
            </div>
            {openDate && (
                <DateRangePicker
                  editableDateInputs={true}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  onChange={(item) => setDate([item.selection])}
                  className="dateRange"
                />
              )}
                <div className="inputRequest">
                  <img src={user1} alt=""></img>{" "}
                  <input
                    type="number"
                    placeholder="Passangers"
                    name="passanger"
                    value={reqstData.passanger}
                    onChange={handelInputChange}
                  ></input>
                </div>
                <div className="inputRequest inputRequest1">
                  <button onClick={onsubmit}>
                    SEND REQ<img src={arrow} alt=""></img>
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
