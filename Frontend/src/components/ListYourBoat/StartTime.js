import React, { useState, useEffect } from 'react';
import Navbar from '../LandingPage/Navbar';
import '../Style/StartTime.css';
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../utils/FormDataContext";


export default function StartTime() {
    const [intervals, setIntervals] = useState(Array(7).fill([]).map(() => [])); 
    const [selectedCheckboxes, setSelectedCheckboxes] = useState(Array(7).fill([]).map(() => Array(31).fill(false))); 
    const [openIntervals, setOpenIntervals] = useState(Array(7).fill(false));
    const [selectedPValues, setSelectedPValues] = useState([]);
    const [selectedDataByDay, setSelectedDataByDay] = useState({});
  const {formData, updateFormData } = useFormData();
         
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const navigate = useNavigate();

    useEffect(() => {
        week.forEach((day, dayIndex) => {
            generateHalfHourIntervals(dayIndex);
    console.log(formData);

        });
    }, []);

    function generateHalfHourIntervals(dayIndex) {
        let startTime = '05:00:00';
        let endTime = '23:00:00';
        const generatedIntervals = [];
        const interval = 30; 

        const startDate = new Date(`2023-10-17T${startTime}`);
        const endDate = new Date(`2023-10-17T${endTime}`);

        while (startDate < endDate) {
            const timeString = startDate.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
            });
            generatedIntervals.push(timeString);
            startDate.setMinutes(startDate.getMinutes() + interval);
        }

        const newIntervals = [...intervals];
        newIntervals[dayIndex] = generatedIntervals;
        setIntervals(newIntervals);
    }


    const handleCheckboxClick = (dayIndex, timeIndex) => {
    
        const newSelectedCheckboxes = selectedCheckboxes.map((dayCheckboxes) => [...dayCheckboxes]);
        const newSelectedPValues = [...selectedPValues];
    
        newSelectedCheckboxes[dayIndex][timeIndex] = !newSelectedCheckboxes[dayIndex][timeIndex];
    
        const pValue = intervals[dayIndex][timeIndex]; // Modify this based on how you're associating checkboxes and <p> tags
    
        if (newSelectedCheckboxes[dayIndex][timeIndex]) {
            newSelectedPValues.push(pValue);
        } else {
            newSelectedPValues.splice(newSelectedPValues.indexOf(pValue), 1);
        }
    
        setSelectedCheckboxes(newSelectedCheckboxes);
        setSelectedPValues(newSelectedPValues);
    
        const selectedData = { ...selectedDataByDay };
        const day = week[dayIndex];
    
        if (!selectedData[day]) {
            selectedData[day] = [];
        }
    
        if (newSelectedCheckboxes[dayIndex][timeIndex]) {
            selectedData[day].push(pValue);
        } else {
            selectedData[day] = selectedData[day].filter((value) => value !== pValue);
        }
    
        setSelectedDataByDay(selectedData);
    };
    
  
    
    const sendToBackend = () => {
        try {
            let customStartDate = selectedDataByDay;
    updateFormData(customStartDate);
    navigate("/advanceNotice");

            
        } catch (error) {
            console.log("Enter in Catch",error)
        }
    
    };
    
    

    return (
        <>
            <Navbar />
            <div className="startTime">
                <div className="startTimeL">
                    <h1>Select the available days and start times</h1>
                    <p>
                        Select the start times renters will choose from when booking your boat. We pre-selected the most common times as default. You can update this and mark specific calendar days as unavailable later.
                        <br /><br />
                        Example: If you select 10:00 AM - 2:00 PM, your boat will be available to depart between 10:00 AM - 2:00 PM. The return time depends on the booking durations you offer.
                    </p>
                </div>
                <div className="startTimeR">
                    <h4>Select start times for each day of the week</h4>
                    <form>
                        {week.map((day, dayIndex) => (
                            <div className="DaysWrap" key={dayIndex}>
                                <div className="weekDays">
                                    <div className="WeEk">
                                        <input type="checkbox"></input>
                                        <div
                                            className="weAkTiMe"
                                            onClick={() => {
                                                const newOpenIntervals = [...openIntervals];
                                                newOpenIntervals[dayIndex] = !newOpenIntervals[dayIndex];
                                                setOpenIntervals(newOpenIntervals);
                                                if (newOpenIntervals[dayIndex]) {
                                                    generateHalfHourIntervals(dayIndex);
                                                }
                                            }}
                                        >
                                            <span style={{ color: '#fff' }}>{day}</span>
                                            <p style={{ color: '#fff' }}>8:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => {
                                            const newOpenIntervals = [...openIntervals];
                                            newOpenIntervals[dayIndex] = !newOpenIntervals[dayIndex];
                                            setOpenIntervals(newOpenIntervals);
                                            if (newOpenIntervals[dayIndex]) {
                                                generateHalfHourIntervals(dayIndex);
                                            }
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            viewBox="0 0 1024 1024"
                                        >
                                            <path fill="#fff" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z" />
                                        </svg>
                                    </div>
                                </div>
                                {openIntervals[dayIndex] && (
                                    <div className="TimeInterval">
                                        {intervals[dayIndex].map((item, timeIndex) => (
                                            <span className="interVal" key={timeIndex}>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedCheckboxes[dayIndex][timeIndex]}
                                                    onChange={() => handleCheckboxClick(dayIndex, timeIndex)}
                                                ></input>
                                                <p>{item}</p>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </form>
                    <button onClick={sendToBackend} className='strtTimeBTn'>Continue</button>
                </div>
            </div>
        </>
    );
}
