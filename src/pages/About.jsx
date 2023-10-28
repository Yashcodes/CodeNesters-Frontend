import React from "react";
import "../styles/About.css";
import Layout from "../components/Layout/Layout";
import Founders from "../components/AboutComponents/Founders";
import AboutUs from "../components/AboutComponents/AboutUs";

const About = () => {
  return (
    <Layout>
      <div className="about-container container-fluid">
        <div className="about-banner-section">
          <h1 className="text-center text-dark m-0">
            Want to know about CodeNesters
          </h1>
          <p className="text-center fs-5">
            We Develop Solutions to Make your Business Grow
          </p>
        </div>
      </div>

      {/* //! About Us Section  */}
      <AboutUs />

      {/* //! Founders Section  */}
      <Founders />
    </Layout>
  );
};

export default About;
