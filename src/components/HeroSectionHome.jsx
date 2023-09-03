import React from "react";
import Hero1 from "../assets/images/home/hero2.svg";

import "../styles/HeroSection.css";

const HeroSectionHome = () => {
  return (
    <div className="main-container">
      <div className="hero-section container ">
        <div className="left-hero-section text-start col-md-6">
          <h2 className="hero-head text-start">
            Code <span>Nesters</span>
            <p>Think | Code | Create | Deploy</p>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptates iste minus officiis, soluta quo?
          </p>

          <div className="hero-btn my-3">
            <button className="btn btn-primary hero-btn-1">View Courses</button>
            <button className="btn btn-primary hero-btn-2">Contact Us</button>
          </div>
        </div>
        <div className="right-hero-section col-md-6">
          <img className="img-fluid" src={Hero1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHome;
