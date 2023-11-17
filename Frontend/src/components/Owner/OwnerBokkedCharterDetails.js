import React, { useEffect, useState } from "react";
import { DateRange } from 'react-date-range';
import { httpAPI } from '../../AxiosApi';
import { useParams } from "react-router-dom";

function OwnerBookedCharterDetail() {
    const { id } = useParams();
    const currentDate = new Date();
    const [bookedDates, setBookeddates] = useState([]);
  
  
    const formattedBookedDates = bookedDates.map(dateString => {
      const [day, month, year] = dateString.split('/');
      return new Date(`${year}-${month}-${day}`);
    });
  
    const bookedDatesHandler = async () => {
      try {
  
        const response = await httpAPI.get(`/boat/bookedDates/${id}`);
  
        const formattedDates = response.data.bookedDates.map((date) => {
          const originalDate = new Date(date);
          return originalDate.toLocaleDateString('en-GB');
        });
  
  
        console.log(formattedDates);
        setBookeddates(formattedDates);
  
      } catch (error) {
  
      }
    }
  
    useEffect(() => {
      bookedDatesHandler();
    }, []);
  return (
    <>
        <div className="bookedCharterDetail" style={{padding:"30px"}}>
        <div className="bookedDates" style={{width:"100%", display:"flex",justifyContent:"space-around"}}>
          <DateRange
            minDate={currentDate}
            editableDateInputs={false}
            moveRangeOnFirstSelection={false}
            // ranges={date}
            // onChange={handleSelect}
            disabledDates={formattedBookedDates}
          />
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h1>Booked Dates</h1>
            {bookedDates.map((item,index)=>(
              <p key={index} style={{padding:"5px 10px",background:"orange",margin:"2px",color:"white"}}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerBookedCharterDetail;