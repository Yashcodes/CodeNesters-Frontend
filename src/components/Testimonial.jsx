import React from "react";
import "../styles/Testimonial.css";
import { useTheme } from "../context/ThemeContext";

const Testimonial = ({ title, caption, Data }) => {
  const { themeMode } = useTheme();

  return (
    <>
      <section
        className="section-2 pt-5"
        id="testimonial"
        style={
          themeMode === "light"
            ? {}
            : themeMode === "dark"
            ? {
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgb(28 1 37) 0%, rgb(12, 3, 17) 115%)",
              }
            : {}
        }
      >
        <div className="container">
          <h2
            className="text-center fs-4"
            style={{ color: "#a87fff", fontWeight: "600" }}
          >
            {title.toUpperCase()}
          </h2>
          <h3
            className="fs-1 fw-bold text-center"
            style={
              themeMode === "light"
                ? { color: "black", marginBottom: "60px" }
                : themeMode === "dark"
                ? { color: "white", marginBottom: "60px" }
                : { color: "black", marginBottom: "60px" }
            }
          >
            {caption}
          </h3>
          <p className="border-btm" />
          <div
            className="row mb-5 testimonial-gap"
            style={
              themeMode === "light"
                ? {}
                : themeMode === "dark"
                ? {
                    color: "white",
                  }
                : {}
            }
          >
            {Data.map((cardData) => (
              <div className="col-lg-4" key={cardData?.card?.id}>
                <div className="card">
                  <div
                    className="face front-face"
                    style={
                      themeMode === "light"
                        ? {}
                        : themeMode === "dark"
                        ? {
                            border: "none",
                          }
                        : {}
                    }
                  >
                    <img
                      src={cardData?.card?.image}
                      alt=""
                      className="profile"
                      loading="lazy"
                      width={"150px"}
                      height={"150px"}
                    />
                    <div
                      className="pt-3 text-uppercase name fw-bold"
                      style={
                        themeMode === "light"
                          ? {}
                          : themeMode === "dark"
                          ? {
                              color: "#a87fff",
                            }
                          : {}
                      }
                    >
                      {cardData?.card?.title}
                    </div>
                    <div
                      className="designation"
                      style={
                        themeMode === "light"
                          ? {}
                          : themeMode === "dark"
                          ? {
                              color: "white",
                            }
                          : {}
                      }
                    >
                      {cardData?.card?.subTitle}
                    </div>
                  </div>
                  <div
                    className="face back-face"
                    style={
                      themeMode === "light"
                        ? {}
                        : themeMode === "dark"
                        ? {
                            border: "none",
                          }
                        : {}
                    }
                  >
                    <span
                      className="fas fa-quote-left"
                      style={
                        themeMode === "light"
                          ? {}
                          : themeMode === "dark"
                          ? {
                              color: "white",
                            }
                          : {}
                      }
                    />
                    <div
                      className="testimonial"
                      style={
                        themeMode === "light"
                          ? {}
                          : themeMode === "dark"
                          ? {
                              color: "white",
                            }
                          : {}
                      }
                    >
                      {cardData?.card?.content}
                    </div>
                    <span
                      className="fas fa-quote-right"
                      style={
                        themeMode === "light"
                          ? {}
                          : themeMode === "dark"
                          ? {
                              color: "white",
                            }
                          : {}
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
