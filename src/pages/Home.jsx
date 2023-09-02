import React from "react";
import Layout from "../components/Layout/Layout";
import Testimonial from "../components/Testimonial";
import HeroSectionHome from "../components/HeroSectionHome";

const Home = () => {
  return (
    <Layout>
      {/* //! Hero Section  */}
      <HeroSectionHome />

      {/* //! Testimonial  */}
      <Testimonial />
      {/* <Carousel /> */}
    </Layout>
  );
};

export default Home;
