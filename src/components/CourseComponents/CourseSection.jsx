import React from "react";
import { Link } from "react-router-dom";
import CourseImage from "../../assets/images/contact/c1.jpg";
import slugify from "slugify";

const CourseSection = () => {
  const courseCardData = [
    {
      card: {
        title: "MERN Stack Development",
        discount: "50% off",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis quo saepe voluptatem perferendis cupiditate
        molestias unde! Fuga non id architecto perspiciatis. Vel
        possimus architecto beatae?`,
        price: "3499",
        aos: "zoom-out-right",
      },
    },
    {
      card: {
        title: "Flutter with Firebase",
        discount: "50% off",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis quo saepe voluptatem perferendis cupiditate
        molestias unde! Fuga non id architecto perspiciatis. Vel
        possimus architecto beatae?`,
        price: "3499",
        aos: "zoom-out-down",
      },
    },
    {
      card: {
        title: "PHP with MySQL",
        discount: "50% off",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis quo saepe voluptatem perferendis cupiditate
        molestias unde! Fuga non id architecto perspiciatis. Vel
        possimus architecto beatae?`,
        price: "3499",
        aos: "zoom-out-left",
      },
    },
    {
      card: {
        title: "Python Programming",
        discount: "50% off",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis quo saepe voluptatem perferendis cupiditate
        molestias unde! Fuga non id architecto perspiciatis. Vel
        possimus architecto beatae?`,
        price: "3499",
        aos: "zoom-out-right",
      },
    },
    {
      card: {
        title: "C++ Programming",
        discount: "50% off",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis quo saepe voluptatem perferendis cupiditate
        molestias unde! Fuga non id architecto perspiciatis. Vel
        possimus architecto beatae?`,
        price: "3499",
        aos: "zoom-out-up",
      },
    },
    {
      card: {
        title: "PHP with MySQL",
        discount: "50% off",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis quo saepe voluptatem perferendis cupiditate
        molestias unde! Fuga non id architecto perspiciatis. Vel
        possimus architecto beatae?`,
        price: "3499",
        aos: "zoom-out-left",
      },
    },
  ];

  return (
    <div className="py-5">
      <h4
        className="text-center mx-1"
        style={{ color: "#a87fff", fontWeight: "600" }}
      >
        COURSES AND TRAININGS
      </h4>
      <h2 className="fs-1 fw-bold text-black text-center mx-1">
        Learn and grow your skills <br /> with our courses
      </h2>

      <div className="course-cards container px-5">
        <div className="row d-flex flex-wrap flex-row my-5">
          {courseCardData.map((cardData) => (
            <div className="col-md-4 my-2">
              <div className="course-card border shadow">
                <div className="card-img course-card-img img-fluid">
                  <img
                    src={CourseImage}
                    alt=""
                    height={"250px"}
                    width={"100%"}
                  />
                </div>

                <div className="card-content p-3">
                  <div className="course-card-head d-flex justify-content-between align-items-center">
                    <h4
                      className="text-black"
                      style={{ fontSize: "22px", fontWeight: "600" }}
                    >
                      {cardData?.card?.title}
                    </h4>
                    <span className="badge badge-success">{cardData?.card?.discount}</span>
                  </div>
                  <p className="text-justify" style={{ fontSize: "16px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis quo saepe voluptatem perferendis cupiditate
                    molestias unde! Fuga non id architecto perspiciatis. Vel
                    possimus architecto beatae?
                  </p>

                  <div className="course-card-btn d-flex align-items-center gap-2">
                    <Link
                      className="btn contact-banner-btn"
                      to={`/courses/${slugify(
                        cardData.card.title,
                        "-"
                      ).toLowerCase()}`}
                      onClick={() => {
                        localStorage.setItem(
                          "cardData",
                          JSON.stringify(cardData)
                        );
                      }}
                    >
                      View Details
                    </Link>

                    <div className="card-price">
                      <span className="m-0 text-gradient">
                        Rs. 3499/-
                        <p
                          className="text-decoration-line-through d-inline"
                          style={{
                            marginLeft: "8px",
                            fontWeight: "normal",
                            color: "gray",
                          }}
                        >
                          Rs. 6999
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
