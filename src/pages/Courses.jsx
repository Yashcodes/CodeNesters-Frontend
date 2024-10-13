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

  const courseCardData = [
    {
      data: {
        id: 1,
        title: "MERN Stack Development",
        description: `Master the full-stack development with MongoDB, Express.js, React, and Node.js to build powerful web applications.`,
        // cardInlineStyle: { borderBottom: "6px solid rgb(251, 125, 245)" },
        // iconInlineStyle: { backgroundColor: "rgb(251, 125, 245)" },
        aos: "fade-right",
        image: mernCourse,
      },
    },
    {
      data: {
        id: 2,
        title: "Flutter App Development",
        description: `Learn to create stunning cross-platform mobile apps with Flutter, from simple UI components to complex backend integration.`,
        // cardInlineStyle: { borderBottom: "6px solid rgb(89, 191, 255)" },
        // iconInlineStyle: { backgroundColor: "rgb(89, 191, 255)" },
        aos: "fade-down",
        image: flutterCourse,
      },
    },
    {
      data: {
        id: 3,
        title: "DevOps and Cloud",
        description: `Get hands-on experience in automating deployments, scaling infrastructure, and managing cloud environments like AWS.`,
        // cardInlineStyle: { borderBottom: "6px solid cyan" },
        // iconInlineStyle: { backgroundColor: "cyan" },
        aos: "fade-left",
        image: devopsCourse,
      },
    },
    {
      data: {
        id: 4,
        title: "C++ Programming",
        description: `Build a solid foundation in C++ programming, covering everything from basic syntax to advanced object-oriented principles.`,
        // cardInlineStyle: { borderBottom: "6px solid rgb(59, 240, 197)" },
        // iconInlineStyle: { backgroundColor: "rgb(59, 240, 197)" },
        aos: "fade-right",
        image: cppCourse,
      },
    },
    {
      data: {
        id: 5,
        title: "NodeJS Development",
        description: `Delve into server-side programming with Node.js, mastering APIs, real-time applications, and backend integration for modern solutions.`,
        // cardInlineStyle: { borderBottom: "6px solid rgb(234, 232, 111)" },
        // iconInlineStyle: { backgroundColor: "rgb(234, 232, 111)" },
        aos: "fade-up",
        image: nodejsCourse,
      },
    },
    {
      data: {
        id: 6,
        title: "PHP with MySQL",
        description: `Develop dynamic web applications by integrating PHP with MySQL, learning how to structure databases and build scalable projects.`,

        // cardInlineStyle: { borderBottom: "6px solid rgb(244, 86, 141)" },
        // iconInlineStyle: { backgroundColor: "rgb(244, 86, 141)" },
        aos: "fade-left",
        image: phpCourse,
      },
    },
  ];

  return (
    <Layout>
      {/* //! Course Banner */}
      <CourseBanner />

      {/* //! What are the courses we offer  */}
      <CourseSection
        sectionCardData={courseCardData}
        sectionHeading={"COURSES AND TRAININGS"}
        headingContent={[
          "Learn and grow your skills with our",
          <br key={Math.random() + Date.now()} />,
          "courses and trainings",
        ]}
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
