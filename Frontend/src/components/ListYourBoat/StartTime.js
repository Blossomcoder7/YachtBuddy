import React, { useState } from 'react';
import Navbar from '../LandingPage/Navbar';
import "../Style/StartTime.css";

export default function StartTime() {
    const [intervals, setIntervals] = useState([]);
    const [openIntervals, setOpenIntervals] = useState(Array(7).fill(false)); // Array for each day's open/closed state

    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    function generateHalfHourIntervals() {
        let startTime = '05:00:00';
        let endTime = '23:00:00';
        const generatedIntervals = [];
        const interval = 30; // 30 minutes

        // Convert start and end times to Date objects
        const startDate = new Date(`2023-10-17T${startTime}`);
        const endDate = new Date(`2023-10-17T${endTime}`);

        // Loop through the intervals
        while (startDate < endDate) {
            const timeString = startDate.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
            });
            generatedIntervals.push(timeString);
            startDate.setMinutes(startDate.getMinutes() + interval);
        }
        setIntervals(generatedIntervals);
        return generatedIntervals;
    }

    return (
        <>
            <Navbar />
            <div className='startTime'>
                <div className='startTimeL'>
                    <h1>Select the available days and start times</h1>
                    <p>Select the start times renters will choose from when booking your boat. We pre-selected the most common times as default. You can update this and mark specific calendar days as unavailable later.

                        <br /><br /> Example: If you select 10:00 AM - 2:00 PM, your boat will be available to depart between 10:00 AM - 2:00 PM. The return time depends on the booking durations you offer.</p>
                </div>
                <div className='startTimeR'>
                    <h4>Select start times for each day of the week</h4>
                    <form>
                        {week.map((day, index) => (
                            <div className='DaysWrap' key={index}>
                                <div className='weekDays'>
                                    <div className='WeEk'>
                                        <input type='checkbox'></input>
                                        <div className='weAkTiMe' onClick={() => {
                                    const newOpenIntervals = [...openIntervals];
                                    newOpenIntervals[index] = !newOpenIntervals[index];
                                    setOpenIntervals(newOpenIntervals);
                                    if (newOpenIntervals[index]) {
                                        generateHalfHourIntervals();
                                    }
                                }}>
                                            <span style={{ color: "#fff" }}>{day}</span>
                                            <p style={{ color: "#fff" }}>8:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                    <div onClick={() => {
                                    const newOpenIntervals = [...openIntervals];
                                    newOpenIntervals[index] = !newOpenIntervals[index];
                                    setOpenIntervals(newOpenIntervals);
                                    if (newOpenIntervals[index]) {
                                        generateHalfHourIntervals();
                                    }
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024">
                                        <path fill="#fff" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z" />
                                    </svg>
                                    </div>
                                </div>
                                {openIntervals[index] &&
                                    <div className='TimeInterval'>
                                        {intervals.map((item, i) => (
                                            <span className='interVal' key={i}>
                                                <input type='checkbox'></input>
                                                <p>{item}</p>
                                            </span>
                                        ))}
                                    </div>
                                }
                            </div>
                        ))}
                    </form>
                </div>
            </div>
        </>
    )
}
