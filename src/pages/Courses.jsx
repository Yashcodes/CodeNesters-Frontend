import React from "react";
import "../styles/Course.css";
import Layout from "../components/Layout/Layout";
import CourseBanner from "../components/CourseComponents/CourseBanner";
import CourseSection from "../components/CourseComponents/CourseSection";
import ContactForServices from "../components/ServicesComponents/ContactForServices";

const Courses = () => {
  const options = [
    { value: "mernStackDevelopment", label: "MERN Stack Development" },
    { value: "flutterWithFirebase", label: "Flutter with Firebase" },
    { value: "phpWithMysql", label: "PHP with MySQL" },
    { value: "c++Programming", label: "C++ Programming" },
    { value: "frontendWebDevelopment", label: "Fronted Web Development" },
    { value: "pythonProgramming", label: "Python Programming" },
  ];

  return (
    <Layout>
      {/* //! Course Banner */}
      <CourseBanner />

      {/* //! What are the courses we offer  */}
      <CourseSection />

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
