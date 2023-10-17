import React from "react";
import "../Style/Features.css";

import featureImg from "../../images/featureImg.png";

export default function Features() {
  return (
    <>
      <div className="features">
        <div className="wrapper featuresMain">
          <div className="featuresL">
            <h2>Features</h2>
            <p>
              As the global leader in peer-to-peer boat rentals, Yacht Buddy
              offers an easy, safe and accessible way to experience on-the-water
              adventure. With boat rentals in 600+ locations, finding a boat is
              easy and with the option to tap into the largest network of USCG
              licensed captains, boating experience is not required.
            </p>
          </div>
          <div className="featuresR">
            <img src={featureImg} alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
}
