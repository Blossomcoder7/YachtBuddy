import React, { useState } from "react";
import "../Style/SignUp.css";
import logo from "../../images/logo.svg";
import facebook from "../../images/Group 45.svg";
import youtube from "../../images/Group 44.svg";
import linkedin from "../../images/Group 43.svg";
import twiter from "../../images/Group 42.svg";


export default function RequestForm() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputType, setInputType] = useState("text");

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleFocus = () => {
    setIsFocused(true);
    setInputType((prevInputType) => "date");
  };

  const handleBlur = () => {
    setIsFocused(false);
    setInputType((prevInputType) => "text");
  };
  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // const { updateUser } = useContext(UserContest);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await axios.post(`${backendURL}/user/login`, data);
    // const logedInuser = response?.data?.data?.user;
    // console.log(logedInuser.name);
    // if (response.status === 200 && logedInuser) {
    //   // navigate("/");
    // }
    // console.log(response);
  };
  return (
    <>
      <div className="signupPage">
        <div className="signUpheader">
          <img src={logo} alt=""></img>
        </div>
        <div className="wrapper">
          <div className="signupCenter">
            <div className="signupCenterL1">
              <div className="mask1">
                <h1>Welcome to Yachtbuddy!</h1>
                <p>
                  We hope you enjoy your time on the water. We are here to help
                  you create an unforgettable experience with your family and
                  friends.
                </p>
              </div>
            </div>
            <div className="signupCenterR">
              <h1>Request Form</h1>
              <form>
                <select>
                  <option value="option1">Duration </option>
                  <option value="option1">4 Days</option>
                  <option value="option2">6 Days</option>
                  <option value="option3">8 Days</option>
                  <option value="option3">Multidays</option>
                </select>

                <input
                  type={inputType}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder={
                    isFocused ? "Input is focused" : "Choose Your Date"
                  }
                ></input>
                <select>
                  <option value="option1">Pick Up Time </option>
                  <option value="option1">10pm</option>
                  <option value="option2">12pm</option>
                  <option value="option3">3am</option>
                  <option value="option3">4am</option>
                </select>
                <input
                  type="number"
                  placeholder="Passanger"
                  name="passanger"
                  value={data.passanger}
                  onChange={handleChange}
                ></input>
                <textarea id="myTextarea" rows="4" cols="50">
                  Other
                </textarea>
              </form>
              <div className="price">
                <span>
                    <label>Price :</label>
                    <label>$500</label>
                </span>
              </div>

              <button onClick={handleSubmit} style={{marginBottom:"20px"}}>Next</button>
            </div>
          </div>
        </div>
        <div className="signupFooter">
          <div className="footerD wrapper">
            <div className="footerD-L">
              <p>© 2023 Yachtbuddy. All rights reserved</p>
              <div className="policy">
                <p>Privacy Policy</p>
                <div className="policyDivider"></div>
                <p>Term of use</p>
                <div className="policyDivider"></div>
                <p>Sitemap</p>
              </div>
            </div>
            <div className="footerD-R">
              <img src={facebook} alt=""></img>
              <img src={youtube} alt=""></img>
              <img src={linkedin} alt=""></img>
              <img src={twiter} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
