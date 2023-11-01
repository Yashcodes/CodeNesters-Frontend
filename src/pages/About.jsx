import React from "react";
import "../styles/About.css";
import Layout from "../components/Layout/Layout";
import AboutUs from "../components/AboutComponents/AboutUs";
import AboutBanner from "../components/AboutComponents/AboutBanner";
import Founders from "../components/AboutComponents/Founders";

const About = () => {
  return (
    <Layout>
      {/* //! About Banner  */}
      <AboutBanner />

      {/* //! About Us Section  */}
      <AboutUs />

      {/* //! Founders Section  */}
      <Founders />
    </Layout>
  );
};

export default About;
