import { MDBBadge, MDBIcon } from "mdb-react-ui-kit";
import React from "react";

import "../styles/BusinessProblemHome.css";

const BusinessProblemHome = () => {
  return (
    <>
      <section className="business-prob-section m-0">
        <div className="container">
          <div className="business-prob-container">
            <div className="business-problem-head text-center">
              <h4 className="prob-main-head" >BUSINESS SOLUTION</h4>
              <h2 className="fs-1 fw-bold text-black">
                We are expert people with great <br />
                business solutions
              </h2>
            </div>

            <div className="business-prob-cards">
              <div className="prob-card" id="prob-card-1">
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Id, eveniet quas! Laudantium odit similique quam error rerum
                    dolores cupiditate nisi?
                  </p>
                </div>

                <div className="card-badge">
                  <div id="card-badge-1">
                    <MDBBadge className="badge badge-color-1">Design</MDBBadge>
                  </div>

                  <div id="card-badge-2">
                    <MDBBadge className="badge badge-color-2">
                      Development
                    </MDBBadge>
                  </div>
                </div>
              </div>

              <div className="prob-card" id="prob-card-2">
                <div className="card-head">
                  <div className="card-head-icon">
                    <MDBIcon fas icon="chart-line" size="2x" />
                  </div>
                  <div className="card-head-text">Analytics</div>
                </div>

                <div className="card-content">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Id, eveniet quas! Laudantium odit similique quam error rerum
                    dolores cupiditate nisi?
                  </p>
                </div>

                <div className="card-badge">
                  <div id="card-badge-1">
                    <MDBBadge className="badge badge-color-1">Reach</MDBBadge>
                  </div>

                  <div id="card-badge-2">
                    <MDBBadge className="badge badge-color-2">Engagement</MDBBadge>
                  </div>
                </div>
              </div>

              <div className="prob-card" id="prob-card-2">
                <div className="card-head">
                  <div className="card-head-icon">
                    <MDBIcon fas icon="rocket" size="2x" />
                  </div>
                  <div className="card-head-text">Build Engaging Solutions</div>
                </div>

                <div className="card-content">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Id, eveniet quas! Laudantium odit similique quam error rerum
                    dolores cupiditate nisi?
                  </p>
                </div>

                <div className="card-badge">
                  <div id="card-badge-1">
                    <MDBBadge className="badge badge-color-1">
                      Services
                    </MDBBadge>
                  </div>

                  <div id="card-badge-2">
                    <MDBBadge className="badge badge-color-2">Products</MDBBadge>
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
