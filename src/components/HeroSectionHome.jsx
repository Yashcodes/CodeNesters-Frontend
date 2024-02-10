import React from "react";
import Hero from "../assets/images/home/hero8.webp";
import "../styles/HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSectionHome = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  //   AOS.refresh();
  // }, []);

  return (
    <div className="main-container">
      <div className="hero-section container ">
        <div className="left-hero-section text-start col-md-6">
          <h1 className="hero-head text-start">
            Code <span className="text-gradient">Nesters</span>
            <p>Think | Code | Create | Deploy</p>
          </h1>

          <p className="mb-0 text-justify" style={{ fontSize: "19px" }}>
            The best software company in raipur engaged in creating the backbone
            of your online presence with visually appealing and user-friendly
            interfaces at extremely low cost. <br /> Here, we bring dreams to
            life through exceptional website and app development and design
            services.
          </p>

          <div className="hero-btn mb-3 mt-1">
            <button
              className="btn hero-btn-1"
              onClick={() => navigate("/services")}
            >
              View Services
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
          <img
            className="img-fluid"
            src={Hero}
            alt=""
            width={"370"}
            height={"200px"}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHome;
