import React, { useEffect } from "react";
import Hero from "../assets/images/home/hero8.webp";
import "../styles/HeroSection.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSectionHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="main-container">
      <div className="hero-section container ">
        <div className="left-hero-section text-start col-md-6" data-aos="fade-right">
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
        <div className="right-hero-section col-md-6" data-aos="fade-left">
          <img className="img-fluid" src={Hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHome;
