import React, { useState } from 'react';
import facebook from "../../images/Group 45.svg";
import youtube from "../../images/Group 44.svg";
import linkedin from "../../images/Group 43.svg";
import twiter from "../../images/Group 42.svg";
import logo from "../../images/logo.svg";
import {  useNavigate } from 'react-router-dom';
import  { httpAPI } from "../../AxiosApi";



export default function ForgetPassword() {
    const [email, setEmail] = useState({ email: "" });
    const navigate = useNavigate();

    const handleChang = (e) => {
        const { name, value } = e.target;
        setEmail((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(email)
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await httpAPI.post(`/email/forgot-password`, email);
            if(response.status === 200){
                alert("Reset Password Link Send Successfully On Your Email");
            }

        } catch (error) {
            console.error("Error logging in:", error);
        }
    };
    return (
        <>
            <div className="signupPage">
                <div className="signUpheader">
                    <img src={logo} alt=""></img>
                </div>
                <div className="wrapper">
                    <div className="signupCenter" style={{ margin: "15% 0" }}>
                        <div className="signupCenterL">
                            <div className="mask">
                                <h1>Welcome to Yachtbuddy!</h1>
                                <p>
                                    We hope you enjoy your time on the water. We are here to help
                                    you create an unforgettable experience with your family and
                                    friends.
                                </p>
                            </div>
                        </div>
                        <div className="signupCenterR">
                            <h1>Join The Crew</h1>
                            <form>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    value={email.email}
                                    onChange={handleChang}
                                    id='email'
                                    autoComplete='email'
                                ></input>

                            </form>


                            <button onClick={handleSubmit}>Send Reset Email</button>



                        </div>
                    </div>
                </div>
                <div className="signupFooter">
                    <div className="footerD wrapper">
                        <div className="footerD-L">
                            <p>© 2023 Yachtbuddy. All rights reserved</p>
                            <div className="policy">
                                <p>Privacy Policy</p>
                                <div className="policyDivider"></div>
                                <p>Term of use</p>
                                <div className="policyDivider"></div>
                                <p>Sitemap</p>
                            </div>
                        </div>
                        <div className="footerD-R">
                            <img src={facebook} alt=""></img>
                            <img src={youtube} alt=""></img>
                            <img src={linkedin} alt=""></img>
                            <img src={twiter} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
