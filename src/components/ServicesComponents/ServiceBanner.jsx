import React from "react";
import serviceBannerImg from "../../assets/images/Services/service-banner.svg";
import { Link } from "react-router-dom";

const ServiceBanner = () => {
  return (
    <>
      <div className="service-container container-fluid pt-5 px-2">
        <div className="service-banner-section d-flex align-items-center justify-content-center gap-5 flex-wrap">
          <div
            className="service-banner-left align-self-center d-flex flex-column"
            style={{ maxWidth: "700px" }}
          >
            <p className="text-black fw-bold">
              We build websites that help your
              <span className="text-gradient"> Business</span> thrive and reach
              <span className="text-gradient"> Customers</span>
            </p>

            <div className="contact-us-btn d-flex flex-row gap-2 flex-wrap">
              <Link className="btn contact-banner-btn" to={"/courses"}>
                Courses
              </Link>
              <Link className="btn contact-banner-btn" to={"/contact"}>
                Contact Us
              </Link>
            </div>
          </div>

          <div className="service-banner-right">
            <img src={serviceBannerImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceBanner;
