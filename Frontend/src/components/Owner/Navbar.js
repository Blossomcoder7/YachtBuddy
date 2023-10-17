import React, { useContext } from 'react';
import search from "../../images/search 1.svg"
import "./Style/NavBar.css";
import profile from "../../images/profile.png"
import notification from "../../images/alarm-bell.png"
import arrow from "../../images/down-arrow.png"
import { UserContext } from '../../utils/UserContext';



export default function Navbar() {
  const {user} = useContext(UserContext);

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
<img src={arrow} alt='' className='prfArrow'></img>
    </div>
   </div>
   </>
  )
}
