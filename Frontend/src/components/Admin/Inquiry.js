import React, { useEffect, useState } from 'react';
import "./Style/ListedBoats.css";
import axios from 'axios';
import backendURL from "../../AxiosApi";

export default function Inquiry() {
  const [data, setData] = useState([]);

  // Function to format the date as DD/MM/YYYY
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${backendURL}/inquiry/allInquiry`);
      const formattedData = response.data.inquiry.map((item) => ({
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
                <span >View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
