import React from "react";
import CourseBannerImg from "../../assets/images/course/coursebanner (2).svg";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const CourseBanner = () => {
  const { themeMode } = useTheme();

  return (
    <>
      <div
        className="course-container container-fluid pt-5 px-2"
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
        <div className="course-banner-section d-flex align-items-center justify-content-center gap-5 flex-wrap">
          <div
            className="course-banner-left align-self-center d-flex flex-column"
            data-aos="fade-right"
            style={{ maxWidth: "700px" }}
          >
            <p className="fw-bold" style={
                themeMode === "light"
                  ? { color: "rgba(9, 9, 9, 0.842)" }
                  : themeMode === "dark"
                  ? { color: "white" }
                  : { color: "rgba(9, 9, 9, 0.842)" }
              }>
              Start your journey of Skill Mastery with our{" "}
              <span className="text-gradient">Trainings</span> and
              <span className="text-gradient"> Courses</span>
            </p>

            <div className="course-us-btn d-flex flex-row gap-2 flex-wrap">
              <Link className="btn contact-banner-btn" to={"/courses"}>
                View Courses
              </Link>
              <Link className="btn contact-banner-btn" to={"/contact"}>
                Contact Us
              </Link>
            </div>
          </div>

          <div className="course-banner-right" data-aos="fade-left">
            <img src={CourseBannerImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseBanner;
