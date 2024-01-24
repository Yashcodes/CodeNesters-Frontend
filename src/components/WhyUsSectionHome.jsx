import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";

import "../styles/WhyUsSectionHome.css";

const WhyUsSectionHome = () => {
  const whyUsCardData = [
    {
      data: {
        id: 1,
        title: "Development",
        description: `Transforming your ideas into digital reality, our team at CodeNesters simplifies project development, ensuring your vision comes to life effortlessly.`,
        iconName: "bug",
        iconType: "fas",
        cardInlineStyle: { borderBottom: "6px solid rgb(251, 125, 245)" },
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
        cardInlineStyle: { borderBottom: "6px solid rgb(89, 191, 255)" },
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
        cardInlineStyle: { borderBottom: "6px solid cyan" },
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
        cardInlineStyle: { borderBottom: "6px solid rgb(59, 240, 197)" },
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
        cardInlineStyle: { borderBottom: "6px solid rgb(234, 232, 111)" },
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
        cardInlineStyle: { borderBottom: "6px solid rgb(244, 86, 141)" },
        iconInlineStyle: { backgroundColor: "rgb(244, 86, 141)" },
      },
    },
  ];

  return (
    <>
      <section className="py-5 whyUsSection">
        <div className="container p-5">
          <h4
            className="text-center"
            style={{ color: "#a87fff", fontWeight: "600" }}
          >
            WHY CODENESTERS?
          </h4>
          <h2 className="fs-1 text-black fw-bold whyUsHeading text-center">
            Making project development <br /> easier and convenient
          </h2>

          <div className="whyUsCardContainer">
            {whyUsCardData.map((cardData) => (
              <div
                className="whyUsCard"
                style={cardData?.data?.cardInlineStyle}
                key={cardData?.data?.id}
              >
                <div
                  className="icon"
                  id="icon1"
                  style={cardData?.data?.iconInlineStyle}
                >
                  <MDBIcon
                    {...cardData?.data?.iconType}
                    icon={cardData?.data?.iconName}
                    size="2x"
                    className="iconChild"
                  />
                </div>

                <div className="card-head">
                  <h4>{cardData?.data?.title}</h4>
                </div>

                <div className="card-content">
                  <p>{cardData?.data?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUsSectionHome;
