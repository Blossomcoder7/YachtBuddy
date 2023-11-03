import React, { useContext } from 'react';
import search from "../../images/search 1.svg"
import "./Style/NavBar.css";
import profile from "../../images/profile.png"
import notification from "../../images/alarm-bell.png"
import arrow from "../../images/down-arrow.png"
import { UserContext } from '../../utils/UserContext';
import { useAuth } from '../../utils/AuthContext';
import { NavLink, useNavigate } from "react-router-dom";



export default function Navbar() {
  const { user } = useContext(UserContext);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(null);
    localStorage.clear(null);

    navigate("/")
  };

  return (
    <>
      <div className='naVBar'>
        <span>
          <img src={search} alt=''></img>
          <input type='search' placeholder='Search'></input>
        </span>
        <div className='adminProfile'>
          <img src={notification} alt=''></img>
          <img src={profile} alt=''></img>
          {user ? <p>{user.name}</p> : ""}
          <div className='dropdown'>
            <img src={arrow} alt='' className='prfArrow'></img>
            <div className="dropdown-content dropdown-content-1">
              <NavLink to='/'> <p >DashBoard</p></NavLink>
              <p>Edit Profile</p>
              <p onClick={handleLogout}>Log Out</p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
