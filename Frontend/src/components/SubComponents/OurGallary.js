import React from "react";
import Slider from 'react-slick';
import "../Style/OurGallary.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/Carousel.css";
import img1 from "../../images/Rectangle 40 (1).png";
import img2 from "../../images/Rectangle 41 (1).png";
import img3 from "../../images/Rectangle 42 (1).png";
import img4 from "../../images/Rectangle 43 (1).png";
import img5 from "../../images/Rectangle 44 (1).png";
import img6 from "../../images/Rectangle 45 (1).png";
import img7 from "../../images/Rectangle 46 (1).png";
import img8 from "../../images/Rectangle 47 (2).png";

export default function OurGallary() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="ourGallary">
        <div className="wrapper">
          <div className="ourGallaryMain">
            <h1>Our Gallary</h1>
            <div className="gallaryContemt">
            <Slider {...settings}>
              <div className="gallaryContemt1">
                <img src={img1} alt=""></img>
              </div>
              <div className="gallaryContemt1">
                <img src={img2} alt=""></img>
              </div>
              <div className="gallaryContemt1">
                <img src={img3} alt=""></img>
              </div>
              <div className="gallaryContemt1">
                <img src={img4} alt=""></img>
              </div>
              <div className="gallaryContemt1">
                <img src={img5} alt=""></img>
              </div>
              <div className="gallaryContemt1">
                <img src={img6} alt=""></img>
              </div>
              <div className="gallaryContemt1">
                <img src={img7} alt=""></img>
              </div>
              <div className="gallaryContemt1">
                <img src={img8} alt=""></img>
              </div>
          </Slider> 

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
