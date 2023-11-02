import React from "react";
import "../styles/Course.css";
import Layout from "../components/Layout/Layout";
import CourseBanner from "../components/CourseComponents/CourseBanner";
import CourseSection from "../components/CourseComponents/CourseSection";

const Courses = () => {
  return (
    <Layout>
      {/* //! Course Banner */}
      <CourseBanner />

      {/* //! What are the courses we offer  */}
      <CourseSection />
    </Layout>
  );
};

export default Courses;
