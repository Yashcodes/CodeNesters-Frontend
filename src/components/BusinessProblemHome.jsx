import { MDBBadge, MDBIcon } from "mdb-react-ui-kit";
import React from "react";

import "../styles/BusinessProblemHome.css";
import { useTheme } from "../context/ThemeContext";

const BusinessProblemHome = () => {
  const { themeMode } = useTheme();

  const buttonThemeStyle =
    themeMode === "light"
      ? {
          boxShadow: "0 0 20px #eee",
        }
      : themeMode === "dark"
      ? {
          boxShadow: "none",
        }
      : { boxShadow: "0 0 20px #eee" };

  return (
    <>
      <section
        className="business-prob-section"
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
        <div className="container">
          <div className="business-prob-container">
            <div className="business-problem-head text-center">
              <h2 className="fs-4 prob-main-head" data-aos="fade-up">
                BUSINESS SOLUTION
              </h2>
              <h3
                className="fs-1 fw-bold"
                style={
                  themeMode === "light"
                    ? { color: "black" }
                    : themeMode === "dark"
                    ? { color: "white" }
                    : { color: "black" }
                }
                data-aos="fade-up"
              >
                We are expert people with great <br />
                business solutions
              </h3>
            </div>

            <div className="business-prob-cards">
              <div
                className="prob-card"
                data-aos="fade-right"
                id="prob-card-1"
                style={
                  themeMode === "light"
                    ? {
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                      }
                    : themeMode === "dark"
                    ? {
                        boxShadow:
                          "rgb(37 8 121 / 25%) 0px 13px 61px -8px, rgb(255 255 255 / 30%) 0px 8px 32px -10px",
                      }
                    : {
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                      }
                }
              >
                <div className="card-head">
                  <div className="card-head-icon">
                    <MDBIcon fas icon="laptop-code" size="2x" />
                  </div>
                  <div className="card-head-text">
                    Modern & Responsive Design
                  </div>
                </div>

                <div className="card-content">
                  <p>
                    We craft a sleek online presence with our expertise. Our
                    designs are modern, responsive, and tailored to elevate your
                    business in the digital landscape.
                  </p>
                </div>

                <div className="card-badge">
                  <div id="card-badge-1">
                    <MDBBadge
                      className="badge badge-color-1"
                      style={buttonThemeStyle}
                    >
                      Design
                    </MDBBadge>
                  </div>

                  <div id="card-badge-2">
                    <MDBBadge
                      className="badge badge-color-2"
                      style={buttonThemeStyle}
                    >
                      Development
                    </MDBBadge>
                  </div>
                </div>
              </div>

              <div
                className="prob-card"
                id="prob-card-2"
                data-aos="zoom-in"
                style={
                  themeMode === "light"
                    ? {
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                      }
                    : themeMode === "dark"
                    ? {
                        boxShadow:
                          "rgb(37 8 121 / 25%) 0px 13px 61px -8px, rgb(255 255 255 / 30%) 0px 8px 32px -10px",
                      }
                    : {
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                      }
                }
              >
                <div className="card-head">
                  <div className="card-head-icon">
                    <MDBIcon fas icon="chart-line" size="2x" />
                  </div>
                  <div className="card-head-text">Analytics</div>
                </div>

                <div className="card-content">
                  <p>
                    Gain actionable insights with our advanced analytics. We
                    turn data into strategies, empowering your business
                    decisions for sustainable growth and success.
                  </p>
                </div>

                <div className="card-badge">
                  <div id="card-badge-1">
                    <MDBBadge
                      className="badge badge-color-1"
                      style={buttonThemeStyle}
                    >
                      Reach
                    </MDBBadge>
                  </div>

                  <div id="card-badge-2">
                    <MDBBadge
                      className="badge badge-color-2"
                      style={buttonThemeStyle}
                    >
                      Engagement
                    </MDBBadge>
                  </div>
                </div>
              </div>

              <div
                className="prob-card"
                id="prob-card-2"
                data-aos="fade-left"
                style={
                  themeMode === "light"
                    ? {
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                      }
                    : themeMode === "dark"
                    ? {
                        boxShadow:
                          "rgb(37 8 121 / 25%) 0px 13px 61px -8px, rgb(255 255 255 / 30%) 0px 8px 32px -10px",
                      }
                    : {
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                      }
                }
              >
                <div className="card-head">
                  <div className="card-head-icon">
                    <MDBIcon fas icon="rocket" size="2x" />
                  </div>
                  <div className="card-head-text">Build Engaging Solutions</div>
                </div>

                <div className="card-content">
                  <p>
                    Beyond technology, we're storytellers. Let us build engaging
                    solutions that captivate your audience, turning visitors
                    into loyal customers for lasting business success.
                  </p>
                </div>

                <div className="card-badge">
                  <div id="card-badge-1">
                    <MDBBadge
                      className="badge badge-color-1"
                      style={buttonThemeStyle}
                    >
                      Services
                    </MDBBadge>
                  </div>

                  <div id="card-badge-2">
                    <MDBBadge
                      className="badge badge-color-2"
                      style={buttonThemeStyle}
                    >
                      Products
                    </MDBBadge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessProblemHome;
