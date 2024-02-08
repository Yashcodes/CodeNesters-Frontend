import React from "react";
import "../styles/About.css";
import Layout from "../components/Layout/Layout";
import AboutUs from "../components/AboutComponents/AboutUs";
import AboutBanner from "../components/AboutComponents/AboutBanner";
import ContactFromHome from "../components/ContactFromHome";
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
      {/* <Testimonial title={"Hii"} caption={"dag"} Data={FoundersData}/> */}

      {/* //! Social Media Links */}
      <ContactFromHome
        heading={"Want your business grow online?"}
        mainContent={"We Provide Innovative Website Development Solutions."}
        subContent={"Want to build your online portfolio? Contact us on :"}
      />
    </Layout>
  );
};

export default About;
