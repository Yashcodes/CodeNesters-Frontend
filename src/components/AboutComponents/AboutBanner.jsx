import React from "react";
import AboutBannerImg from "../../assets/images/home/hero1.svg";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
const AboutBanner = () => {
  const { themeMode } = useTheme();

  return (
    <>
      <div
        className="about-container container-fluid pt-5"
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
                  "linear-gradient(198deg, #bba9e2aa 0%, #ffffff 100%)",
              }
        }
      >
        <div className="about-banner-section d-flex align-items-center justify-content-center gap-5 flex-wrap">
          <div
            className="about-banner-left align-self-center d-flex flex-column"
            style={{ maxWidth: "700px" }}
          >
            <p
              className="fw-bold"
              style={
                themeMode === "light"
                  ? { color: "rgba(9, 9, 9, 0.842)" }
                  : themeMode === "dark"
                  ? { color: "white" }
                  : { color: "rgba(9, 9, 9, 0.842)" }
              }
            >
              We believe in <span className="text-gradient">Collaboration</span>{" "}
              and
              <span className="text-gradient"> Implementation</span> of best
              practices
            </p>

            <div className="about-us-btn d-flex flex-row gap-2 flex-wrap">
              <Link className="btn contact-banner-btn" to={"/courses"}>
                View Courses
              </Link>
              <Link className="btn contact-banner-btn" to={"/contact"}>
                Contact Us
              </Link>
            </div>
          </div>

          <div className="about-banner-right">
            <img src={AboutBannerImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;
