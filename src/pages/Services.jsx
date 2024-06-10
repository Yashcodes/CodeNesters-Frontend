import React from "react";
import "../styles/Services.css";
import Layout from "../components/Layout/Layout";
import ServiceBanner from "../components/ServicesComponents/ServiceBanner";
import ProjectSection from "../components/ServicesComponents/ProjectSection";
import WhyUsSectionHome from "../components/WhyUsSectionHome";
import ContactForServices from "../components/ServicesComponents/ContactForServices";

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
        aos: "fade-right",
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
        aos: "fade-down",
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
        aos: "fade-left",
      },
    },
    {
      data: {
        id: 4,
        title: "Mobile App Development",
        description: `We're more than techies, we're your partners in success! Get ready for friendly guidance and constant support. Your journey is important, and we're here to make it smooth.`,
        iconName: "mobile-alt",
        iconType: "fas",
        cardInlineStyle: { borderBottom: "6px solid rgb(59, 240, 197)" },
        iconInlineStyle: { backgroundColor: "rgb(59, 240, 197)" },
        aos: "fade-right",
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
        aos: "fade-up",
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
        aos: "fade-left",
      },
    },
  ];

  const options = [
    { value: "landingPages", label: "Landing Pages" },
    { value: "portfolioCreation", label: "Portfolio Creation" },
    { value: "webDevelopment", label: "Web Development" },
    { value: "mobileAppDevelopment", label: "Mobile App Development" },
    { value: "frontendDevelopment", label: "Fronted Development" },
    { value: "webHosting", label: "Web Hosting" },
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
          <br key={Math.random() + Date.now()} />,
          "for your business needs",
        ]}
      />

      <ProjectSection />

      <ContactForServices
        options={options}
        heading={"WANT TO CONNECT?"}
        subHeading={[
          "Let's customize your digital",
          <br key={Math.random() + Date.now()} />,
          "journey together",
        ]}
        optionsLabel={"Select Services"}
        formSubmitApi={"service/submit"}
        requestKey={"services"}
      />
    </Layout>
  );
};

export default Services;
