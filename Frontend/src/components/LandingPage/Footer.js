import React from "react";
import "../Style/Footer.css";
import logo from "../../images/logoFooter.svg";
import facebook from "../../images/Group 45.svg";
import youtube from "../../images/Group 44.svg";
import linkedin from "../../images/Group 43.svg";
import twiter from "../../images/Group 42.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer wrapper">
        <div className="footerU">
          <div className="footerU-1 footerU-2">
            <img src={logo} alt=""></img>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="footerU-1">
            <h4>Quick Links</h4>
            <ul>
              <Link to="/charter">   <li>Charter</li></Link>
              <Link to="/listYourBoat"> <li>List Your Boat</li></Link>
              <Link to="/aboutUs"> <li>About Us</li></Link>
              <Link to="/support"> <li>Support</li></Link>
            </ul>
          </div>
          <div className="footerU-1">
            {" "}
            <h4>Community</h4>
            <ul>
              <li>Search Boat</li>
              <Link to="/listYourBoat">  <li>List Your Boat</li></Link>
              <li>Blog</li>
              <li>Boating Guides</li>
              <li>Safety Tips</li>
            </ul>
          </div>
          <div className="footerU-1">
            {" "}
            <h4>Top Location</h4>
            <ul>
              <li>Chicago</li>
              <li>New York City</li>
              <li>Washington DC</li>
              <li>San Francisco</li>
              <li> Global</li>
            </ul>
          </div>
        </div>
        <div className="footerDivider"></div>
        <div className="footerD">
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
    </>
  );
}
