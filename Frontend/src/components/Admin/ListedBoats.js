import React, { useEffect, useState } from "react";
import "./Style/ListedBoats.css";
import axios from "axios";
import BoatDetails from "./BoatDetails";
import { NavLink } from "react-router-dom";
import backendURL from "../../AxiosApi";

export default function ListedBoats() {
  const [data, setData] = useState([]);
  const [selectedBoat, setSelectedBoat] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${backendURL}/admin/listedBoats`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleViewClick = (boat) => {
    setSelectedBoat(boat);
  };

  const handleAcceptClick = async (boat) => {
    try {
      // Assuming you have a backend server running on ${backendURL}
      await axios.post(`${backendURL}/admin/acceptBoat/${boat._id}`);
      // Reload the boat listings after accepting
      fetchData();
      alert("The Boat Accept Successfully");
    } catch (error) {
      console.error('Error accepting boat:', error);
    }
  };

  const handleDeleteClick = async (boat) => {
    try {
      // Assuming you have a backend server running on ${backendURL}
      await axios.delete(`${backendURL}/admin/deleteBoat/${boat._id}`);
      // Remove the deleted boat from the state
      setData((prevData) => prevData.filter((item) => item._id !== boat._id));
    } catch (error) {
      console.error('Error deleting boat:', error);
    }
  };

  return (
    <>
      <div className="listedBOaTs">
        <div className="listedBoatCont">
          <div className="ListedBoatHead">
            <div className="ListBoatCont">Owner Name</div>
            <div className="ListBoatCont">Location Type</div>
            <div className="ListBoatCont">Location</div>
            <div className="ListBoatCont">Categories</div>
            <div className="ListBoatCont">View</div>
            <div className="ListBoatCont">Status</div>
          </div>
          {data.map((item) => (
            <div key={item._id} className="ListedBoatHead ListedBoatHeadC">
              <div className="ListBoatCont">{item.username}</div>
              <div className="ListBoatCont">{item.locationType}</div>
              <div className="ListBoatCont">{item.state}, {item.country}</div>
              <div className="ListBoatCont">{item.cateogiry}</div>
              <div className="ListBoatCont view">
                <span onClick={() => handleViewClick(item)}>View</span>
              </div>
              <div className="ListBoatCont sTatusBtn">
                <button className="acceptBtn" onClick={() => handleAcceptClick(item)}>
                  Accept
                </button>
                <button onClick={() => handleDeleteClick(item)}>Delete</button>
              </div>
            </div>
          ))}
          {selectedBoat && <BoatDetails boat={selectedBoat} />}
        </div>
      </div>
    </>
  );
}
