import React from "react";
import "../styles/Course.css"
import Layout from "../components/Layout/Layout";
import CourseBanner from "../components/CourseComponents/CourseBanner";

const Courses = () => {
  return (
    <Layout>
      {/* //! Course Banner */}
      <CourseBanner />

      {/* <h1 className="text-black text-center">Courses and Trainings</h1> */}
    </Layout>
  );
};

export default Courses;
