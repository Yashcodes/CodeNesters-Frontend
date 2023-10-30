import React from "react";
import Hero from "../assets/images/home/hero8.webp";
import "../styles/HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSectionHome = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="hero-section container ">
        <div className="left-hero-section text-start col-md-6">
          <h2 className="hero-head text-start">
            Code <span className="text-gradient">Nesters</span>
            <p>Think | Code | Create | Deploy</p>
          </h2>

          <p className="fs-5 mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptates iste minus officiis, soluta quo?
          </p>

          <div className="hero-btn mb-3 mt-1">
            <button
              className="btn hero-btn-1"
              onClick={() => navigate("/courses")}
            >
              View Courses
            </button>
            <button
              className="btn hero-btn-2"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="right-hero-section col-md-6">
          <img className="img-fluid" src={Hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHome;
