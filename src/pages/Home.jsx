import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Testimonial from "../components/Testimonial";
import HeroSectionHome from "../components/HeroSectionHome";
import WhyUsSectionHome from "../components/WhyUsSectionHome";
import BusinessProblemHome from "../components/BusinessProblemHome";
import ContactFromHome from "../components/ContactFromHome";
import { useLocation } from "react-router-dom";
import client1 from "../assets/images/Anu/img11.webp";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "CodeNesters - Think | Code | Create | Deploy";
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

  //! Why Us Section Data

  const whyUsCardData = [
    {
      data: {
        id: 1,
        title: "Development",
        description: `Transforming your ideas into digital reality, our team at CodeNesters simplifies project development, ensuring your vision comes to life effortlessly.`,
        iconName: "bug",
        iconType: "fas",
        cardInlineStyle: "6px solid rgb(251, 125, 245)",
        iconInlineStyle: { backgroundColor: "rgb(251, 125, 245)" },
      },
    },
    {
      data: {
        id: 2,
        title: "Maintenance",
        description: `Reliable upkeep guarantees seamless digital operations, minimizing downtime and disruptions for sustained performance. Your success is our priority.`,
        iconName: "tools",
        iconType: "fas",
        cardInlineStyle: "6px solid rgb(89, 191, 255)",
        iconInlineStyle: { backgroundColor: "rgb(89, 191, 255)" },
      },
    },
    {
      data: {
        id: 3,
        title: "Affordable",
        description: `Get premium solutions without the premium price tag. We believe in making excellence accessible through budget-friendly services at CodeNesters.`,
        iconName: "hand-holding-usd",
        iconType: "fas",
        cardInlineStyle: "6px solid cyan",
        iconInlineStyle: { backgroundColor: "cyan" },
      },
    },
    {
      data: {
        id: 4,
        title: "Support",
        description: `We're more than techies, we're your partners in success! Get ready for friendly guidance and constant support. Your journey is important, and we're here to make it smooth.`,
        iconName: "question-circle",
        iconType: "far",
        cardInlineStyle: "6px solid rgb(59, 240, 197)",
        iconInlineStyle: { backgroundColor: "rgb(59, 240, 197)" },
      },
    },
    {
      data: {
        id: 5,
        title: "Real-world Projects",
        description: `Dive into our gallery of real-world projects where we've transformed ideas into success stories. Your vision could be the next chapter in our journey of turning possibilities into realities.`,
        iconName: "users-cog",
        iconType: "fas",
        cardInlineStyle: "6px solid rgb(234, 232, 111)",
        iconInlineStyle: { backgroundColor: "rgb(234, 232, 111)" },
      },
    },
    {
      data: {
        id: 6,
        title: "Career Assistance",
        description: `Beyond projects, we're your partners in professional growth. With CodeNesters, expect more than just code – anticipate career assistance that propels you towards new heights.`,
        iconName: "bug",
        iconType: "fas",
        cardInlineStyle: "6px solid rgb(244, 86, 141)",
        iconInlineStyle: { backgroundColor: "rgb(244, 86, 141)" },
      },
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>CodeNesters - Think | Code | Create | Deploy</title>
        <meta
          name="keywords"
          content="CodeNesters, best software company, software company in raipur, best software company in raipur, CodeNesters.in, codenesters shivanand nagar, codenesters raipur, codenesters india, digital services, web development, website, web app, seo, coding, coding courses, website design, landing pages, portfolio, business portfolio,"
        />
        <meta
          name="description"
          content="Best Software Company | Software company in raipur engaged in creating the backbone of your digital presence | We develop business portfolio, landing pages, websites and apps"
        />
        <link rel="canonical" href="https://www.codenesters.in/" />
      </Helmet>

      {/* //! Hero Section  */}
      <HeroSectionHome />

      {/* //!Why CodeNesters */}
      <WhyUsSectionHome
        sectionCardData={whyUsCardData}
        sectionHeading={"WHY CODENESTERS?"}
        headingContent={[
          "Making project development",
          <br key={Math.random() + Date.now()} />,
          " easier and convenient",
        ]}
      />

      {/* //! Business Problems Section  */}
      <BusinessProblemHome />

      {/* //! Immediate contact from home  */}
      <ContactFromHome
        heading={"Are you interested?"}
        mainContent={"Entrust Your Project to Our Best Team of Professionals"}
        subContent={"Have any project on mind? For immediate support :"}
      />

      {/* //! Testimonial  */}
      <Testimonial
        title="OUR REVIEWS"
        caption="SEE WHAT OUR CLIENTS SAY"
        Data={HomeTestimonialData}
      />
    </Layout>
  );
};

export default Home;
