import { MDBIcon } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import AOS from "aos";

import "../styles/WhyUsSectionHome.css";
import "aos/dist/aos.css";

const WhyUsSectionHome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="py-5 whyUsSection">
        <div className="container p-5">
          <h4
            className="text-center"
            style={{ color: "#a87fff", fontWeight: "600" }}
            data-aos="fade-up"
          >
            WHY CODENESTERS?
          </h4>
          <h2
            className="fs-1 text-black fw-bold whyUsHeading text-center"
            data-aos="fade-up"
          >
            Making project development <br /> easier and convenient
          </h2>

          <div className="whyUsCardContainer">
            <div
              className="whyUsCard"
              data-aos="zoom-out-right"
              style={{ borderBottom: "6px solid rgb(251, 125, 245)" }}
            >
              <div
                className="icon"
                id="icon1"
                style={{ backgroundColor: "rgb(251, 125, 245)" }}
              >
                <MDBIcon fas icon="bug" size="2x" className="iconChild" />
              </div>

              <div className="card-head">
                <h4>Development</h4>
              </div>

              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  ipsum adipisci unde pariatur eligendi voluptas, vel in
                </p>
              </div>
            </div>

            <div
              className="whyUsCard"
              data-aos="zoom-out-down"
              style={{ borderBottom: "6px solid rgb(89, 191, 255)" }}
            >
              <div
                className="icon"
                id="icon2"
                style={{ backgroundColor: "rgb(89, 191, 255)" }}
              >
                <MDBIcon fas icon="tools" size="2x" className="iconChild" />
              </div>

              <div className="card-head">
                <h4>Maintenance</h4>
              </div>

              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  ipsum adipisci unde pariatur eligendi voluptas, vel in
                </p>
              </div>
            </div>

            <div
              className="whyUsCard"
              data-aos="zoom-out-left"
              style={{ borderBottom: "6px solid cyan" }}
            >
              <div
                className="icon"
                id="icon3"
                style={{ backgroundColor: "cyan" }}
              >
                <MDBIcon
                  fas
                  icon="hand-holding-usd"
                  size="2x"
                  className="iconChild"
                />
              </div>

              <div className="card-head">
                <h4>Affordable</h4>
              </div>

              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  ipsum adipisci unde pariatur eligendi voluptas, vel in
                </p>
              </div>
            </div>

            <div
              className="whyUsCard"
              data-aos="zoom-out-right"
              style={{ borderBottom: "6px solid rgb(59, 240, 197)" }}
            >
              <div
                className="icon"
                id="icon4"
                style={{ backgroundColor: "rgb(59, 240, 197)" }}
              >
                <MDBIcon
                  far
                  icon="question-circle"
                  size="2x"
                  className="iconChild"
                />
              </div>

              <div className="card-head">
                <h4>Support</h4>
              </div>

              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  ipsum adipisci unde pariatur eligendi voluptas, vel in
                </p>
              </div>
            </div>

            <div
              className="whyUsCard"
              data-aos="zoom-out-up"
              style={{ borderBottom: "6px solid rgb(234, 232, 111)" }}
            >
              <div
                className="icon"
                id="icon5"
                style={{ backgroundColor: "rgb(234, 232, 111)" }}
              >
                <MDBIcon fas icon="users-cog" size="2x" className="iconChild" />
              </div>

              <div className="card-head">
                <h4>Real-world Projects</h4>
              </div>

              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  ipsum adipisci unde pariatur eligendi voluptas, vel in
                </p>
              </div>
            </div>

            <div
              className="whyUsCard"
              data-aos="zoom-out-left"
              style={{ borderBottom: "6px solid rgb(244, 86, 141)" }}
            >
              <div
                className="icon"
                id="icon6"
                style={{ backgroundColor: "rgb(244, 86, 141)" }}
              >
                <MDBIcon
                  fas
                  icon="graduation-cap"
                  size="2x"
                  className="iconChild"
                />
              </div>

              <div className="card-head">
                <h4>Career Assistance</h4>
              </div>

              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  ipsum adipisci unde pariatur eligendi voluptas, vel in
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUsSectionHome;
