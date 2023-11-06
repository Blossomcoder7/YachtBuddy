import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Style/HeroSection.css";
import calander from "../../images/calendar-alt.svg";
import map from "../../images/map-marker-alt.svg";
import user1 from "../../images/users.svg";
import arrow from "../../images/Group 6.svg";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../utils/UserContext";
import  { httpAPI } from "../../AxiosApi";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

export default function HeroSection() {
  // const [inputType, setInputType] = useState("text");
  const [reqstData, setReqstData] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [location, setLocation] = useState(false);
  const [boat, setBoat] = useState();
  const [selectedlocation, setSelectedLocation] = useState("Location");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // const { user, setUser } = useContext(UserContext);

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

  const clearForm = () => {
    setReqstData({ passanger: "" });
    setSelectedLocation("Location");
    setDate([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    console.log(date);
    console.log(reqstData)

    await console.log({ reqstData, date, selectedlocation })
    try {
      const response = await httpAPI.get(
        `/request/request`,
        { reqstData, date, selectedlocation }
      );
      // console.log(response);
      if (response.status === 200) {
        setBoat(response.data.boats);
        navigate("/searchBoaats", { state: { boat: boat } })
      }
      if (response.status === 201) {
        // alert("No Boat Found");
        console.log(selectedlocation);
        //  clearForm();

      }
    } catch (error) {
      console.log(error);
    }

  };

  const setLocations = (e) => {
    console.log(e.currentTarget.textContent);
    setSelectedLocation(e.currentTarget.textContent)
  }

  const locations = [
    "Dinner Key",
    "Epic Marina Downtown",
    "Miami Beach Marina | 300 Alton Rd",
    "Miami River",
    "Bayside | 401 Biscayne Blvd Miami, FL 33132 United States",
    "Epic Hotel",
    "Haulover | 1975 Ixora Rd, North Miami, FL 33181",
    "Miami river EPIC (broker adjustments)",
    "Chamonix Marina",
    "Venitian Marina",
    "Miami Beach Marina J",
    "North Miami Beach",
    "Fountain Bleu",
    "River landing"
  ];

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
                <div className="inputRequest LoCaTion" onClick={() => setLocation(!location)}>
                  <img src={map} alt=""></img>{" "}

                  <p style={{ width: "96%" }}>{selectedlocation}</p>

                </div>
                {location && (
                  <div className="LoCationValue" onClick={() => setLocation(!location)}>
                    {locations.map((item, index) => (
                      <li key={index} onClick={setLocations}>{item}</li>
                    ))}
                  </div>
                )}

                <div className="inputRequest CalaNder" onClick={() => setOpenDate(!openDate)}>
                  <img src={calander} alt="" />
                  <span >
                    {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                  </span>
                </div>

                <div onClick={() => setOpenDate(!openDate)}>
                  {openDate && (
                    <DateRangePicker
                      editableDateInputs={true}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      onChange={(item) => setDate([item.selection])}
                      className="dateRange"
                    />
                  )}
                </div>

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
