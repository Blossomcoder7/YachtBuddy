import React, { useEffect, useRef, useState } from "react";
// import AOS from "aos";
import "aos/dist/aos.css";
import "../Style/PopularBoats.css";
import wheel from "../../images/steering-wheel 1.svg";
// import img from "../../images/IMG_8153 1.png";
// import boat from "../../images/boat 1.svg";
// import user from "../../images/boat 2.svg";
// import axios from "axios";
// import backendURL from "../../AxiosApi";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";


export default function PopularBoats() {
  // const [data, setData] = useState([]);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const categories = [
    {name:"Cishing Charter",
    ImgUrl: "https://www.boatsetter.com/_next/image?url=%2Fimages%2Fhomepage%2Fexperiences%2FFishing.jpeg&w=1920&q=60"  },
    {name:"Pontoon Boats Rental",
    ImgUrl: "https://www.boatsetter.com/_next/image?url=%2Fimages%2Fhomepage%2Fexperiences%2FPontoons.jpg&w=1920&q=60"  },
    {name:"Bachelor Party Boat Rental",
    ImgUrl: "https://www.boatsetter.com/_next/image?url=%2Fimages%2Fhomepage%2Fexperiences%2FBachelors.jpg&w=1920&q=60"  },
    {name:"Party Boats",
    ImgUrl: "https://www.boatsetter.com/_next/image?url=%2Fimages%2Fhomepage%2Fexperiences%2FPartyBoat.jpg&w=1920&q=60"  },
    {name:"Yacht Rental",
    ImgUrl: "https://www.boatsetter.com/_next/image?url=%2Fimages%2Fhomepage%2Fexperiences%2FYachts.jpg&w=1920&q=60"  },
    {name:"Sailing",
    ImgUrl: "https://www.boatsetter.com/_next/image?url=%2Fimages%2Fhomepage%2Fexperiences%2FSailing.jpg&w=1920&q=50"  },
    {name:"Luxury Yacht",
    ImgUrl: "https://www.boatsetter.com/_next/image?url=%2Fimages%2Fhomepage%2Fexperiences%2Fboat_rentals.jpeg&w=1920&q=50"  },
    {name:"Cruising",
    ImgUrl: "https://www.boatsetter.com/_next/image?url=%2Fimages%2Fhomepage%2Fexperiences%2FBachelorette.jpg&w=1920&q=50"  },
    {name:"Boat rentals",
    ImgUrl: "https://www.boatsetter.com/_next/image?url=%2Fimages%2Fhomepage%2Fexperiences%2FLux.jpg&w=1920&q=50"  },
    {name:"Bachelorette Party",
    ImgUrl: "https://www.boatsetter.com/_next/image?url=%2Fimages%2Fhomepage%2Fexperiences%2FCruising.jpg&w=1920&q=50"  },
  ]

  useEffect(() => {
    // fetchData();
    console.log(carousel.current.scrollWidth - carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[setWidth]);



  
  return (
    <>
      <div className="popularBoats">
        <div className="popularBoatsUper">
          <img src={wheel} alt="" data-aos="fade-down"></img>
          <p data-aos="fade-left">Our Popular Boats</p>
          <h1 data-aos="fade-up">Available Yachts</h1>
        </div>
          <div className="popularBoatsDown sliderMargin">
            <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
              <motion.div drag="x"               
              dragConstraints={{right:0, left: -width}}
              className="inner-carousel">
              {categories.map((item,index) => {
               return( 
             
              <motion.div className="popularBoatsCard" key={index}>
                <div className="popularBoats_cardUp">
                  <div>
                    <img src={item.ImgUrl} alt=""></img>
                  </div>
                  <div className="priceTagOuter"></div>
              
                </div>
                <div className="popularBoats_cardDown">
                <Link to={`/allBoat/${item.name}`}>
                  <h6>{item.name}</h6></Link>
                  <div className="line"></div>
                 </div>
              </motion.div>
            
              )}
            )}
              </motion.div>
            </motion.div>
           
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
