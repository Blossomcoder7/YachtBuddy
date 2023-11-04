import React, { useEffect, useState } from "react";
import "../Paymants/CheckOutPage.css";
import img from "../../images/boat5.png";
import Navbar from "../LandingPage/Navbar";
import profile from "../../images/profile.png";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import backendURL, { httpAPI } from '../../AxiosApi';



export default function CheckOutPage() {
  const [hasPromoCode, setHasPromoCode] = useState(false);
  const [data, setData] = useState();




  useEffect(() => {
    const getProductDetail = () => {
      try {
        const setproductDetail = localStorage.getItem("productDetail");
        if (setproductDetail) {
          const productDetail = JSON.parse(setproductDetail);
          setData(productDetail);
        } else {
          console.log("No product detail found in localStorage.");
        }
      } catch (error) {
        console.error("Error while fetching product details:", error);
      }
    };

    getProductDetail();
  }, []);

  // const handleExpiryDateChange = (e) => {
  //   setExpiryDate(e.target.value);
  // };

  const initialOptions = {
    clientId: "AcbZfLMOatDo0kT1k3isgHk6i9ckW6QEG-X-Ak6ZdkLrHn-LjW7rDSK4MeJ1BUj8w9I8wqvZzuyPlZmi",
    currency: "USD",
    intent: "capture",
  };


  const createOrder = async (data) => {
    try {
      const response = await httpAPI.post(`/checkout/create_order`, {
        cart: {
          sku: "skuCode",
          quantity: "1",
          price: "10.00"
        }
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log(response.data.id);
      return response.data.id;
    } catch (error) {
      // Handle any errors here
      console.error("Create Order Error", error);
      throw error;
    }
  };

  const onApprove = (data) => {
    // Order is captured on the server
    return httpAPI.post(`/checkout/aprove_order`, {
        orderID: data.orderID
      })
      .then((response) => response.data)
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="wrapper">
        <div className="checkOut">
          <div className="checkOutL">
            <h2>Checkout</h2>
            <div className="checkOutDetail">
              <span>
                <h5>Boston Whaler 28’- AWOL Sportfishing</h5>
                <label>San Diego, CA</label>
                <p>Start: Oct 22, 2023 • 8:30 AM</p>
                <p>End: Oct 22, 2023 • 12:30 PM</p>
                <p>Captained • 4 passengers</p>
              </span>
              <span>
                <div className="bOaTiMg">
                  <img src={img} alt=""></img>
                </div>

                <div className="raTing">
                  <div>
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      width="14"
                      height="14"
                    >
                      <defs>
                        <linearGradient
                          id="grad100"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="100%"
                            style={{
                              stopColor: "rgb(114, 212, 186)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="100%"
                            style={{
                              stopColor: "rgb(114, 212, 186)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M6.998 10.493a.397.397 0 0 0-.462 0l-2.952 2.105a.397.397 0 0 1-.614-.43l1.01-3.667a.397.397 0 0 0-.132-.413L.962 5.728a.397.397 0 0 1 .238-.704L4.813 4.9a.397.397 0 0 0 .363-.268L6.39 1.094a.397.397 0 0 1 .752 0l1.215 3.538a.397.397 0 0 0 .363.268l3.613.124a.397.397 0 0 1 .238.705L9.686 8.088a.397.397 0 0 0-.132.413l1.01 3.668c.1.36-.31.646-.614.429l-2.952-2.105Z"
                        fill="url(#grad100)"
                      ></path>
                    </svg>
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      width="14"
                      height="14"
                    >
                      <defs>
                        <linearGradient
                          id="grad100"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="100%"
                            style={{
                              stopColor: "rgb(114, 212, 186)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="100%"
                            style={{
                              stopColor: "rgb(114, 212, 186)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M6.998 10.493a.397.397 0 0 0-.462 0l-2.952 2.105a.397.397 0 0 1-.614-.43l1.01-3.667a.397.397 0 0 0-.132-.413L.962 5.728a.397.397 0 0 1 .238-.704L4.813 4.9a.397.397 0 0 0 .363-.268L6.39 1.094a.397.397 0 0 1 .752 0l1.215 3.538a.397.397 0 0 0 .363.268l3.613.124a.397.397 0 0 1 .238.705L9.686 8.088a.397.397 0 0 0-.132.413l1.01 3.668c.1.36-.31.646-.614.429l-2.952-2.105Z"
                        fill="url(#grad100)"
                      ></path>
                    </svg>
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      width="14"
                      height="14"
                    >
                      <defs>
                        <linearGradient
                          id="grad100"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="100%"
                            style={{
                              stopColor: "rgb(114, 212, 186)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="100%"
                            style={{
                              stopColor: "rgb(114, 212, 186)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M6.998 10.493a.397.397 0 0 0-.462 0l-2.952 2.105a.397.397 0 0 1-.614-.43l1.01-3.667a.397.397 0 0 0-.132-.413L.962 5.728a.397.397 0 0 1 .238-.704L4.813 4.9a.397.397 0 0 0 .363-.268L6.39 1.094a.397.397 0 0 1 .752 0l1.215 3.538a.397.397 0 0 0 .363.268l3.613.124a.397.397 0 0 1 .238.705L9.686 8.088a.397.397 0 0 0-.132.413l1.01 3.668c.1.36-.31.646-.614.429l-2.952-2.105Z"
                        fill="url(#grad100)"
                      ></path>
                    </svg>
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      width="14"
                      height="14"
                    >
                      <defs>
                        <linearGradient
                          id="grad100"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="100%"
                            style={{
                              stopColor: "rgb(114, 212, 186)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="100%"
                            style={{
                              stopColor: "rgb(114, 212, 186)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M6.998 10.493a.397.397 0 0 0-.462 0l-2.952 2.105a.397.397 0 0 1-.614-.43l1.01-3.667a.397.397 0 0 0-.132-.413L.962 5.728a.397.397 0 0 1 .238-.704L4.813 4.9a.397.397 0 0 0 .363-.268L6.39 1.094a.397.397 0 0 1 .752 0l1.215 3.538a.397.397 0 0 0 .363.268l3.613.124a.397.397 0 0 1 .238.705L9.686 8.088a.397.397 0 0 0-.132.413l1.01 3.668c.1.36-.31.646-.614.429l-2.952-2.105Z"
                        fill="url(#grad100)"
                      ></path>
                    </svg>
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      width="14"
                      height="14"
                    >
                      <defs>
                        <linearGradient
                          id="grad100"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="100%"
                            style={{
                              stopColor: "rgb(114, 212, 186)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="100%"
                            style={{
                              stopColor: "rgb(114, 212, 186)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M6.998 10.493a.397.397 0 0 0-.462 0l-2.952 2.105a.397.397 0 0 1-.614-.43l1.01-3.667a.397.397 0 0 0-.132-.413L.962 5.728a.397.397 0 0 1 .238-.704L4.813 4.9a.397.397 0 0 0 .363-.268L6.39 1.094a.397.397 0 0 1 .752 0l1.215 3.538a.397.397 0 0 0 .363.268l3.613.124a.397.397 0 0 1 .238.705L9.686 8.088a.397.397 0 0 0-.132.413l1.01 3.668c.1.36-.31.646-.614.429l-2.952-2.105Z"
                        fill="url(#grad100)"
                      ></path>
                    </svg>
                  </div>
                  <p>5.0</p>
                  <label>(1 bookings )</label>
                </div>
              </span>
            </div>
            <form>
              {/* <h3>Payment Information</h3>
              <input type="text" placeholder="Name on card"></input>
              <input type="text" placeholder="Card Number"></input>
              <div className="fLex">
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                />
                <input type="number" placeholder="CVV"></input>
                <input type="number" placeholder="ZIP"></input>
              </div> */}

              <div className="limeDivider"></div>

              <label>
                Do you have a promo code?
                <input
                  type="checkbox"
                  checked={hasPromoCode}
                  onChange={() => setHasPromoCode(!hasPromoCode)}
                />
              </label>

              {hasPromoCode && (
                <>
                  <label>Promo Code</label>
                  <input type="text" name="promoCode" />
                </>
              )}
              <div className="limeDivider"></div>

              <div className="InterDuse">
                <h4>Introduce yourself to Andrew</h4>
                <span>
                  <img src={profile} alt=""></img>
                </span>
              </div>
              <div className="OwnerMsg">
                <p>Message</p>
                <input type="text" placeholder="Hi Andrew, I booked your boat on Oct 22 at 8:30 AM for 4 hours."></input>
              </div>
              <div className="TermConDition">
                <input type="checkbox"></input>
                <p>
                  I have read, understand and agree to the Terms of Service &
                  Charter Agreement
                </p>
              </div>
              <button>Instant Book</button>
            </form>
          </div>


          <div className="checkOutR">
            <h4>Pricing Information</h4>
            <span>
              <p>Boat price</p>
              {/* <p>${data.price}.00</p> */}
              {data && data.price && <p>${data.price}.00</p>}
            </span>
            <span>
              <p>Service fee</p>
              {data && data.price && (<p>${(data.price * 0.2).toFixed(2)}</p>)}
            </span>
            <div className="limeDivider"></div>
            <span>
              <p>Booking total</p>
              {data && data.price && (<p>${(Number(data.price) + Number(data.price) * 0.2).toFixed(2)}</p>)}

            </span>
            <span>
              <h4>Total</h4>
              {data && data.price && (
                <h4>${(Number(data.price) + Number(data.price) * 0.2).toFixed(2)}</h4>
              )}

            </span>
            <div className="limeDivider"></div>
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons
                style={{ color: "silver", layout: "horizontal", height: 48, tagline: "false", shape: "pill" }}
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </>
  );
}
