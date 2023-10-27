import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../Style/Carousel.css";
import "../Style/PopularBoats.css";
import "../Style/YachtRental.css";
// import wheel from "../../images/steering-wheel 1.svg";
import img1 from "../../images/boat1.png";
import img2 from "../../images/boat2.png";
import img3 from "../../images/boat3.png";
import img4 from "../../images/boat4.png";
import img5 from "../../images/boat5.png";
import img6 from "../../images/boat6.png";
import boat from "../../images/boat 1.svg";
import user from "../../images/boat 2.svg";
import messanger from "../../images/facebook-messenger.svg";
import call from "../../images/phone-volume (1).svg";
import star from "../../images/star.svg";
;
export default function YachtRental() {
    useEffect(()=>{
        AOS.init({duration:3000});
          });

          const settings = {
            dots: true, 
            infinite: true, 
            speed: 500, 
            slidesToShow: 1, 
            slidesToScroll: 1,
            responsive: [
              {
                  breakpoint: 9999,
                  settings: "unslick"
              },
              {
                  breakpoint: 767,
                   settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          infinite:false,
                          dots: true
                      }
              }
          ] 
          };

  return (
  <>
  <div className="wrapper">
    <div className="yachtRental">
    <h1>Our Top Yacht Rentals</h1>
   
        <div className="popularBoatsDown1" data-aos="fade-up">
        <Slider {...settings}>
          <div className="popularBoatsCard popularBoatsCard1">
            <div className="popularBoats_cardUp">
              <div>
              <img src={img1} alt=""></img>
              </div>
              <div className="priceTagOuter"></div>
              <div className="priceTag">
                <span>$2000 </span>
                <p>4 hour</p>
              </div>
            </div>
            <div className="socialContact">
                <span>
                    <img src={messanger} alt=""></img>
                    <p>Message</p>
                </span>
                <span>
                    <img src={call} alt=""></img>
                    <p>Call</p>
                </span>
            </div>
            <div className="popularBoats_cardDown popularBoats_cardDown1">
              <p>SAG HARBOR, NY</p>
              <span className="flex ">
              <h6>45' Meridian</h6>
              <div className="flex star">
                <img src={star} alt=""></img>
                <p>5.0 (12 bookings)</p>
              </div>
              </span>
              <div className="line"></div>
              <div className="staterooms">
                <div className="stateroomsL">
                  <img src={boat} alt=""></img>
                  <p>2 STATEROOMS</p>
                </div>
                <div className="stateroomsR">
                  <img src={user} alt=""></img>
                  <p>1 Bath</p>
                </div>
              </div>
              <button>Book Now</button>
            </div>
          </div>
          <div className="popularBoatsCard popularBoatsCard1">
            <div className="popularBoats_cardUp">
              <div>
              <img src={img2} alt=""></img>
              </div>
              <div className="priceTagOuter"></div>
              <div className="priceTag">
                <span>$2000 </span>
                <p>4 hour</p>
              </div>
            </div>
            <div className="socialContact">
                <span>
                    <img src={messanger} alt=""></img>
                    <p>Message</p>
                </span>
                <span>
                    <img src={call} alt=""></img>
                    <p>Call</p>
                </span>
            </div>
            <div className="popularBoats_cardDown popularBoats_cardDown1">
              <p>SAG HARBOR, NY</p>
              <span className="flex ">
              <h6>45' Meridian</h6>
              <div className="flex star">
                <img src={star} alt=""></img>
                <p>5.0 (12 bookings)</p>
              </div>
              </span>
              <div className="line"></div>
              <div className="staterooms">
                <div className="stateroomsL">
                  <img src={boat} alt=""></img>
                  <p>2 STATEROOMS</p>
                </div>
                <div className="stateroomsR">
                  <img src={user} alt=""></img>
                  <p>1 Bath</p>
                </div>
              </div>
              <button>Book Now</button>
            </div>
          </div>
          <div className="popularBoatsCard popularBoatsCard1">
            <div className="popularBoats_cardUp">
              <div>
              <img src={img3} alt=""></img>
              </div>
              <div className="priceTagOuter"></div>
              <div className="priceTag">
                <span>$2000 </span>
                <p>4 hour</p>
              </div>
            </div>
            <div className="socialContact">
                <span>
                    <img src={messanger} alt=""></img>
                    <p>Message</p>
                </span>
                <span>
                    <img src={call} alt=""></img>
                    <p>Call</p>
                </span>
            </div>
            <div className="popularBoats_cardDown popularBoats_cardDown1">
              <p>SAG HARBOR, NY</p>
              <span className="flex ">
              <h6>45' Meridian</h6>
              <div className="flex star">
                <img src={star} alt=""></img>
                <p>5.0 (12 bookings)</p>
              </div>
              </span>
              <div className="line"></div>
              <div className="staterooms">
                <div className="stateroomsL">
                  <img src={boat} alt=""></img>
                  <p>2 STATEROOMS</p>
                </div>
                <div className="stateroomsR">
                  <img src={user} alt=""></img>
                  <p>1 Bath</p>
                </div>
              </div>
              <button>Book Now</button>
            </div>
          </div>      
          <div className="popularBoatsCard popularBoatsCard1">
            <div className="popularBoats_cardUp">
              <div>
              <img src={img4} alt=""></img>
              </div>
              <div className="priceTagOuter"></div>
              <div className="priceTag">
                <span>$2000 </span>
                <p>4 hour</p>
              </div>
            </div>
            <div className="socialContact">
                <span>
                    <img src={messanger} alt=""></img>
                    <p>Message</p>
                </span>
                <span>
                    <img src={call} alt=""></img>
                    <p>Call</p>
                </span>
            </div>
            <div className="popularBoats_cardDown popularBoats_cardDown1">
              <p>SAG HARBOR, NY</p>
              <span className="flex ">
              <h6>45' Meridian</h6>
              <div className="flex star">
                <img src={star} alt=""></img>
                <p>5.0 (12 bookings)</p>
              </div>
              </span>
              <div className="line"></div>
              <div className="staterooms">
                <div className="stateroomsL">
                  <img src={boat} alt=""></img>
                  <p>2 STATEROOMS</p>
                </div>
                <div className="stateroomsR">
                  <img src={user} alt=""></img>
                  <p>1 Bath</p>
                </div>
              </div>
              <button>Book Now</button>
            </div>
          </div>
          <div className="popularBoatsCard popularBoatsCard1">
            <div className="popularBoats_cardUp">
              <div>
              <img src={img5} alt=""></img>
              </div>
              <div className="priceTagOuter"></div>
              <div className="priceTag">
                <span>$2000 </span>
                <p>4 hour</p>
              </div>
            </div>
            <div className="socialContact">
                <span>
                    <img src={messanger} alt=""></img>
                    <p>Message</p>
                </span>
                <span>
                    <img src={call} alt=""></img>
                    <p>Call</p>
                </span>
            </div>
            <div className="popularBoats_cardDown popularBoats_cardDown1">
              <p>SAG HARBOR, NY</p>
              <span className="flex ">
              <h6>45' Meridian</h6>
              <div className="flex star">
                <img src={star} alt=""></img>
                <p>5.0 (12 bookings)</p>
              </div>
              </span>
              <div className="line"></div>
              <div className="staterooms">
                <div className="stateroomsL">
                  <img src={boat} alt=""></img>
                  <p>2 STATEROOMS</p>
                </div>
                <div className="stateroomsR">
                  <img src={user} alt=""></img>
                  <p>1 Bath</p>
                </div>
              </div>
              <button>Book Now</button>
            </div>
          </div>
          <div className="popularBoatsCard popularBoatsCard1">
            <div className="popularBoats_cardUp">
              <div>
              <img src={img6} alt=""></img>
              </div>
              <div className="priceTagOuter"></div>
              <div className="priceTag">
                <span>$2000 </span>
                <p>4 hour</p>
              </div>
            </div>
            <div className="socialContact">
                <span>
                    <img src={messanger} alt=""></img>
                    <p>Message</p>
                </span>
                <span>
                    <img src={call} alt=""></img>
                    <p>Call</p>
                </span>
            </div>
            <div className="popularBoats_cardDown popularBoats_cardDown1">
              <p>SAG HARBOR, NY</p>
              <span className="flex ">
              <h6>45' Meridian</h6>
              <div className="flex star">
                <img src={star} alt=""></img>
                <p>5.0 (12 bookings)</p>
              </div>
              </span>
              <div className="line"></div>
              <div className="staterooms">
                <div className="stateroomsL">
                  <img src={boat} alt=""></img>
                  <p>2 STATEROOMS</p>
                </div>
                <div className="stateroomsR">
                  <img src={user} alt=""></img>
                  <p>1 Bath</p>
                </div>
              </div>
              <button>Book Now</button>
            </div>
          </div>     
          </Slider> 
        </div>
        
        
        </div>
        <button className="yacht_LearnMore">Learn More</button>
        </div>
  </>
  )
}
