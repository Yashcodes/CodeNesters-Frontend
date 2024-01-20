import React, { useEffect } from "react";
import CourseBannerImg from "../../assets/images/course/coursebanner (2).svg";
import { Link } from "react-router-dom";

const CourseBanner = () => {
  return (
    <>
      <div className="course-container container-fluid pt-5 px-2">
        <div className="course-banner-section d-flex align-items-center justify-content-center gap-5 flex-wrap">
          <div
            className="course-banner-left align-self-center d-flex flex-column"
            style={{ maxWidth: "700px" }}
          >
            <p className="text-black fw-bold">
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

          <div className="course-banner-right">
            <img src={CourseBannerImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseBanner;
