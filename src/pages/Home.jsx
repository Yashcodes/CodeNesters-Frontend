import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Testimonial from "../components/Testimonial";
import HeroSectionHome from "../components/HeroSectionHome";
import WhyUsSectionHome from "../components/WhyUsSectionHome";
import BusinessProblemHome from "../components/BusinessProblemHome";
import ContactFromHome from "../components/ContactFromHome";
import { useLocation } from "react-router-dom";
import client1 from "../assets/images/Anu/img11.jpg";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Codenesters - Think | Code | Create | Deploy";
    }
  }, [location]);

  //! Testimonial data
  const HomeTestimonialData = [
    {
      card: {
        id: 1,
        title: "Anushka Baghel",
        subTitle: "Content Writer, Journalist",
        content:
          "I made bacck the purchase price in just 48 hours! Thank you for making it pain less, pleasant. The service was execellent. I will refer everyone I know.",
        image: client1,
      },
    },
    {
      card: {
        id: 2,
        title: "Jeffery Kennan",
        subTitle: "Full Stack Developer",
        content:
          "I made bacck the purchase price in just 48 hours! Thank you for making it pain less, pleasant. The service was execellent. I will refer everyone I know.",
        image:
          "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      },
    },
    {
      card: {
        id: 3,
        title: "Issac Maxwell",
        subTitle: "Finance Director",
        content:
          "I made bacck the purchase price in just 48 hours! Thank you for making it pain less, pleasant. The service was execellent. I will refer everyone I know.",
        image:
          "https://images.unsplash.com/photo-1614574762522-6ac2fbba2208?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY2fHxtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    },
  ];

  return (
    <Layout>
      {/* //! Hero Section  */}
      <HeroSectionHome />

      {/* //!Why CodeNesters */}
      <WhyUsSectionHome />

      {/* //! Business Problems Section  */}
      <BusinessProblemHome />

      {/* //! Immediate contact from home  */}
      <ContactFromHome />

      {/* //! Testimonial  */}
      <Testimonial
        title="SEE WHAT OUR CLIENTS SAY"
        caption=""
        Data={HomeTestimonialData}
      />
    </Layout>
  );
};

export default Home;
