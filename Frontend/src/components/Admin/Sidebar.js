import React from "react";
import logo from "../../images/logo.svg";
import dashboard from "../../images/dashboard.png";
import inquires from "../../images/question.png";
import booked from "../../images/book.png";
// import clander from "../../images/calendar.png";
import message from "../../images/comments.png";
import profile from "../../images/profile.png";
import card from "../../images/credit-card.png";
import notification from "../../images/alarm-bell.png";
import sign from "../../images/log-out.png";
import "./Style/Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../../utils/AuthContext';


export default function Sidebar() {
  const {logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(null);
    localStorage.clear(null);

    navigate("/")
  };
  return (
    <>
      <div className="Sidebar">
        <img src={logo} alt=""></img>
        <ul>
          <NavLink to='/dashboard'>
            <span>
              <img src={dashboard} alt=""></img> <li>Home</li>
            </span>
          </NavLink>
          <NavLink to="/dashboard/inquiry">
            <span>
              <img src={inquires} alt=""></img> <li>Inquiries</li>
            </span>
          </NavLink>
          <NavLink to='/dashboard/listedBoats'>
            <span>
              <img src={booked} alt=""></img> <li>Listed Boats</li>
            </span>
          </NavLink>
          <NavLink to="/dashboard/bookedCharter">
            <span>
              <img src={booked} alt=""></img> <li>Booked Charters</li>
            </span>
          </NavLink>
          {/* <NavLink>
            <span>
              <img src={clander} alt=""></img> <li>Calendar</li>
            </span>
          </NavLink> */}
          <NavLink to='/dashboard/message'>
            <span>
              <img src={message} alt=""></img> <li>Messaging</li>
            </span>
          </NavLink>
          <NavLink to='/dashboard/guestProfile'>
            <span>
              <img src={profile} alt=""></img> <li>Guest Profiles</li>
            </span>
          </NavLink>
          <NavLink>
            <span>
              <img src={card} alt=""></img> <li>Payments</li>
            </span>
          </NavLink>
          <NavLink>
            <span>
              <img src={notification} alt=""></img> <li>Notifications</li>
            </span>
          </NavLink>
          <NavLink to='/listyourboat'>
            <span>
              <img src={profile} alt=""></img> <li>List Boat</li>
            </span>
          </NavLink>
          {/* <NavLink> */}
            <span onClick={handleLogout}>
              <img src={sign} alt=""></img> <li>Sign Out</li>
            </span>
          {/* </NavLink> */}
        </ul>
      </div>
    </>
  );
}
