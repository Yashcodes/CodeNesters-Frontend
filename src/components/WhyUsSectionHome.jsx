import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";

const WhyUsSectionHome = () => {
  return (
    <>
      <section className="py-5 whyUsSection">
        <div className="container p-5">
          <h4 className="text-black text-center">Why CodeNesters?</h4>
          <h2 className="fs-1 text-black fw-bold whyUsHeading">
            Making project development <br /> easier and convenient
          </h2>

          <div className="whyUsCardContainer">
            <div
              className="whyUsCard"
              style={{ "border-bottom": "6px solid rgb(251, 125, 245)" }}
            >
              <div
                className="icon"
                id="icon1"
                style={{ "background-color": "rgb(251, 125, 245)" }}
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
              style={{ "border-bottom": "6px solid rgb(89, 191, 255)" }}
            >
              <div
                className="icon"
                id="icon2"
                style={{ "background-color": "rgb(89, 191, 255)" }}
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
              style={{ "border-bottom": "6px solid cyan" }}
            >
              <div
                className="icon"
                id="icon3"
                style={{ "background-color": "cyan" }}
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
              style={{ "border-bottom": "6px solid rgb(59, 240, 197)" }}
            >
              <div
                className="icon"
                id="icon4"
                style={{ "background-color": "rgb(59, 240, 197)" }}
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
              style={{ "border-bottom": "6px solid rgb(234, 232, 111)" }}
            >
              <div
                className="icon"
                id="icon5"
                style={{ "background-color": "rgb(234, 232, 111)" }}
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
              style={{ "border-bottom": "6px solid rgb(244, 86, 141)" }}
            >
              <div
                className="icon"
                id="icon6"
                style={{ "background-color": "rgb(244, 86, 141)" }}
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
