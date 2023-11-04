import axios from 'axios'
import React, { useEffect, useState } from 'react'
import backendURL, { httpAPI } from "../../AxiosApi";
import { Link } from 'react-router-dom';
import star from "../../images/star.svg";



export default function OwnerBoats() {
  const [boats, setBoats] = useState([]);
  const [image, setImage] = useState([]);


  const fetchBoats = async () => {
    try {
      const response = await httpAPI.get(`/boat/ownerBoat`);
      console.log(response.data.boat)
      if (response.status === 200) {
        setBoats(response.data.boat);
      } else if (response.status === 404) {
        alert("No Boat Found");
      }

    } catch (error) {
      console.error('Error fetching boats:', error);
    }
  };
  const fetchImages = async () => {
    try {
      const response = await axios.get(`${backendURL}/img/boatImage`);
      console.log(response.data)
      if (response.status === 200) {
        setImage(response?.data?.files);
      } else if (response.status === 404) {
        alert("No Image Found");
      }

    } catch (error) {
      console.error('Error fetching boats:', error);
    }
  };
  useEffect(() => {
    fetchBoats();
    fetchImages();
  }, []);

  // const getImageUrl = (image) => {
  //   console.log(image);
  //   if (image && image.path) {
  //     // const imagePath = image.path.replace(/\\/g, '/');
  //     console.log(`http://localhost:5000/${image}`)
  //     return `http://localhost:5000/${image}`;
  //   }
  //   return '';
  // };

  return (
    <>
      <div className='AllBoat' style={{ width: "100%",overflowY:"scroll", display: "flex", padding: "30px", flexDirection: "column", alignItems: "center" }}>
        <h2>Boats Listed by Owner</h2>
        <div className="allBoatCard">
          {boats.length > 0 ? (
            boats.map((boat, index) => (
              <Link to={`/singleBoat/${boat._id}`} key={index}>
                <div className="singleBoatCard">
                  <div className="singleBoatCardL">
                    <img
                      src="https://cdn.boatsetter.com/boat_photos/boat_images/000/445/470/rectangle_651_434/boat_image?1689774991"
                      alt=""
                    ></img>
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
                        <span>No pricing information available</span>
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
            ))
          ) : (
            <p>No boats available.</p>
          )}
        </div>
      </div>

    </>
  )
}

