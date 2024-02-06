import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";

import "../styles/WhyUsSectionHome.css";

const WhyUsSectionHome = ({
  sectionCardData,
  sectionHeading,
  headingContent,
}) => {
  return (
    <>
      <section className="py-5 whyUsSection">
        <div className="container p-5">
          <h4
            className="text-center"
            style={{ color: "#a87fff", fontWeight: "600" }}
          >
            {sectionHeading}
          </h4>
          <h2 className="fs-1 text-black fw-bold whyUsHeading text-center">
            {headingContent}
          </h2>

          <div className="whyUsCardContainer">
            {sectionCardData.map((cardData) => (
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
