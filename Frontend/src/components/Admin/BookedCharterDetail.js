import React, { useEffect, useState } from "react";
import { DateRange } from 'react-date-range';
import { httpAPI } from '../../AxiosApi';



export default function BookedCharterDetail() {
  const currentDate = new Date();
  const [bookedDates, setBookeddates] = useState([]);


  const formattedBookedDates = bookedDates.map(dateString => {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
  });

  const bookedDatesHandler = async () => {
    try {

      const response = await httpAPI.get(`/boat/bookedDates/`);

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
      <div className="bookedCharterDetail">
        <div>
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
    </>
  );
}
