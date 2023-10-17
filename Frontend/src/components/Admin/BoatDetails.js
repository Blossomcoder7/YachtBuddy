import React from 'react'

export default function BoatDetails(data) {
    console.log(data.boat.username);
    const policyObject = [
        {
          type: "flexible",
          description:
            "The Flexible Cancellation Policy is designed to offer maximum flexibility to guests and encourages last-minute bookings. Under this policy, guests can receive a 100% payout for cancellations made within 24 hours of the booking start time. This policy is ideal for owners who want to attract spontaneous travelers and accommodate short-notice changes in plans",
          TypicalTerms:
            "100% payout if canceled within 24 hours of the booking start time. No refund if canceled more than 24 hours before the booking start time.",
        },
        {
          type: "moderate",
          description:
            "The Flexible Cancellation Policy is designed to offer maximum flexibility to guests and encourages last-minute bookings. Under this policy, guests can receive a 100% payout for cancellations made within 24 hours of the booking start time. This policy is ideal for owners who want to attract spontaneous travelers and accommodate short-notice changes in plans",
          TypicalTerms:
            "100% payout if canceled within 24 hours of the booking start time. No refund if canceled more than 24 hours before the booking start time.",
        },
        {
          type: "strict",
          description:
            "The Flexible Cancellation Policy is designed to offer maximum flexibility to guests and encourages last-minute bookings. Under this policy, guests can receive a 100% payout for cancellations made within 24 hours of the booking start time. This policy is ideal for owners who want to attract spontaneous travelers and accommodate short-notice changes in plans",
          TypicalTerms:
            "100% payout if canceled within 24 hours of the booking start time. No refund if canceled more than 24 hours before the booking start time.",
        },
      ];

  return (
    <>
    <div className="reviewPage">
       
        <div className="wrapper">
          <div className="boatDetails">
            <div className="boatDetailsL">
              <h1>Boat details</h1>
            </div>
            <div className="boatDetailsR">
              <div className="detailsContent">
                <h2>Specifications</h2>
                <div className="contentRow">
                  <ul>
                    <li>Year</li>
                    <li>Make</li>
                    <li>Model</li>
                    <li>Length (ft)</li>
                    <li>Type</li>
                    <li>Category</li>
                    <li>Passenger capacity</li>
                  </ul>
                  <ul>
                    {/* <li>{data.year}</li> */}
                    <li>{data.boat.make}</li>
                    <li>{data.boat.model}</li>
                    <li>{data.boat.length}</li>
                    <li>{data.boat.power}</li>
                    <li>{data.boat.cateogiry}</li>
                    <li>{data.boat.passangerCapacity}</li>
                  </ul>
                </div>
                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
              <div className="detailsContent">
                <h2>Location</h2>
                <div className="contentRow">
                  <ul>
                    <li>Location type</li>
                    <li>Country / Territory</li>
                    <li>Street address 1</li>
                    <li>City (ft)</li>
                    <li>State / Province</li>
                    <li>Zip code</li>
                  </ul>
                  <ul>
                    <li>{data.boat.locationType}</li>
                    <li>{data.boat.country}</li>
                    <li>{data.boat.address1}</li>
                    <li>{data.boat.city}</li>
                    <li>{data.boat.state}</li>
                    <li>{data.boat.zipCode}</li>
                  </ul>
                </div>
                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
              <div className="detailsContent">
                <h2>Title</h2>
                <p style={{ marginTop: "20px" }}>{data.boat.title}</p>
                <div className="coNteNtDivider"></div>
                <h2>Description</h2>
                <p style={{ marginTop: "20px" }}>{data.boat.description}</p>
                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
              <div className="detailsContent detailsContent2">
                <h2>Cancelation Policy</h2>
                {policyObject.map((datas) =>
                  datas.type === `${data.boat.policy}` ? (
                    <div key={datas.type} className="detailsContent2">
                      <hr />
                      <span>{datas.type}</span>
                      <span>Description</span>
                      <p>{datas.description}</p>
                      <span>Typical Terms</span>
                      <p>{datas.TypicalTerms}</p>
                    </div>
                  ) : null
                )}
                <div className="coNteNtDivider"></div>

                <span>Edit</span>
              </div>

              <div className="detailsContent">
                <h2>Preferences</h2>
                <p>What is allowed on your boat?</p>
                <ul>
                  {data.boat.allowedOnBoat && Array.isArray(data.boat.allowedOnBoat) ? (
                    data.boat.allowedOnBoat.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) : (
                    <li>No preferences available</li>
                  )}
                </ul>
               

                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
              <div className="detailsContent">
                <h2>Features</h2>
                <h3 className="featirehD">Features</h3>
                <ul className="featireList">
                  {data.boat.features && Array.isArray(data.boat.features) ? (
                    data.boat.features.map((item, index) => (
                      <li key={index}>{item}</li>
                      ))
                      ) : (
                        <li>No preferences available</li>
                      )}
                </ul>
                <h3 className="featirehD">Extras</h3>
                <ul className="featireList">
                {data.boat.extras && Array.isArray(data.boat.extras) ? (
                    data.boat.extras.map((item, index) => (
                      <li key={index}>{item}</li>
                      ))
                      ) : (
                        <li>No preferences available</li>
                      )}
                </ul>
                <h3 className="featirehD">Navigation</h3>
                <ul className="featireList">
                {data.boat.navigation && Array.isArray(data.boat.navigation) ? (
                    data.boat.navigation.map((item, index) => (
                      <li key={index}>{item}</li>
                      ))
                      ) : (
                        <li>No preferences available</li>
                      )}
                </ul>

                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
            </div>
          </div>
          <div className="coNteNtDivider coNteNtDivider1"></div>
          <div className="boatDetails">
            <div className="boatDetailsL">
              <h1>Availability</h1>
            </div>
            <div className="boatDetailsR">
              <div className="detailsContent availbility">
                <h2>Start times</h2>
                <div>
                  <label>Monday</label>
                  <p>6:30 AM - 6:00 PM</p>
                </div>
                <div>
                  <label>Monday</label>
                  <p>6:30 AM - 6:00 PM</p>
                </div>
                <div>
                  <label>Monday</label>
                  <p>6:30 AM - 6:00 PM</p>
                </div>
                <div>
                  <label>Monday</label>
                  <p>6:30 AM - 6:00 PM</p>
                </div>
                <div>
                  <label>Monday</label>
                  <p>6:30 AM - 6:00 PM</p>
                </div>
                <div>
                  <label>Monday</label>
                  <p>6:30 AM - 6:00 PM</p>
                </div>
                <div>
                  <label>Monday</label>
                  <p>6:30 AM - 6:00 PM</p>
                </div>

                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
              <div className="detailsContent availbility">
                <h2>Advance notice</h2>
                <div>
                  <p>Advance Notice</p>
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#000000bd",
                    }}
                  >
                    {data.boat.advanceNotice}
                  </label>
                </div>

                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
              <div className="detailsContent availbility">
                <h2>Multiple-booking days</h2>
                <div>
                  <p>Allow multiple bookings on the same day</p>
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#000000bd",
                    }}
                  >
                  {data.boat.multiBooking}
                  </label>
                </div>
                <div>
                  <p>Buffer time</p>
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#000000bd",
                    }}
                  >
                    30 min
                  </label>
                </div>
                

                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
              <div className="detailsContent availbility">
                <h3>Booking options</h3>
                <label>
                  <p>Is this a captained fishing charter?</p>
                  <p style={{ fontWeight: "bold" }}>No</p>
                </label>
                <label>
                  <p>Renter operates my boat</p>
                  <p style={{ fontWeight: "bold" }}>{data.boat.renter === "Yes" ? "Yes" :"No"}</p>
                </label>
                <label>
                  <p>USCG-certified captain operates my boat</p>
                  <p style={{ fontWeight: "bold" }}>{data.uscg === "Yes" ? "Yes" :"No"}</p>
                </label>
                <div className="coNteNtDivider"></div>
                <h3>Booking durations</h3>
                <ul>
                {data.boat.duration && Array.isArray(data.boat.duration) ? (
                    data.boat.duration.map((item, index) => (
                      <li key={index}>{item}</li>
                      ))
                      ) : (
                        <li>No preferences available</li>
                      )}
                </ul>
                <h3>Fuel policy</h3>
                <label>
                  <p>Who pays for fuel?</p>
                  <p style={{ fontWeight: "bold" }}>{data.pay}</p>
                </label>
                <div className="coNteNtDivider"></div>
                <span>Edit</span>
              </div>
            </div>
          </div>
          <div className="coNteNtDivider coNteNtDivider1"></div>
        
        </div>
      </div>
    </>
  )
}
