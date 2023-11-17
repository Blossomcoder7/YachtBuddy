import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { httpAPI } from "../../AxiosApi";
import { useParams } from "react-router-dom";

export default function BookedCharterDetail() {
  const { id } = useParams();
  const currentDate = new Date();
  const [bookedDates, setBookeddates] = useState([]);
  const [data, setData] = useState([]);

  const formattedBookedDates = bookedDates.map((dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  });

  const bookedDatesHandler = async () => {
    try {
      const response = await httpAPI.get(`/boat/bookedDates/${id}`);

      const formattedDates = response.data.bookedDates.map((date) => {
        const originalDate = new Date(date);
        return originalDate.toLocaleDateString("en-GB");
      });

      console.log(formattedDates);
      setBookeddates(formattedDates);
    } catch (error) {
      console.log(error);
    }
  };
  const bookingHandler = async () => {
    try {
      const response = await httpAPI.get(`/booking/bookingDetail/${id}`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    bookedDatesHandler();
    bookingHandler();
  }, []);
  return (
    <>
      <div className="bookedCharterDetail" style={{padding:"30px"}}>
            <h1 style={{textAlign:"center"}}>Booked Dates</h1>
        <div className="bookedDates" style={{width:"95%", display:"flex",justifyContent:"space-around"}}>
        <div style={{width:"50%",display:"flex",flexWrap:"wrap",alignItems:"center"}}>
            {bookedDates.map((item,index)=>(
              <p key={index} style={{width:"calc(20% - 30px)",padding:"5px 10px",background:"orange",margin:"2px",color:"white"}}>{item}</p>
            ))}
          </div>
          <DateRange
            minDate={currentDate}
            editableDateInputs={false}
            moveRangeOnFirstSelection={false}
            // ranges={date}
            // onChange={handleSelect}
            disabledDates={formattedBookedDates}
          />
          
        </div>
      </div>
      <div className="listedBOaTs">
        <div className="listedBoatCont">
          <div className="ListedBoatHead">
            <div className="ListBoatCont">Name</div>
            <div className="ListBoatCont">Start Date</div>
            <div className="ListBoatCont">End Date</div>
            <div className="ListBoatCont">Passenger</div>
            <div className="ListBoatCont">Duration</div>
            <div className="ListBoatCont">Price</div>
          </div>
          {data.map((item) => (
            <div key={item._id} className="ListedBoatHead ListedBoatHeadC">
              <div className="ListBoatCont">{item?.userName}</div>
              <div className="ListBoatCont">{item?.startDate.substring(0,10)}</div>
              <div className="ListBoatCont">{item?.endDate.substring(0,10)}</div>
              <div className="ListBoatCont">{item?.passenger}</div>
              <div className="ListBoatCont">{item?.duration}</div>
              <div className="ListBoatCont">{item?.totalPrice}</div>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
