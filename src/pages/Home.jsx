import React from "react";
import Layout from "../components/Layout/Layout";
import Testimonial from "../components/Testimonial";
import HeroSectionHome from "../components/HeroSectionHome";
import WhyUsSectionHome from "../components/WhyUsSectionHome";

const Home = () => {
  return (
    <Layout>
      {/* //! Hero Section  */}
      <HeroSectionHome />

      {/* //!Why CodeNesters */}
      <WhyUsSectionHome />

      {/* //! Testimonial  */}
      <Testimonial />
      {/* <Carousel /> */}
    </Layout>
  );
};

export default Home;
