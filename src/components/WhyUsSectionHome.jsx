import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";

import "../styles/WhyUsSectionHome.css";

const WhyUsSectionHome = () => {
  const whyUsCardData = [
    {
      data: {
        title: "Development",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        ipsum adipisci unde pariatur eligendi voluptas, vel in`,
        iconName: "bug",
        iconType: "fas",

        cardInlineStyle: { borderBottom: "6px solid rgb(251, 125, 245)" },
        iconInlineStyle: { backgroundColor: "rgb(251, 125, 245)" },
      },
    },
    {
      data: {
        title: "Maintenance",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        ipsum adipisci unde pariatur eligendi voluptas, vel in`,
        iconName: "tools",
        iconType: "fas",
        cardInlineStyle: { borderBottom: "6px solid rgb(89, 191, 255)" },
        iconInlineStyle: { backgroundColor: "rgb(89, 191, 255)" },
      },
    },
    {
      data: {
        title: "Affordable",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        ipsum adipisci unde pariatur eligendi voluptas, vel in`,
        iconName: "hand-holding-usd",
        iconType: "fas",
        cardInlineStyle: { borderBottom: "6px solid cyan" },
        iconInlineStyle: { backgroundColor: "cyan" },
      },
    },
    {
      data: {
        title: "Support",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        ipsum adipisci unde pariatur eligendi voluptas, vel in`,
        iconName: "question-circle",
        iconType: "far",
        cardInlineStyle: { borderBottom: "6px solid rgb(59, 240, 197)" },
        iconInlineStyle: { backgroundColor: "rgb(59, 240, 197)" },
      },
    },
    {
      data: {
        title: "Real-world Projects",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        ipsum adipisci unde pariatur eligendi voluptas, vel in`,
        iconName: "users-cog",
        iconType: "fas",
        cardInlineStyle: { borderBottom: "6px solid rgb(234, 232, 111)" },
        iconInlineStyle: { backgroundColor: "rgb(234, 232, 111)" },
      },
    },
    {
      data: {
        title: "Career Assistance",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        ipsum adipisci unde pariatur eligendi voluptas, vel in`,
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
                key={Date.now() + Math.random()}
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
