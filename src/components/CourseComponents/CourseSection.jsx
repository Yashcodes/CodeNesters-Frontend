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
      },
    },
  ];
  console.log(courseCardData);
  return (
    <div className="py-5 px-1">
      <h4
        className="text-center"
        style={{ color: "#a87fff", fontWeight: "600" }}
      >
        Courses and Trainings
      </h4>
      <h2 className="fs-1 fw-bold text-black text-center">
        Learn and grow your skills <br /> with our courses
      </h2>

      <div className="course-cards container">
        <div className="row d-flex flex-wrap my-5">
          {courseCardData.map((cardData) => (
            <div className="col-md-4 my-2">
              <div className="course-card border shadow">
                <div className="card-img img-fluid">
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
                      {cardData?.card?.title}{" "}
                    </h4>
                    <span className="badge badge-success">50% off</span>
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
                      to={`/${slugify(cardData.card.title, "-")}`}
                    >
                      View Details
                    </Link>

                    <div className="card-price">
                      <span className="m-0 text-gradient">
                        Rs. 3499/-{" "}
                        <p
                          className="text-decoration-line-through d-inline"
                          style={{
                            marginLeft: "8px",
                            fontWeight: "normal",
                            color: "gray",
                          }}
                        >
                          Rs. 6999{" "}
                        </p>{" "}
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
