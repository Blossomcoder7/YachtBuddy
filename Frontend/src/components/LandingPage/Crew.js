import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Style/Crew.css";
import search from "../../images/search 1.svg";
import message from "../../images/message 1.svg";
import book from "../../images/booking 1.svg";
import fun from "../../images/laugh 1.svg";

export default function Crew() {

  const [srch, setSrch] = useState("Search");
  const [msg, setMsg] = useState("Message");
  const [bok, setBok] = useState("Book");
  const [havefun, setHavefun] = useState("Have Fun");
  const [active, setActive] = useState("renter");


  const fuctn = (e) =>{
    const id = e.currentTarget.id;
    handleItemClick(id);
    dataHandel(id);

  }
    const handleItemClick = (id) => {
      if (active === id) {
        setActive(null);
      } else {
        setActive(id); 
      }
    };


  const dataHandel = (targetId) => {
    // const targetId = e.currentTarget.id;
    if("renter" === targetId){
        setSrch("Search");
        setMsg("Message");
        setBok("Book");
        setHavefun("Have Fun");
    }
    else if("owner" === targetId){
        setSrch("List");
        setMsg("Connect");
        setBok("Manage");
        setHavefun("Collect");
    }
    else if("captain" === targetId){
        setSrch("Join");
        setMsg("Connect");
        setBok("Manage");
        setHavefun("Charter");
    }
  };

  useEffect(()=>{
AOS.init({duration:1000});
  },[]);


  return (
    <>
      <div className="crew wrapper">
        {/* <div className="wrapper"> */}
        <div className="crew1" data-aos="flip-left">
          <h1>Grab Your Crew</h1>
          <div className="crew1Button">
            <h3 className={active === 'renter' ? 'active' : ''} id="renter" onClick={fuctn} >
              Renter
            </h3>
            <h3 id="owner" className={active === 'owner' ? 'active' : ''} onClick={fuctn}>
              Owner
            </h3>
            <h3 id="captain" className={active === 'captain' ? 'active' : ''} onClick={fuctn}>
              Captain
            </h3>
          </div>
        </div>
        <div className="crew2" data-aos="fade-up-left" >
          <div className="crew2-comtent crew2-content-col">
            <img src={search} alt=""></img>
            <label>1. {srch}</label>
          </div>
          <div className="crew2-comtent">
            <img src={message} alt=""></img>
            <label>2. {msg}</label>
          </div>
          <div className="crew2-comtent crew2-content-col">
            <img src={book} alt=""></img>
            <label>3. {bok}</label>
          </div>
          <div className="crew2-comtent">
            <img src={fun} alt=""></img>
            <label>4. {havefun}</label>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

