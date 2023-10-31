import React, { useEffect } from "react";
import AboutBannerImg from "../../assets/images/home/hero1.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="about-container container-fluid pt-5">
        {/* <h1 className="text-center text-light">Welcome to the CodeNesters</h1>
        <p className="text-center fs-5">
          We Develop Solutions to Make your Business Grow
        </p> */}

        <div className="about-banner-section d-flex align-items-center justify-content-center gap-5 flex-wrap">
          <div
            className="about-banner-left align-self-center d-flex flex-column"
            style={{ maxWidth: "700px" }}
            data-aos="fade-right"
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

          <div className="about-banner-right" data-aos="fade-left">
            <img src={AboutBannerImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;
