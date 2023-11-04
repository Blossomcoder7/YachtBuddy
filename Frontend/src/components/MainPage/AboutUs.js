import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";
import "../Style/AboutUs.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutUs() {
 
    const reviews = [
      {
        author: "John Doe",
        comment: "Our trip was amazing from start to finish! The boat is awesome, it got everything we need, we snorkelled, used the paddle boards and enjoyed the breath taking view while sailing on this paradise island.",
      },
      {
        author: "Jane Smith",
        comment: " “My experience with Floaty was amazing from the first contact to the very end of the yacht trip. They were so professional and responsive through the booking process and made everything easy.”",
      },
      {
        author: "John Doe",
        comment: "Our trip was amazing from start to finish! The boat is awesome, it got everything we need, we snorkelled, used the paddle boards and enjoyed the breath taking view while sailing on this paradise island.",
      },
      {
        author: "Jane Smith",
        comment: " “My experience with Floaty was amazing from the first contact to the very end of the yacht trip. They were so professional and responsive through the booking process and made everything easy.”",
      },
      
      
    ];
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  return (
    <>
      <Navbar />
      <div className="aBoutus">
        <div className="aboutHeader">
          <h1>About Us</h1>
        </div>

        <div className="wrapper">
          <div className="ProfesionalPlatform">
            <div className="ProfesionalPlatformL">
              <div className="stylishTag">welcome</div>
              <h1>The professional and private yacht charter platform​</h1>
              <p>
                Our clients choose us because we use our experience to
                tailor-make sensational holiday experiences to destinations
                worldwide.
              </p>
            </div>
            <div className="ProfesionalPlatformR">
              <div className="platformContList">
                <div className="rectangle">
                  <div className="rectangleNo">01</div>
                </div>
                <div className="platformContent">
                  <h2>Professional tour guide</h2>
                  <p>
                    Vestibulum eu quam nec neque pellentesque efficitur id eget
                    nisl. Proin porta est convallis lacus blandit pretium.
                  </p>
                </div>
              </div>
              <div className="platformContList">
                <div className="rectangle">
                  <div className="rectangleNo">02</div>
                </div>
                <div className="platformContent">
                  <h2>Value for money</h2>
                  <p>
                    Donec finibus, urna bibendum ultricies laoreet, augue eros
                    luctus sapien, ut euismod leo tortor ac enim.
                  </p>
                </div>
              </div>
              <div className="platformContList">
                <div className="rectangle">
                  <div className="rectangleNo">03</div>
                </div>
                <div className="platformContent">
                  <h2>Beautiful places</h2>
                  <p>
                    Phasellus mattis lectus commodo felis egestas, id accumsan
                    justo ultrices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* .....Choose Us>>>>...//// */}
        <div className="cHooseus">
          <div className="wrapper">
            <div className="cHooseUsL">
              <div className="stylishTag">luxury & premium</div>
              <h1>Why choose us</h1>
              <p>
                We have offered luxury yacht chartering services for over 40
                years, you can trust us to provide the best.
              </p>
            </div>
            <div className="cHooseUsR">
              <div className="webData">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M229.19 213c-15.81-27.32-40.63-46.49-69.47-54.62a70 70 0 1 0-63.44 0C67.44 166.5 42.62 185.67 26.81 213a6 6 0 1 0 10.38 6c19.21-33.19 53.15-53 90.81-53s71.6 19.81 90.81 53a6 6 0 1 0 10.38-6ZM70 96a58 58 0 1 1 58 58a58.07 58.07 0 0 1-58-58Z"
                  />
                </svg>
                <p>more than</p>
                <span>163,29 member</span>
              </div>
              <div className="webData">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M416 473.14a6.83 6.83 0 0 0-3.57-6c-27.07-14.55-51.76-36.82-62.62-48a10.05 10.05 0 0 0-12.72-1.51c-50.33 32.42-111.61 32.44-161.95.05a10.09 10.09 0 0 0-12.82 1.56c-10.77 11.28-35.19 33.3-62.43 47.75a7.11 7.11 0 0 0-3.89 5.73a6.73 6.73 0 0 0 7.92 7.15c20.85-4.18 41-13.68 60.2-23.83a8.71 8.71 0 0 1 8-.06a185.14 185.14 0 0 0 167.81 0a8.82 8.82 0 0 1 8.09.06c19.1 10 39.22 19.59 60 23.8a6.73 6.73 0 0 0 8-6.71Zm60.71-226.23c-3.49-8.39-10.9-14.89-20.9-18.35L432 219.08V136a64 64 0 0 0-64-64h-32v-8a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v8h-32a64 64 0 0 0-64 64v83.15l-23.58 9.39c-9.94 3.3-17.63 10-21.15 18.44c-2.45 5.89-5.25 15-1.3 26.46l.1.3l46.66 119.44A23.33 23.33 0 0 0 102.58 408c.5 0 1 0 1.53-.05c31.32-2 56-17.27 72.6-31.61C200.42 396.81 228.31 408 256 408s55.43-11.2 79.14-31.7c16.59 14.36 41.3 29.67 72.61 31.65a23.36 23.36 0 0 0 23.37-14.74l46.65-119c3.28-8.09 2.9-17.76-1.06-27.3ZM269 154.21l-1.14-.4a39.53 39.53 0 0 0-23.73 0l-.58.18l-126.07 50.23a4 4 0 0 1-5.48-3.72V136a32 32 0 0 1 32-32h224a32 32 0 0 1 32 32v64.44a4 4 0 0 1-5.48 3.72Z"
                  />
                </svg>
                <p>more than</p>
                <span>163,29 member</span>
              </div>
              <div className="webData">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M229.19 213c-15.81-27.32-40.63-46.49-69.47-54.62a70 70 0 1 0-63.44 0C67.44 166.5 42.62 185.67 26.81 213a6 6 0 1 0 10.38 6c19.21-33.19 53.15-53 90.81-53s71.6 19.81 90.81 53a6 6 0 1 0 10.38-6ZM70 96a58 58 0 1 1 58 58a58.07 58.07 0 0 1-58-58Z"
                  />
                </svg>
                <p>more than</p>
                <span>163,29 member</span>
              </div>
            </div>
          </div>
        </div>

        {/* ,,,,,Our Story.., */}
        <div className="ourStory">
          <div className="ourStoryL">
            <img
              src="https://demo2.themelexus.com/floaty/wp-content/uploads/2023/02/About-maskgroup01.jpg"
              alt=""
            ></img>
          </div>
          <div className="ourStoryR">
            <div className="stylishTag">Our Story</div>
            <h1>The story of Floaty</h1>
            <p>
              Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
              Proin porta est convallis lacus blandit pretium sed non enim.
              Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum
              ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor
              ac enim. In hac habitasse platea dictumst. Sed cursus venenatis
              tellus, non lobortis diam volutpat sit amet.
            </p>
            <button>Find A Yacht</button>
          </div>
        </div>

{/* .....//.What Our Client Say...//// */}
<div className="ourStory">
          
          <div className="ourStoryR feedBackBtn">
            <div className="stylishTag">what our clients say​</div>
            <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.author}</h3>
            <p>{review.comment}</p>
          </div>
        ))}
      </Slider>
            
          </div>
          <div className="ourStoryL">
            <img
              src="https://demo2.themelexus.com/floaty/wp-content/uploads/2023/02/About-maskgroup02.jpg"
              alt=""
            ></img>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
