import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../Style/SignUp.css";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from '../../utils/UserContext';
import { useAuth } from "../../utils/AuthContext";
import logo from "../../images/logo.svg";
import facebook from "../../images/Group 45.svg";
import youtube from "../../images/Group 44.svg";
import linkedin from "../../images/Group 43.svg";
import twiter from "../../images/Group 42.svg";
import fb from "../../images/fb.svg";
import google from "../../images/google+.svg";
import backendURL from "../../AxiosApi";



export default function SignUp() {
  const { setUser } = useContext(UserContext);
  const { login } = useAuth();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNo: "",
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data)
  };
 

  // Set up the interceptor before making any Axios requests
  useEffect(() => {
    const axiosInterceptor = axios.interceptors.request.use(
      (config) => {
        const authToken = localStorage.getItem("authToken");

        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(axiosInterceptor);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backendURL}/user/register`,
        data
      );
      if (response.status === 200 && response.data ) {
        const logedInuser = response.data;
        console.log(logedInuser)
        if (logedInuser) {
          const authToken = response.data.authToken;
          console.log(authToken)
          login(authToken);
          localStorage.setItem("authToken", authToken);
  
          navigate("/");
          setUser(logedInuser);
        }
      } else {
        console.error("Unexpected response structure:", response);
      }
    } catch (error) {
      console.error("API request error:", error);
    }
  };
  return (
    <>
      <div className="signupPage">
        <div className="signUpheader">
          <img src={logo} alt=""></img>
        </div>
        <div className="wrapper signUpCont">
          {/* <div className="signCenter"> */}
          <div className="signupCenter">
            <div className="signupCenterL">
              <div className="mask">
                <h1>Welcome to Yachtbuddy!</h1>
                <p>
                  We hope you enjoy your time on the water. We are here to help
                  you create an unforgettable experience with your family and
                  friends.
                </p>
              </div>
            </div>
            <div className="signupCenterR">
              <h1>Join The Crew</h1>
              <form>
                <input
                  type="text"
                  placeholder="User Name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                ></input>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                ></input>
                <input
                  type="number"
                  placeholder="Phone Number"
                  name="mobileNo"
                  value={data.mobileNo}
                  onChange={handleChange}
                ></input>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                ></input>
              </form>

              <div className="loggedMe">
                <span>
                  <input type="checkbox"></input>
                  <p>Keep me logged in</p>
                </span>
                <p>Forgot Password</p>
              </div>
              <button onClick={handleSubmit}>Sign Up</button>
              <div className="lineOr">
                <div className="orLine"></div>
                <h5>Or</h5>
                <div className="orLine"></div>
              </div>
              <div className="socialButton">
                <label>
                  <div style={{ backgroundColor: "#4867AA" }}>
                    <img src={fb} alt=""></img>
                  </div>
                  <span style={{ backgroundColor: "#3B5998" }}>Facebook</span>
                </label>
                <label>
                  <div style={{ backgroundColor: "#DB4437" }}>
                    <img src={google} alt=""></img>
                  </div>
                  <span style={{ backgroundColor: "#CC3333" }}>Google +</span>
                </label>
           <NavLink to="/login"><label>Log In</label></NavLink>
              </div>
              <div className="haveAcnt">
                <p>You Have an Account ?</p>
                <p style={{ color: "#47B7AC" }}>Sign In</p>
              </div>
            </div>
          </div>
          {/* </div> */}
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
