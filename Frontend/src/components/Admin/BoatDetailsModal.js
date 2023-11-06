import { httpAPI } from '../../AxiosApi';
import React, { useEffect, useState } from 'react';
// import img from "../../images/boat1.png";
import "./Style/BoatDetailsModal.css";

const BoatDetailsModal = ({ item, closeModal }) => {
    const [data, setData] = useState();
    const fetchData = async () => {
        try {
            const response = await httpAPI.get(`/boat/singleBoat/${item.boatId}`);
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
                <button style={{
                    padding: "10px", border: "0", color: "#fff", background: "orange", borderRadius: "10px",
                     float:"right", marginRight:"50px"
                }}>Send To Owner</button>

                <div className='inquiryDetail'>
                    <div className='inquiryLeft'>
                        <ul>
                            <li>Name :</li>
                            <li>Email :</li>
                            <li>Start Date :</li>
                            <li>End Date :</li>
                            <li>Passenger :</li>
                            <li>Duration :</li>
                        </ul>
                        <ul>
                            <li>{item.username}</li>
                            <li>{item.email}</li>
                            <li>{item.date.startDate}</li>
                            <li>{item.date.endDate}</li>
                            <li>{item.passenger}</li>
                            <li>{item.duration}</li>
                        </ul>

                    </div>
                    <div className='inquiryLast'>
                        <div className='boatCaRd'>

                            <div className='uperBoatCard'>
                                <img src={`https://theyachtbuddy.com/uploads/${data?.images[0]?.filename}`} alt="" />
                            </div>

                            <div className='lowerBoatCard'>
                                <p>Boat Address : {data?.boatAddress}</p>
                                <p>Passangers Capacity : {data?.passangerCapacity}</p>
                                <p>City : {data?.city}</p>
                                <p>Cateogiry : {data?.cateogiry}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-actions-Inquiry">
                <button onClick={closeModal} >Close</button>
            </div>
        </div>
    );
};

export default BoatDetailsModal;
