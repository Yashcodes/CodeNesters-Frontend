import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Testimonial from "../components/Testimonial";
import HeroSectionHome from "../components/HeroSectionHome";
import WhyUsSectionHome from "../components/WhyUsSectionHome";
import BusinessProblemHome from "../components/BusinessProblemHome";
import ContactFromHome from "../components/ContactFromHome";
import { useLocation } from "react-router-dom";
import client1 from "../assets/images/home/testimonial-1.jpg";
import client2 from "../assets/images/home/testimonial-2.jpg";
import { Helmet } from "react-helmet-async";
import TrainingHome from "../components/TrainingHome";

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
        title: "MD Jishan",
        subTitle: "Founder, MJ Groups",
        content:
          "Codenesters did an outstanding job developing our website. Their team was responsive, professional, and delivered exactly what we needed. Highly recommended!",
        image: client1,
        aos: "fade-right",
      },
    },
    {
      card: {
        id: 2,
        title: "Md. Afzal",
        subTitle: "President, Scripting Coders",
        content:
          "The version control session by Codenesters was highly informative. The trainers made complex concepts easy to understand, and we gained valuable hands-on skills. Great learning experience!",
        image: client2,
        aos: "zoom-in",
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
        aos: "fade-left",
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
        aos: "fade-right",
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
        aos: "fade-down",
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
        aos: "fade-left",
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
        aos: "fade-right",
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
        aos: "fade-up",
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
        aos: "fade-left",
      },
    },
  ];

  const TrainingHomeData = [
    {
      data: {
        id: 1,
        title: "Hands-on Learning",
        description: `Immerse yourself in hands-on learning experiences that bridge the gap between theory and practice, equipping you for real-world challenges in career growth.`,
        iconName: "bug",
        iconType: "fas",
        cardInlineStyle: "6px solid rgb(251, 125, 245)",
        iconInlineStyle: { backgroundColor: "rgb(251, 125, 245)" },
        aos: "fade-right",
      },
    },
    {
      data: {
        id: 2,
        title: "Flexible Learning",
        description: `Discover flexible learning options designed to fit your lifestyle, ensuring you can pursue your education and training while managing work or personal commitments effectively.`,
        iconName: "tools",
        iconType: "fas",
        cardInlineStyle: "6px solid rgb(89, 191, 255)",
        iconInlineStyle: { backgroundColor: "rgb(89, 191, 255)" },
        aos: "fade-down",
      },
    },
    {
      data: {
        id: 3,
        title: "Flexible Schedules",
        description: `Take advantage of flexible schedules for our internships and training, allowing you to learn at your own pace and gain valuable skills without sacrificing your other responsibilities.`,
        iconName: "hand-holding-usd",
        iconType: "fas",
        cardInlineStyle: "6px solid cyan",
        iconInlineStyle: { backgroundColor: "cyan" },
        aos: "fade-left",
      },
    },
    {
      data: {
        id: 4,
        title: "Career Pathways",
        description: `Navigate clear career pathways through our comprehensive programs, guiding you from foundational training to meaningful employment opportunities in the tech industry.`,
        iconName: "question-circle",
        iconType: "far",
        cardInlineStyle: "6px solid rgb(59, 240, 197)",
        iconInlineStyle: { backgroundColor: "rgb(59, 240, 197)" },
        aos: "fade-right",
      },
    },
    {
      data: {
        id: 5,
        title: "Impactful Projects",
        description: `Participate in impactful projects that not only enhance your resume but also provide invaluable real-world experience, making you a standout candidate for future opportunities.`,
        iconName: "users-cog",
        iconType: "fas",
        cardInlineStyle: "6px solid rgb(234, 232, 111)",
        iconInlineStyle: { backgroundColor: "rgb(234, 232, 111)" },
        aos: "fade-up",
      },
    },
    {
      data: {
        id: 6,
        title: "Certifications",
        description: `Achieve recognized certifications that validate your skills and knowledge, giving you a competitive edge in the job market and showcasing your dedication to learning.`,
        iconName: "bug",
        iconType: "fas",
        cardInlineStyle: "6px solid rgb(244, 86, 141)",
        iconInlineStyle: { backgroundColor: "rgb(244, 86, 141)" },
        aos: "fade-left",
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
        <meta
          property="og:image"
          content="https://res.cloudinary.com/drzrhwe1x/image/upload/v1720105027/users/xbfjhsg4vizn9gszvnd0.png"
        />
        <meta property="og:url" content="https://codenesters.in/" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:title" content="Your Website Title" /> */}
        {/* <meta property="og:description" content="Description of your website" /> */}
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

      {/* //! Training Home  */}
      <TrainingHome sectionCardData={TrainingHomeData}
        sectionHeading={"TRAINING & INTERNSHIP"}
        headingContent={[
          "Delivering the best trainings and",
          <br key={Math.random() + Date.now()} />,
          " internships with projects",
        ]}/>

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
        caption="What we heard about ourselves!"
        Data={HomeTestimonialData}
      />
    </Layout>
  );
};

export default Home;
