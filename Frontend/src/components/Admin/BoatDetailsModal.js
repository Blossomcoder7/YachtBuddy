import axios from 'axios';
import backendURL from '../../AxiosApi';
import React, { useEffect, useState } from 'react';
import img from "../../images/boat1.png";
import "./Style/BoatDetailsModal.css";

const BoatDetailsModal = ({ item, closeModal }) => {
    const [data, setData] = useState();
    const fetchData = async () => {
        try {
            const response = await axios.get(`${backendURL}/boat/singleBoat/${item.boatId}`);
            setData(response.data.boat);
            console.log(response.data.boat);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="modal-Inquiry">
            <div className="modal-content-Inquiry">
                <h2 style={{ color: "black" }}>Boat Details</h2>
                <div className='inquiryDetail'>
                    <div className='inquiryLeft'>
                        <ul>
                            <li>Name :</li>
                            <li>Start Date :</li>
                            <li>End Date :</li>
                            <li>Passenger :</li>
                            <li>Duration :</li>
                        </ul>
                        <ul>
                            <li>{item.username}</li>
                            <li>{item.date.startDate}</li>
                            <li>{item.date.endDate}</li>
                            <li>{item.passenger}</li>
                            <li>{item.duration}</li>
                        </ul>
                       
                    </div>
                    <div className='inquiryLast'>
                        <div className='boatCaRd'>
                            <div className='uperBoatCard'>
                                <img src={img} alt=''></img>
                            </div>
                            <div className='lowerBoatCard'>
                                <p>Owner : {data?.username}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-actions-Inquiry">
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default BoatDetailsModal;
