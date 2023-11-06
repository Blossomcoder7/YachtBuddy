import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";
import "./AllBoats.css";
import star from "../../images/star.svg";
import aboutImg from "../../images/aboutImg.png";
import { httpAPI } from '../../AxiosApi';


export default function AllBoats() {
  const { category } = useParams();
  const [data, setData] = useState([]);

  console.log(category)


  const pageSize = 18;
  const totalPages = Math.ceil(data.length / pageSize);

  const [currentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  // const displayedBoats =
  data.slice(startIndex, endIndex);

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const handlePrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  const fetchData = async () => {
    try {
      const response = await httpAPI.get(`/boat/${category}`);
      setData(response.data.boat);
      console.log(response.data.boat)

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            {data.length > 0 ? (
              data.map((boat, index) => (
                <>
                  <Link to={`/singleBoat/${boat._id}`} key={index}>
                    <div className="singleBoatCard">
                      <div className="singleBoatCardL">
                        <img
                          src={`https://theyachtbuddy.com/uploads/${boat.images[0].filename}`}
                          alt=""
                        />
                        <div className="BoatPrice-tag">
                          <img
                            alt="Icon"
                            className="u-mr05"
                            src="//www.boatsetter.com/assets/instant-black-67d25d7eb46a5a44b8ab863215dbfbee3ecfc67677710e3b631ee7087b6d0083.png"
                          />
                          {boat.durationPrices && boat.durationPrices.length > 0 ? (
                            boat.durationPrices.map((duration) => (
                              <div key={duration.duration}>
                                ${duration.price}
                                <span className="u-textMiddle">/hour for {duration.duration}</span>
                              </div>
                            ))
                          ) : (
                            <span>Get A Quotaion</span>
                          )}
                        </div>
                      </div>
                      <div className="singleBoatCardR">
                        <div className="boatRating">
                          <span className="flex ">
                            <p style={{ fontSize: "12px" }}>{boat.boatAddress}</p>
                            <div className="flex star">
                              <img src={star} alt="" />
                              <p>
                                {boat.rating} ({boat.bookings} bookings)
                              </p>
                            </div>
                          </span>
                          <h5>{boat.model}</h5>
                          {boat.durationPrices && <div className="u-block BoatCard-features">
                            <span className="u-fsSm">{boat.durationPrices[0]}</span>
                            <span className="u-fsSm">{boat.captain}</span>
                          </div>}

                          <div className="u-block BoatCard-features">
                            <span className="u-fsSm">
                              Up to {boat.passangerCapacity} passengers
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              ))
            ) : (
              <p>No boats available.</p>
            )}
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
                className="clr-i-solid clr-i-solid-path-1"
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
                className="clr-i-solid clr-i-solid-path-1"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </svg>
          </div>
          <div className="lineDivider"></div>

          <div className="Container">
            <h2>How to rent a party boat?</h2>
            <div className="Grid">
              <div className="Grid-cell">
                <span className="Circle Circle--sm Circle--blackBorder u-mb1 u-style1 u-textSemiBold">
                  1
                </span>
                <h3>Find the perfect boat</h3>
                <p>
                  Enter your desired location and date to explore our fleet of
                  party boats.
                </p>
              </div>
              <div className="Grid-cell">
                <span className="Circle Circle--sm Circle--blackBorder u-mb1 u-style1 u-textSemiBold">
                  2
                </span>
                <h3>Select a captain</h3>
                <p>
                  Choose to drive yourself or select a USCG licensed captain.
                </p>
              </div>
              <div className="Grid-cell">
                <span className="Circle Circle--sm Circle--blackBorder u-mb1 u-style1 u-textSemiBold">
                  3
                </span>
                <h3>Book with ease</h3>
                <p>
                  Connect with your boat owner and complete your booking online.
                </p>
              </div>
              <div className="Grid-cell">
                <span className="Circle Circle--sm Circle--blackBorder u-mb1 u-style1 u-textSemiBold">
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
