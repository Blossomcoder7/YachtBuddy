import React, { useEffect, useState } from "react";
import "./Style/ListedBoats.css";
import BoatDetails from "./BoatDetails";
import  { httpAPI } from "../../AxiosApi";

export default function ListedBoats() {
  const [data, setData] = useState([]);
  const [selectedBoat, setSelectedBoat] = useState(null);

  const fetchData = async () => {
    try {
      const response = await httpAPI.get(`/admin/listedBoats`);
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
    alert("You are confirming the acceptance of the boat");
    try {
      await httpAPI.post(`/admin/acceptBoat/${boat._id}`);
      // Update the accepted status for this boat
      const updatedData = data.map((item) => {
        if (item._id === boat._id) {
          return { ...item, status: "accepted" };
        }
        return item;
      });
      setData(updatedData);
      alert("The Boat Accepted Successfully");
    } catch (error) {
      console.error('Error accepting boat:', error);
    }
  };
  

  const handleDeleteClick = async (boat) => {
    alert("You are confirming the deletion of the boat");

    try {
      // Assuming you have a backend server running on ${backendURL}
      await httpAPI.delete(`/admin/deleteBoat/${boat._id}`);
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
    <div className="ListBoatCont">{item.state}
    {/* , {item.country} */}
    </div>
    <div className="ListBoatCont">{item.cateogiry.substring(0,20)}</div>
    <div className="ListBoatCont view">
      <span onClick={() => handleViewClick(item)}>View</span>
    </div>
    <div className="ListBoatCont sTatusBtn">
      {item.status === "accepted" ? (
        <p>Accepted</p>
      ) : (
        <button onClick={() => handleAcceptClick(item)} className="acceptBtn">
          Accept
        </button>
      )}
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
