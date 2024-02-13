import React from "react";
import Hero from "../assets/images/home/hero8.webp";
import "../styles/HeroSection.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const HeroSectionHome = () => {
  const navigate = useNavigate();

  const { themeMode } = useTheme();

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  //   AOS.refresh();
  // }, []);

  const buttonThemeStyle =
    themeMode === "light"
      ? {
          boxShadow: "0 0 20px #eee",
        }
      : themeMode === "dark"
      ? {
          boxShadow: "none",
        }
      : { boxShadow: "0 0 20px #eee" };

  return (
    <div
      className="main-container"
      style={
        themeMode === "light"
          ? {
              backgroundImage:
                "linear-gradient(198deg, #bba9e2aa 0%, #ffffff 100%)",
            }
          : themeMode === "dark"
          ? {
              backgroundImage:
                "linear-gradient(451deg, rgb(157, 80, 187) -110%, rgb(0, 0, 0) 28%)",
              color: "white",
            }
          : {
              backgroundImage:
                "linear-gradient(to right,#9d50bb 0%,#6e48aa 51%,#9d50bb 100%)",
            }
      }
    >
      <div className="hero-section container ">
        <div className="left-hero-section text-start col-md-6">
          <h1
            className="hero-head text-start"
            style={
              themeMode === "light"
                ? { color: "rgba(9, 9, 9, 0.842)" }
                : themeMode === "dark"
                ? { color: "white" }
                : { color: "rgba(9, 9, 9, 0.842)" }
            }
          >
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
              style={buttonThemeStyle}
            >
              View Services
            </button>
            <button
              className="btn hero-btn-2"
              onClick={() => navigate("/contact")}
              style={buttonThemeStyle}
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
