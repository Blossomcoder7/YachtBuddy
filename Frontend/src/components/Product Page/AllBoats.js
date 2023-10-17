import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";
import "./AllBoats.css";
import star from "../../images/star.svg";
import aboutImg from "../../images/aboutImg.png";

export default function AllBoats() {
  const { category } = useParams();
  console.log(category)
 
  const boatData = [
    {
      location: "ST.CLAIR SHORES, MI",
      rating: "5.0",
      bookings: "10",
      productName: "Lake Pleasant enjoy a new 2023 Yamaha SX190 Jetboat",
      hour: "6-8",
      captain: "No Captain",
      passanger: "8",
      id:1
    },
    {
      location: "ST.CLAIR SHORES, MI",
      rating: "5.0",
      bookings: "10",
      productName: "Lake Pleasant enjoy a new 2023 Yamaha SX190 Jetboat",
      hour: "6-8",
      captain: "No Captain",
      passanger: "8",
      id:2
    },
    {
      location: "ST.CLAIR SHORES, MI",
      rating: "5.0",
      bookings: "10",
      productName: "Lake Pleasant enjoy a new 2023 Yamaha SX190 Jetboat",
      hour: "6-8",
      captain: "No Captain",
      passanger: "8",
      id:3
    },
    {
      location: "ST.CLAIR SHORES, MI",
      rating: "5.0",
      bookings: "10",
      productName: "Lake Pleasant enjoy a new 2023 Yamaha SX190 Jetboat",
      hour: "6-8",
      captain: "No Captain",
      passanger: "8",
      id:4
    },
    {
      location: "ST.CLAIR SHORES, MI",
      rating: "5.0",
      bookings: "10",
      productName: "Lake Pleasant enjoy a new 2023 Yamaha SX190 Jetboat",
      hour: "6-8",
      captain: "No Captain",
      passanger: "8",
      id:5
    },
    {
      location: "ST.CLAIR SHORES, MI",
      rating: "5.0",
      bookings: "10",
      productName: "Lake Pleasant enjoy a new 2023 Yamaha SX190 Jetboat",
      hour: "6-8",
      captain: "No Captain",
      passanger: "8",
      id:6
    },
    {
      location: "ST.CLAIR SHORES, MI",
      rating: "5.0",
      bookings: "10",
      productName: "Lake Pleasant enjoy a new 2023 Yamaha SX190 Jetboat",
      hour: "6-8",
      captain: "No Captain",
      passanger: "8",
      id:7
    },
    {
      location: "ST.CLAIR SHORES, MI",
      rating: "5.0",
      bookings: "10",
      productName: "Lake Pleasant enjoy a new 2023 Yamaha SX190 Jetboat",
      hour: "6-8",
      captain: "No Captain",
      passanger: "8",
      id:8
    },
    {
      location: "ST.CLAIR SHORES, MI",
      rating: "5.0",
      bookings: "10",
      productName: "Lake Pleasant enjoy a new 2023 Yamaha SX190 Jetboat",
      hour: "6-8",
      captain: "No Captain",
      passanger: "8",
      id:9
    },
    {
      location: "ST.CLAIR SHORES, MI",
      rating: "5.0",
      bookings: "10",
      productName: "Lake Pleasant enjoy a new 2023 Yamaha SX190 Jetboat",
      hour: "6-8",
      captain: "No Captain",
      passanger: "8",
      id:10
    },
    {
      location: "ST.CLAIR SHORES, MI",
      rating: "5.0",
      bookings: "10",
      productName: "Lake Pleasant enjoy a new 2023 Yamaha SX190 Jetboat",
      hour: "6-8",
      captain: "No Captain",
      passanger: "8",
      id:11
    },
    {
      location: "ST.CLAIR SHORES, MI",
      rating: "5.0",
      bookings: "10",
      productName: "Lake Pleasant enjoy a new 2023 Yamaha SX190 Jetboat",
      hour: "6-8",
      captain: "No Captain",
      passanger: "8",
      id:12
    },
  ];
  const pageSize = 18;
  const totalPages = Math.ceil(boatData.length / pageSize);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedBoats = boatData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <Navbar />
      <div className="allBoat">
        <div className="wrapper">
          <div className="allBoatHead">
            <h1>{category}</h1>
            <div className="searchBoat">
              <form>
                <input type="text" placeholder="Enter a Location"></input>
                <select id="captain">
                  <option>Captain?</option>
                  <option value="banana">Captained</option>
                  <option value="cherry">No Captain</option>
                </select>
                <select id="captain">
                  <option>Passangers</option>
                  <option>2 Passangers</option>
                  <option>3 Passangers</option>
                  <option>4 Passangers</option>
                  <option>5 Passangers</option>
                  <option>6 Passangers</option>
                  <option>7 Passangers</option>
                  <option>8 Passangers</option>
                  <option>9 Passangers</option>
                  <option>10 Passangers</option>
                  <option>11 Passangers</option>
                  <option>12 Passangers</option>
                  <option>13 Passangers</option>
                  <option>13+ Passangers</option>
                </select>
                {/* <input type="button" placeholder="Search"></input> */}
                <button> Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="allBoatLower">
          <h2>Our top {`${category}`}</h2>
          <div className="allBoatCard">
            {displayedBoats.map((boat, index) => (
                <Link to={`/singleBoat/${boat.id}`}>
              <div className="singleBoatCard">
                <div className="singleBoatCardL">
                  <img
                    src="https://cdn.boatsetter.com/boat_photos/boat_images/000/445/470/rectangle_651_434/boat_image?1689774991"
                    alt=""
                  ></img>
                  <div class="BoatPrice-tag">
                    <img
                      alt="Icon"
                      class="u-mr05"
                      src="//www.boatsetter.com/assets/instant-black-67d25d7eb46a5a44b8ab863215dbfbee3ecfc67677710e3b631ee7087b6d0083.png"
                    />
                    $75+
                    <span class="u-textMiddle">/hour</span>
                  </div>
                </div>
                <div className="singleBoatCardR">
                  <div className="boatRating">
                    <span class="flex ">
                      <p style={{ fontSize: "12px" }}>{boat.location}</p>
                      <div class="flex star">
                        <img src={star} alt="" />
                        <p>
                          {boat.rating} ({boat.bookings}bookings)
                        </p>
                      </div>
                    </span>
                    <h5>{boat.productName}</h5>
                    <div class="u-block BoatCard-features">
                      <span class="u-fsSm">{boat.hour}</span>
                      <span class="u-fsSm">{boat.captain}</span>
                    </div>
                    <div class="u-block BoatCard-features">
                      <span class="u-fsSm">
                        Up to {boat.passanger} passengers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
          <div className="pagination">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 36 36"
            >
              <path
                fill="currentColor"
                d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm8 15.57a1.43 1.43 0 0 1-2 0L19.4 13v14.14a1.4 1.4 0 0 1-2.8 0v-14l-4.43 4.43a1.4 1.4 0 0 1-2-2l7.91-7.87L26 15.59a1.4 1.4 0 0 1 0 1.98Z"
                class="clr-i-solid clr-i-solid-path-1"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </svg>
            <span>
              {" "}
              {currentPage} of {totalPages}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 36 36"
            >
              <path
                fill="currentColor"
                d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm8 15.57a1.43 1.43 0 0 1-2 0L19.4 13v14.14a1.4 1.4 0 0 1-2.8 0v-14l-4.43 4.43a1.4 1.4 0 0 1-2-2l7.91-7.87L26 15.59a1.4 1.4 0 0 1 0 1.98Z"
                class="clr-i-solid clr-i-solid-path-1"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </svg>
          </div>
          <div className="lineDivider"></div>

          <div class="Container">
            <h2>How to rent a party boat?</h2>
            <div class="Grid">
              <div class="Grid-cell">
                <span class="Circle Circle--sm Circle--blackBorder u-mb1 u-style1 u-textSemiBold">
                  1
                </span>
                <h3>Find the perfect boat</h3>
                <p>
                  Enter your desired location and date to explore our fleet of
                  party boats.
                </p>
              </div>
              <div class="Grid-cell">
                <span class="Circle Circle--sm Circle--blackBorder u-mb1 u-style1 u-textSemiBold">
                  2
                </span>
                <h3>Select a captain</h3>
                <p>
                  Choose to drive yourself or select a USCG licensed captain.
                </p>
              </div>
              <div class="Grid-cell">
                <span class="Circle Circle--sm Circle--blackBorder u-mb1 u-style1 u-textSemiBold">
                  3
                </span>
                <h3>Book with ease</h3>
                <p>
                  Connect with your boat owner and complete your booking online.
                </p>
              </div>
              <div class="Grid-cell">
                <span class="Circle Circle--sm Circle--blackBorder u-mb1 u-style1 u-textSemiBold">
                  4
                </span>
                <h3>Set sail</h3>
                <p>Enjoy your day on the water with friends and family!</p>
              </div>
            </div>
          </div>

          <div className="lineDivider"></div>

          <div className="aboutUs1">
            <div className="wrapper aboutMain1">
              <div className="aboutL">
                <img src={aboutImg} alt=""></img>
              </div>
              <div className="aboutR">
                <h2>Why YachtBuddy?</h2>
                <p>
                  As the global leader in peer-to-peer boat rentals, Boatsetter
                  offers an easy, safe and accessible way to experience
                  on-the-water adventure. With boat rentals in 600+ locations,
                  finding a boat is easy and with the option to tap into the
                  largest network of USCG licensed captains, boating experience
                  is not required.
                </p>
              </div>
            </div>
          </div>

          <div className="lineDivider"></div>

<div className=""></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
