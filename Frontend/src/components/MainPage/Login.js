import React, { useContext, useState } from "react";
import axios from "axios";
import "../Style/SignUp.css";
import { UserContext } from "../../utils/UserContext";
import { useAuth } from "../../utils/AuthContext";
import logo from "../../images/logo.svg";
import facebook from "../../images/Group 45.svg";
import youtube from "../../images/Group 44.svg";
import linkedin from "../../images/Group 43.svg";
import twiter from "../../images/Group 42.svg";
import fb from "../../images/fb.svg";
import google from "../../images/google+.svg";
import { useNavigate } from "react-router-dom";
import backendURL from "../../AxiosApi";


export default function Login() {
  const { setUser } = useContext(UserContext);
  const { login } = useAuth();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendURL}/user/login`,data);
      const logedInuser = response?.data?.data?.user;
console.log(response.data)
      if (response.status === 200 && logedInuser) {
        const authToken = response.data.authToken;
        console.log(authToken);
        setUser(logedInuser);
        localStorage.setItem("authToken", authToken);
        login(authToken);

       axios.interceptors.request.use(
          (config) => {
    console.log(authToken)
            if (authToken) {
              config.headers.Authorization = `Bearer ${authToken}`;
            }    
            return config;  
          },
          (error) => {
            return Promise.reject(error);
          }
        );
        if (logedInuser.role === "user") {
          navigate("/");
          setUser(logedInuser);
        }
        
        if (logedInuser.role === "owner") {
          navigate("/ownerDashboard");
          setUser(logedInuser);
        }
        
        if (logedInuser.role === "admin") {
          navigate("/dashboard");
          setUser(logedInuser);
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <div className="signupPage">
        <div className="signUpheader">
          <img src={logo} alt=""></img>
        </div>
        <div className="wrapper">
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
                  placeholder="Email"
                  name="email"
                  value={data.email}
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
              <button onClick={handleSubmit}>Log In</button>
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
                <label>Sign Up</label>
              </div>
              <div className="haveAcnt">
                <p>Don't have an account?</p>
                <p style={{ color: "#47B7AC" }}>Sign Up</p>
              </div>
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
