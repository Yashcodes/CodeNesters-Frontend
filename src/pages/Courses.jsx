import React from "react";
import "../styles/Course.css";
import Layout from "../components/Layout/Layout";
import CourseBanner from "../components/CourseComponents/CourseBanner";
import CourseSection from "../components/CourseComponents/CourseSection";
import ContactForServices from "../components/ServicesComponents/ContactForServices";
import mernCourse from "../assets/images/course/mern.png";
import flutterCourse from "../assets/images/course/flutter.png";
import devopsCourse from "../assets/images/course/devops.png";
import nodejsCourse from "../assets/images/course/nodejs.png";
import phpCourse from "../assets/images/course/php.png";
import cppCourse from "../assets/images/course/c++.png";

const Courses = () => {
  const options = [
    { value: "mernStackDevelopment", label: "MERN Stack Development" },
    { value: "flutterAppDevelopment", label: "Flutter App Development" },
    { value: "devopsAndCloud", label: "DevOps and Cloud" },
    { value: "c++Programming", label: "C++ Programming" },
    { value: "nodejsDevelopment", label: "NodeJS Development" },
    { value: "phpWithMysql", label: "PHP with MySQL" },
  ];

  const cardAnimation = [
    {
      aos: "fade-right",
    },
    {
      aos: "fade-down",
    },
    {
      aos: "fade-left",
    },
    {
      aos: "fade-right",
    },
    {
      aos: "fade-up",
    },
    {
      aos: "fade-left",
    },
  ];

  return (
    <Layout>
      {/* //! Course Banner */}
      <CourseBanner />

      {/* //! What are the courses we offer  */}
      <CourseSection
        sectionHeading={"COURSES AND TRAININGS"}
        headingContent={[
          "Learn and grow your skills with our",
          <br key={Math.random() + Date.now()} />,
          "courses and trainings",
        ]}
        cardAnimation={cardAnimation}
      />

      <ContactForServices
        options={options}
        heading={"WANT TO LEARN TECH?"}
        subHeading={[
          "Let's learn with enthusiasm",
          <br key={Math.random() + Date.now()} />,
          "and enjoy building tech",
        ]}
        optionsLabel={"Select Courses"}
        formSubmitApi={"course/course-form-submit"}
        requestKey={"courses"}
      />
    </Layout>
  );
};

export default Courses;
