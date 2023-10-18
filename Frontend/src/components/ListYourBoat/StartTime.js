import React from 'react'
import Navbar from '../LandingPage/Navbar'
import "../Style/StartTime.css";

export default function StartTime() {
    return (
        <>
            <Navbar />
            <div className='startTime'>
                <div className='startTimeL'></div>
                <div className='startTimeR'>
                    <h4>Select start times for each day of the week</h4>
                    <div className='weekDays'>
                        <div className='WeEk'>
                            <input type='checkbox'></input>
                            <div className='weAkTiMe'>
                                <span>Monday</span>
                                <p>8:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024"><path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z" /></svg>
                    </div>
                </div>
            </div>
        </>
    )
}
