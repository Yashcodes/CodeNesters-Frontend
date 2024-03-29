import React from "react";
import Layout from "../components/Layout/Layout";
import gitEvent from "../assets/images/events/git-event.jpg";
import { Link } from "react-router-dom";
import slugify from "slugify"

const Events = () => {
  return (
    <Layout>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6">
            <div className="event-card p-2 border shadow rounded">
              <div className="event-card-img">
                <img
                  src={gitEvent}
                  alt=""
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "2px 2px 0px 0px",
                  }}
                  className="img-fluid"
                />
              </div>
              <div className="card-body py-2 px-2">
                <h5 className="m-0 fw-bold my-1 text-dark">
                  Git and GitHub - Session on Version Controlling
                </h5>
                <p style={{ lineHeight: "22px" }} className="text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error esse aliquid deleniti sequi dolores impedit mollitia
                  voluptate rerum beatae cupiditate. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Voluptatibus, laudantium!
                </p>

                <div className="event-register d-flex align-items-center justify-content-between flex-wrap">
                  <div className="left d-flex align-items-center gap-3 flex-wrap">
                    <Link to={`/event/${slugify("Git and GitHub").toLowerCase()}`}>
                      <button className="btn contact-banner-btn">
                        Know More
                      </button>
                    </Link>
                    <div className="event-price d-flex justify-content-between flex-wrap">
                      <p className="m-0">
                        Price : Rs. 19/-{" "}
                        <span
                          style={{ textDecoration: "line-through" }}
                          className="text-danger"
                        >
                          Rs. 49
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="event-discount align-self-right">
                    <span className="badge badge-success fs-5">60% off</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
