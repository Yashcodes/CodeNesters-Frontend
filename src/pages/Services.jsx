import React from "react";
import "../styles/Services.css";
import Layout from "../components/Layout/Layout";
import ServiceBanner from "../components/ServicesComponents/ServiceBanner";
import ProjectSection from "../components/ServicesComponents/ProjectSection";
import WhyUsSectionHome from "../components/WhyUsSectionHome";

const Services = () => {
  const whyUsCardData = [
    {
      data: {
        id: 1,
        title: "Landing Pages",
        description: `Transforming your ideas into digital reality, our team at CodeNesters simplifies project development, ensuring your vision comes to life effortlessly.`,
        iconName: "pager",
        iconType: "fas",
        cardInlineStyle: { borderBottom: "6px solid rgb(251, 125, 245)" },
        iconInlineStyle: { backgroundColor: "rgb(251, 125, 245)" },
      },
    },
    {
      data: {
        id: 2,
        title: "Portfolio Creation",
        description: `Reliable upkeep guarantees seamless digital operations, minimizing downtime and disruptions for sustained performance. Your success is our priority.`,
        iconName: "user-alt",
        iconType: "fas",
        cardInlineStyle: { borderBottom: "6px solid rgb(89, 191, 255)" },
        iconInlineStyle: { backgroundColor: "rgb(89, 191, 255)" },
      },
    },
    {
      data: {
        id: 3,
        title: "Web Development",
        description: `Get premium solutions without the premium price tag. We believe in making excellence accessible through budget-friendly services at CodeNesters.`,
        iconName: "rocket",
        iconType: "fas",
        cardInlineStyle: { borderBottom: "6px solid cyan" },
        iconInlineStyle: { backgroundColor: "cyan" },
      },
    },
    {
      data: {
        id: 4,
        title: "Flutter App Development",
        description: `We're more than techies, we're your partners in success! Get ready for friendly guidance and constant support. Your journey is important, and we're here to make it smooth.`,
        iconName: "mobile-alt",
        iconType: "fas",
        cardInlineStyle: { borderBottom: "6px solid rgb(59, 240, 197)" },
        iconInlineStyle: { backgroundColor: "rgb(59, 240, 197)" },
      },
    },
    {
      data: {
        id: 5,
        title: "Frontend Development",
        description: `Dive into our gallery of real-world projects where we've transformed ideas into success stories. Your vision could be the next chapter in our journey of turning possibilities into realities.`,
        iconName: "users-cog",
        iconType: "fas",
        cardInlineStyle: { borderBottom: "6px solid rgb(234, 232, 111)" },
        iconInlineStyle: { backgroundColor: "rgb(234, 232, 111)" },
      },
    },
    {
      data: {
        id: 6,
        title: "Web Hosting",
        description: `Beyond projects, we're your partners in professional growth. With CodeNesters, expect more than just code – anticipate career assistance that propels you towards new heights.`,
        iconName: "code-branch",
        iconType: "fas",
        cardInlineStyle: { borderBottom: "6px solid rgb(244, 86, 141)" },
        iconInlineStyle: { backgroundColor: "rgb(244, 86, 141)" },
      },
    },
  ];

  return (
    <Layout>
      <ServiceBanner />

      {/* //! Using whyUs section as services section */}
      <WhyUsSectionHome
        sectionCardData={whyUsCardData}
        sectionHeading={"OUR SERVICES"}
        headingContent={[
          "Discover our range of services",
          <br />,
          "for your business needs",
        ]}
      />

      <ProjectSection />
    </Layout>
  );
};

export default Services;
