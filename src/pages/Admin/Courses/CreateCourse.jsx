import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../../context/Auth";
import toast from "react-hot-toast";
import Layout from "../../../components/Layout/Layout";
import AdminMenu from "../../../components/AdminDashboardComponents/AdminMenu";
import "../../../styles/AdminStyles/EventRegistrations.css";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

const CreateCourse = () => {
  const [auth] = useAuth();
  const navigate = useNavigate();

  const [courseName, setCourseName] = useState("");
  const [courseCategoryName, setCourseCategoryName] = useState("");
  const [courseContent, setCourseContent] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [coursePriceDiscount, setCoursePriceDiscount] = useState("");
  const [courseDiscountedPrice, setCourseDiscountedPrice] = useState("");
  const [courseRating, setCourseRating] = useState("");
  const [file, setFile] = useState("")

  const courseImageUploadURL = useCallback(async () => {
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/course/upload-course-image",
      {
        fileName: `img-${slugify(courseName, "_")}`,
        contentType : file?.type
      },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth?.authToken,
        },
      }
    );
  }, [auth?.authToken, courseName, file?.type]);

  const handleCreateCourse = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/course/create-course`,
        {
          courseName,
          // courseCategory,
          courseCategoryName,
          courseContent,
          coursePrice,
          coursePriceDiscount,
          courseDiscountedPrice,
          courseRating,
        },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: auth?.authToken,
          },
        }
      );

      toast.success("Course Created Successfully");
      navigate("/dashboard/admin/courses/get-all-courses");
    } catch (error) {
      toast.error("Error while creating course");
    }
  };

  return (
    <Layout>
      <div className="bg-gray-gradient">
        <div className="container-fluid">
          <div className="row gap-5 d-flex flex-wrap">
            <AdminMenu />

            <div
              className="col-md-9 p-3"
              style={{
                maxHeight: "80vh",
                overflowY: "auto",
              }}
            >
              <h1>Create a new Course</h1>

              <div className="create-course-form">
                <div className="course-name">
                  <label htmlFor="course-name">Course Name</label>
                  <input
                    type="text"
                    id="course-name"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                  />
                </div>

                <div className="course-category">
                  <label htmlFor="course-category">Course Category</label>
                  <input
                    type="text"
                    id="course-category"
                    value={courseCategoryName}
                    onChange={(e) => setCourseCategoryName(e.target.value)}
                  />
                </div>

                <div className="course-description">
                  <label htmlFor="course-description">Course Description</label>
                  <input
                    type="text"
                    id="course-description"
                    value={courseContent}
                    onChange={(e) => setCourseContent(e.target.value)}
                  />
                </div>

                <div className="course-price">
                  <label htmlFor="course-price">Course Price</label>
                  <input
                    type="text"
                    id="course-price"
                    value={coursePrice}
                    onChange={(e) => setCoursePrice(e.target.value)}
                  />
                </div>

                <div className="course-discount">
                  <label htmlFor="course-discount">Course Discount</label>
                  <input
                    type="text"
                    id="course-discount"
                    value={coursePriceDiscount}
                    onChange={(e) => setCoursePriceDiscount(e.target.value)}
                  />
                </div>

                <div className="course-discounted-price">
                  <label htmlFor="course-discounted-price">
                    Course Discounted Price
                  </label>
                  <input
                    type="text"
                    id="course-discounted-price"
                    value={courseDiscountedPrice}
                    onChange={(e) => setCourseDiscountedPrice(e.target.value)}
                  />
                </div>

                <div className="course-rating">
                  <label htmlFor="course-rating">Course rating</label>
                  <input
                    type="text"
                    id="course-rating"
                    value={courseRating}
                    onChange={(e) => setCourseRating(e.target.value)}
                  />
                </div>

                <div className="create-course-btn">
                  <button onClick={handleCreateCourse}>Create Course</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCourse;
