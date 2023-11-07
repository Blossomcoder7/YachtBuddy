import React, { useEffect, useState } from 'react';
import "./Style/ListedBoats.css";
import { httpAPI } from "../../AxiosApi";
import BoatDetailsModal from './OwnerBoatDetailsModel';

export default function OwnerInquiry() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    console.log(selectedItem)
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  // Function to format the date as DD/MM/YYYY
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const fetchData = async () => {
    try {
      console.log("Owner Inquiry")
      const response = await httpAPI.get(`/inquiry/ownerInquiry`);
      const formattedData = response.data.inquiries.map((item) => ({
        ...item,
        date: {
          startDate: formatDate(item.date[0].startDate),
          endDate: formatDate(item.date[0].endDate),
        },
      }));
      setData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="listedBOaTs">
        <div className="listedBoatCont">
          <div className="ListedBoatHead">
            <div className="ListBoatCont">Name</div>
            <div className="ListBoatCont">Start Date</div>
            <div className="ListBoatCont">End Date</div>
            <div className="ListBoatCont">Passenger</div>
            <div className="ListBoatCont">Duration</div>
            <div className="ListBoatCont">Status</div>
          </div>
          {data.map((item) => (
            <div key={item._id} className="ListedBoatHead ListedBoatHeadC">
              <div className="ListBoatCont">{item.username}</div>
              <div className="ListBoatCont">{item.date.startDate}</div>
              <div className="ListBoatCont">{item.date.endDate}</div>
              <div className="ListBoatCont">{item.passenger}</div>
              <div className="ListBoatCont">{item.duration}</div>
              <div className="ListBoatCont view">
                <button onClick={() => openModal(item)} style={{ fontSize: "18px", border: "0", background: "transparent", cursor: "pointer" }}>View</button>
              </div>
            </div>
          ))}
          {selectedItem && (
            <BoatDetailsModal
              item={selectedItem}
              closeModal={closeModal}
            />
          )}
        </div>
      </div>
    </>
  );
}
