import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Style/ListYourBoat.css";
import img1 from "../../images/Mask group (2).png";
import img2 from "../../images/Mask group (3).png";
import img3 from "../../images/Mask group (4).png";
import img4 from "../../images/Mask group (5).png";
import img5 from "../../images/Mask group (6).png";

export default function ListYourBoat() {
  useEffect(()=>{
    AOS.init({duration:3000});
      });
  return (
    <>
      <div className="listBoat wrapper">
        <span data-aos="fade-down">List Your Boat is Quick Easy</span>
        <h1 data-aos="fade-left">List Your Boat</h1>
        <div className="boatGallary" data-aos="fade-up">
          <div className="boatGallaryL">
            <img src={img1} alt=""></img>
            <div className="imgDescriptionL">
              <h4>United States, New Jersey, US</h4>
              <span>968 kilometres away 5–10 Sep</span>
              <h1>$2000 / 4 hrs</h1>
            </div>
          </div>
          <div className="boatGallaryR">
            <div className="boatGallaryList">
              <img src={img2} alt=""></img>
              <div className="imgDescription">
                <h4>United States, New Jersey, US</h4>
                <span>968 kilometres away 5–10 Sep</span>
                <h1>$2000 / 4 hrs</h1>
              </div>
            </div>
            <div className="boatGallaryList">
              <img src={img3} alt=""></img>
              <div className="imgDescription">
                <h4>United States, New Jersey, US</h4>
                <span>968 kilometres away 5–10 Sep</span>
                <h1>$2000 / 4 hrs</h1>
              </div>
            </div>
            <div className="boatGallaryList">
              <img src={img4} alt=""></img>
              <div className="imgDescription">
                <h4>United States, New Jersey, US</h4>
                <span>968 kilometres away 5–10 Sep</span>
                <h1>$2000 / 4 hrs</h1>
              </div>
            </div>
            <div className="boatGallaryList">
              <img src={img5} alt=""></img>
              <div className="imgDescription">
                <h4>United States, New Jersey, US</h4>
                <span>968 kilometres away 5–10 Sep</span>
                <h1>$2000 / 4 hrs</h1>
              </div>
            </div>
          </div>
        </div>
        <button>Learn More</button>
      </div>
    </>
  );
}
