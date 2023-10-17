import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../Style/Navbar.css";
import { UserContext } from '../../utils/UserContext';
import { useAuth } from '../../utils/AuthContext';
import logo from "../../images/logo.svg";
import close from "../../images/close.svg";
import profile from "../../images/Profil.svg";
import logout from "../../images/Union.svg";
import { NavLink, useNavigate } from "react-router-dom";

import facebook from "../../images/Group 45.svg";
import youtube from "../../images/Group 44.svg";
import linkedin from "../../images/Group 43.svg";
import twiter from "../../images/Group 42.svg";

export default function Navbar() {
  const {user} = useContext(UserContext);
  const [active, setActive] = useState(null);
  const [name, setName] = useState("");
  const { authToken,logout } = useAuth();


  const navigate = useNavigate();

  // Check if the user is authenticated
  const isAuthenticated = !!authToken;

  console.log(isAuthenticated)
  // console.log(user.name)

  const handleLogout = () => {
    logout(null);
    localStorage.clear(null);

    navigate("/")
  };

  const handleTabClick = (e) => {
    const value = e.currentTarget.id;
    console.log(value);
    if (active === value) {
      setActive(null);
    } else {
      setActive(value);
    }
  };

  const show = () => {
    document.getElementById("mobileMenu").style.display = "flex";
    document.getElementById("hamburger").style.display = "none";
    document.getElementById("close").style.display = "block";
  };
  const hide = () => {
    document.getElementById("mobileMenu").style.display = "none";
    document.getElementById("hamburger").style.display = "block";
    document.getElementById("close").style.display = "none";
  };
  useEffect(() => {
    handelName();
  },[])
  const handelName = () => {
    if (user && user.name) {
      setName(user.name);
    } else {
      // Handle the case where user or user.name is null
      console.error("User or user name is null");
    }
  }

  return (
    <>
    
      <div className="navbar wrapper">
        <NavLink to="/" className="logoOuter">
          <img src={logo} alt=""></img>
        </NavLink>
        <span>
          <ul className="menu">
            <NavLink to="/">
              {" "}
              <li
                className={active === "home" ? "aactive" : ""}
                id="home"
                onClick={handleTabClick}
              >
                Home
              </li>
            </NavLink>
            <NavLink to="/charter">
              {" "}
              <li
                className={active === "charter" ? "aactive" : ""}
                id="charter"
                onClick={handleTabClick}
              >
                Charter
              </li>
            </NavLink>
            {isAuthenticated ? (<NavLink to="/listYourBoat">
              {" "}
              <li
                className={active === "listBoat" ? "aactive" : ""}
                id="listBoat"
                onClick={handleTabClick}
              >
                List Your Boat
              </li>
            </NavLink>):""}
            
            <NavLink to="/aboutUs">
              {" "}
              <li
                className={active === "about" ? "aactive" : ""}
                id="about"
                onClick={handleTabClick}
              >
                About Us
              </li>
            </NavLink>
            <NavLink to="/support">
              {" "}
              <li
                className={active === "support" ? "aactive" : ""}
                id="support"
                onClick={handleTabClick}
              >
                Support
              </li>
            </NavLink>
          </ul>
          {!isAuthenticated ? (
            <>
              <NavLink to="/signup">
                {" "}
                <button className="signup">Sign Up</button>
              </NavLink>
              <NavLink to="/login">
                {" "}
                <button>Log in</button>
              </NavLink>
            </>
          ) : (
            <>
              <div className="profileD">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"                                                             
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                    <path
                      fill="currentColor"
                      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2ZM8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0Zm9.758 7.484A7.985 7.985 0 0 1 12 20a7.985 7.985 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984Z"
                    />
                  </g>
                </svg>

               <p>{name}</p>
                <button className="signup" onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            </>
          )}
        </span>
        <span className="hamburger" id="hamburger" onClick={show}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            class="icon icon-hamburger"
            fill="none"
            viewBox="0 0 18 16"
          >
            <path
              d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <span className="close" id="close" onClick={hide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            class="icon icon-close"
            fill="none"
            viewBox="0 0 18 17"
          >
            <path
              d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <div className="mobileMenu" id="mobileMenu">
          <div className="profile">
            {/* <img src={profile} alt=""></img> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                <path
                  fill="currentColor"
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2ZM8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0Zm9.758 7.484A7.985 7.985 0 0 1 12 20a7.985 7.985 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984Z"
                />
              </g>
            </svg>
{isAuthenticated ?<p>{name}</p> :<p>Welcome User</p> }
          </div>
          <div className="profileDivider"></div>
          <ul>
            <NavLink to="/">
              {" "}
              <li>Home</li>
            </NavLink>
            <NavLink to="/charter">
              {" "}
              <li>Charter</li>
            </NavLink>
            {user ? (<NavLink to="/listYourBoat">
              {" "}
              <li
                className={active === "listBoat" ? "aactive" : ""}
                id="listBoat"
                onClick={handleTabClick}
              >
                List Your Boat
              </li>
            </NavLink>):""}
            
            <NavLink to="/aboutUs">
              {" "}
              <li>About Us</li>
            </NavLink>
            <NavLink to="/support">
              {" "}
              <li>Support</li>
            </NavLink>
          </ul>
          <div className="profileDivider"></div>
          {user ? (
            <>
              <div className="logout">
                <img src={logout} alt=""></img>
                <label onClick={handleLogout}>Logout Account</label>
              </div>
            </>
          ) : (
            <>
              <div className="btnGrup">
                <NavLink to="/signup">
                  <button className="signBtn">Sign Up</button>
                </NavLink>
                <NavLink to="login">
                  <button className="logBtn">Log In</button>
                </NavLink>
              </div>
            </>
          )}
        </div>
        {/* <img src={menu_icon} alt=''></img> */}
      </div>
    </>
  );
}
