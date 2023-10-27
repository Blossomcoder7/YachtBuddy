import React from "react";
import "../Style/GoogleMap.css";
import srch from "../../images/search 1.svg"

export default function GoogleMap() {
  return (
    <>
    <div className="googleMap">
        <span>
        <input type="search" placeholder="Search Google Maps"></input>
        <img src={srch} alt=""></img>
        </span>
      <iframe
      title="Google Search Results for 'Web Accessibility Guidelines'"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24123585.23980001!2d-168.54956356864756!3d68.34381970734397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694423212287!5m2!1sen!2sin"
        width="1900"
        height="800"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <button> Book Now</button>
      </div>
    </>
  );
}
