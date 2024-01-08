import React from "react";
import AboutBannerImg from "../../assets/images/home/hero1.svg";
import { Link } from "react-router-dom";
const AboutBanner = () => {
  return (
    <>
      <div className="about-container container-fluid pt-5">
        <div className="about-banner-section d-flex align-items-center justify-content-center gap-5 flex-wrap">
          <div
            className="about-banner-left align-self-center d-flex flex-column"
            style={{ maxWidth: "700px" }}
          >
            <p className="text-black fw-bold">
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
