import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";

import "../styles/WhyUsSectionHome.css";
import { useTheme } from "../context/ThemeContext";

const WhyUsSectionHome = ({
  sectionCardData,
  sectionHeading,
  headingContent,
}) => {
  const { themeMode } = useTheme();

  return (
    <>
      <section
        className="py-5 whyUsSection"
        style={
          themeMode === "light"
            ? {}
            : themeMode === "dark"
            ? {
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgb(25 13 29) 0%, rgb(0 0 0) 115%)",
                color: "white",
              }
            : {}
        }
      >
        <div className="container p-5">
          <h2
            className="text-center fs-4"
            style={{ color: "#a87fff", fontWeight: "600" }}
          >
            {sectionHeading}
          </h2>
          <h3
            className="fs-1 fw-bold whyUsHeading text-center"
            style={
              themeMode === "light"
                ? { color: "black" }
                : themeMode === "dark"
                ? { color: "white" }
                : { color: "black" }
            }
          >
            {headingContent}
          </h3>

          <div className="whyUsCardContainer">
            {sectionCardData.map((cardData) => (
              <div
                className="whyUsCard"
                style={
                  themeMode === "light"
                    ? {
                        borderBottom: cardData?.data?.cardInlineStyle,
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                      }
                    : themeMode === "dark"
                    ? {
                        borderBottom: cardData?.data?.cardInlineStyle,
                        boxShadow:
                          "rgb(72 46 95 / 25%) 0px 13px 54px 8px, rgb(67 12 117 / 55%) 0px 8px 14px 3px",
                      }
                    : {
                        borderBottom: cardData?.data?.cardInlineStyle,
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                      }
                }
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
