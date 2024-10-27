import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../Utils/Loading";
import toast from "react-hot-toast";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/Auth";

const CourseSection = ({ sectionHeading, headingContent, cardAnimation }) => {
  const [courses, setCourses] = useState([]);
  const { themeMode } = useTheme();
  const [auth] = useAuth();
  const [isAdding, setIsAdding] = useState(null);

  const getAllCourses = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://code-nesters-backend.vercel.app/api/v1/course/get-all-courses"
      );

      setCourses(response.data.courses);
    } catch (error) {
      toast.error("Unable to list courses");
    }
  }, []);

  const addToCart = useCallback(
    async (id) => {
      setIsAdding(id);
      try {
        const { data } = await axios.post(
          "https://code-nesters-backend.vercel.app/api/v1/cart/add-to-cart",
          {
            courseId: id,
            quantity: 1,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: auth?.authToken,
            },
          }
        );

        if (data?.success) {
          toast.success(data?.message);
          setIsAdding(null);
        }
      } catch (error) {
        toast.error("Error while adding course to cart");
        setIsAdding(null);
      }
    },
    [auth]
  );

  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);

  return (
    <section
      className="py-5 courseSection"
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
          data-aos="fade-up"
        >
          {sectionHeading}
        </h2>
        <h3
          className="fs-1 fw-bold courseHeading text-center"
          style={
            themeMode === "light"
              ? { color: "black" }
              : themeMode === "dark"
              ? { color: "white" }
              : { color: "black" }
          }
          data-aos="fade-up"
        >
          {headingContent}
        </h3>

        <div className="courseCardContainer">
          {courses.length !== 0 ? (
            courses.map((course, index) => (
              <div
                className="courseCard"
                data-aos={cardAnimation[index].aos}
                style={
                  themeMode === "light"
                    ? {
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                      }
                    : themeMode === "dark"
                    ? {
                        boxShadow:
                          "rgb(72 46 95 / 25%) 0px 13px 54px 8px, rgb(67 12 117 / 55%) 0px 8px 14px 3px",
                      }
                    : {
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                      }
                }
                key={course?._id}
              >
                <div className="">
                  <img
                    className="rounded img-fluid"
                    src={course?.courseImage}
                    height={"150px"}
                    alt=""
                  />
                </div>

                <div className="card-head">
                  <h4>{course?.courseName}</h4>
                </div>

                <div className="card-content">
                  <p
                    style={
                      themeMode === "light"
                        ? {}
                        : themeMode === "dark"
                        ? {
                            // backgroundImage:
                            //   "radial-gradient(circle at 50% 50%, rgb(25 13 29) 0%, rgb(0 0 0) 115%)",
                            color: "#bfbfbf",
                          }
                        : {}
                    }
                  >
                    {course?.courseContent}
                  </p>
                </div>

                <div className="course-card-btn d-flex align-items-center gap-2 justify-content-between mt-2">
                  <Link
                    className="btn contact-banner-btn"
                    onClick={() => addToCart(course._id)}
                    // to={`/courses/course/${slugify(
                    //   course?._id,
                    //   "-"
                    // ).toLowerCase()}`}
                  >
                    {isAdding === course?._id
                      ? "Adding to cart..."
                      : "Add to Cart"}
                  </Link>

                  <div className="card-price">
                    <span className="m-0 text-gradient">
                      Rs. {course?.courseDiscountedPrice}
                      <p
                        className="text-decoration-line-through d-inline"
                        style={{
                          marginLeft: "8px",
                          fontWeight: "normal",
                          color: "gray",
                        }}
                      >
                        Rs. {course?.coursePrice}
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
