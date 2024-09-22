import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Event.css";
import { useTheme } from "../context/ThemeContext";
import courseImage from "../assets/images/course/cppCourse.png";
import { Link } from "react-router-dom";

const Course = () => {
  const { themeMode } = useTheme();

  return (
    <Layout>
      <div
        className="p-3"
        style={
          themeMode === "light"
            ? {
                color: "rgba(9, 9, 9, 0.842)",
                backgroundImage:
                  "linear-gradient(198deg, #bba9e2aa 0%, #ffffff 100%)",
              }
            : themeMode === "dark"
            ? {
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgb(25 1 33) 0%, rgb(12, 3, 17) 115%)",
                color: "white",
              }
            : {
                color: "rgba(9, 9, 9, 0.842)",
                backgroundImage:
                  "linear-gradient(198deg, #bba9e2aa 0%, #ffffff 100%)",
              }
        }
      >
        <div className="container event-page">
          <div className="event-page-content">
            <div
              className="left rounded shadow p-2 col-md-6"
              style={
                themeMode === "light"
                  ? {
                      border: "1px solid rgb(221 206 255)",
                    }
                  : themeMode === "dark"
                  ? {
                      border: "1px solid rgb(25 1 33)",
                    }
                  : {
                      border: "1px solid rgb(221 206 255)",
                    }
              }
            >
              <img
                src={courseImage}
                className="rounded img-fluid"
                alt="git and github event"
                width={"100%"}
                height="auto"
              />
            </div>
            <div
              className="right"
              style={
                themeMode === "light"
                  ? {
                      color: "rgba(9, 9, 9, 0.842)",
                    }
                  : themeMode === "dark"
                  ? {
                      color: "white",
                    }
                  : { color: "white" }
              }
            >
              <h1 className="m-0" style={{ fontSize: "2.7rem" }}>
                Learn C++ Programming
              </h1>
              <p className="fs-4">Rating: 4.5 / 5</p>

              <span className="fs-4">Mode of Course: Online</span>
              <br />

              <span className="fs-4 fw-bold">
                What we are delivering to you?
              </span>
              <ul type="disc" style={{ fontSize: "17px" }}>
                <li>Live and Interactive Classes</li>
                <li>One-on-One Doubt Solving</li>
                <li>Rich Content and Experience</li>
                <li>Valuable Certification and QnA</li>
              </ul>

              <div className="course-instructor">
                <span className="fs-5 fw-bold">Instructor: &nbsp;</span>
                <Link
                  to={"https://linkedin.com/in/bhagvendra-singh"}
                  target="_blank"
                >
                  <span
                    className="fs-5"
                    style={
                themeMode === "light"
                  ? {
                      color: "rgba(9, 9, 9, 0.842)",
                      textDecoration: "underline"
                    }
                  : themeMode === "dark"
                  ? {
                      color: "white",
                      textDecoration: "underline"
                    }
                  : { color: "white", textDecoration: "underline" }
              }
                  >
                    Bhagvendra Singh
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="event-page-description mt-3">
            <h2>Course Description</h2>

            <div>
              <p>
                Are you ready to learn C++ programming? Our online course is
                perfect for students at any level, from beginners to advanced
                learners. We start with the basics and move to advanced topics,
                making sure you understand everything about C++. In this course,
                you'll learn about variables, data types, control structures,
                and more. As you progress, we'll cover object-oriented
                programming, STL, etc.
              </p>

              <p>
                Additionally, our course includes a strong focus on
                problem-solving. We provide many coding exercises to help you
                practice and apply what you've learned. One of the unique
                features of our course is the one-on-one doubt sessions. These
                personalized sessions are designed to address your specific
                questions and challenges, ensuring you have a clear
                understanding of the material.
              </p>

              <p>
                By the end of the course, you will have a solid foundation in
                C++ programming and the confidence to tackle complex programming
                tasks. Join our online C++ programming course today and take the
                first step towards becoming a proficient and confident
                programmer. With our comprehensive curriculum, personalized
                support, and emphasis on practical application, you will be
                well-equipped to achieve your programming goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Course;
