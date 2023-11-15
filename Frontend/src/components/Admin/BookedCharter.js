import React, { useEffect, useState } from "react";
import star from "../../images/star.svg";
import { Link } from "react-router-dom";
import { httpAPI } from "../../AxiosApi";

export default function BookedCharter() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await httpAPI.get(`/booking/all-booking`);
      setData(response.data);
      console.log(response.data[0]._id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bookedCharter">
        <div className="allBoatCard">
        {Array.isArray(data) && data.length > 0 ? (
            data.map((boat, index) => (
              <>
              <p>{data._id}</p>
                <Link to={`/dashboard/booked-Charter-details/${data[0]._id}`} key={index}>
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
                        {boat.durationPrices &&
                        boat.durationPrices.length > 0 ? (
                          boat.durationPrices.map((duration) => (
                            <div key={duration.duration}>
                              ${duration.price}
                              <span className="u-textMiddle">
                                /hour for {duration.duration}
                              </span>
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
                        {boat.durationPrices && (
                          <div className="u-block BoatCard-features">
                            <span className="u-fsSm">
                              {boat.durationPrices[0]}
                            </span>
                            <span className="u-fsSm">{boat.captain}</span>
                          </div>
                        )}

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
      </div>
    </>
  );
}
