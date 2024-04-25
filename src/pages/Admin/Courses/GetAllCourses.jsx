import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../../context/Auth";
import toast from "react-hot-toast";
import Layout from "../../../components/Layout/Layout";
import AdminMenu from "../../../components/AdminDashboardComponents/AdminMenu";
import "../../../styles/AdminStyles/EventRegistrations.css";

const GetAllCourses = () => {
  const [auth] = useAuth();
  const [courses, setCourses] = useState([]);

  const getAllCourses = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://code-nesters-backend.vercel.app/api/v1/course/get-all-courses",
        {
          method: "GET",
        }
      );

      setCourses(data?.courses);
      toast.success("Courses fetched successfully");
    } catch (error) {
      toast.error("Error while getting courses");
    }
  }, []);

//   const handleDeleteEnquiry = async (id) => {
//     try {
//       const { data } = await axios.delete(
//         `https://code-nesters-backend.vercel.app/api/v1/service/delete-services-enquiry/${id}`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: auth?.authToken,
//           },
//         }
//       );

//       getAllCourses();
//       toast.success("Enquiry deleted successfully");
//     } catch (error) {
//       toast.error("Error while deleting enquiry");
//     }
//   };

  useEffect(() => {
    if (auth?.user) getAllCourses();
  }, [auth?.user, getAllCourses]);

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
              <h1>All Courses</h1>

              <div className="eventRegistrationCards">
                {courses.map((course) => (
                  <div className="eventRegistrationCard" key={course?._id}>
                    <p className="mt-0">Course Name : {course?.courseName}</p>
                    <p>Course Catgory : {course?.courseCategoryName}</p>
                    <p>Course Description : {course?.courseContent}</p>
                    <p>Price : {course?.coursePrice}</p>
                    <p>Discount : {course?.coursePriceDiscount}</p>
                    <p>Discounted Price : {course?.courseDiscountedPrice}</p>
                    <p>Rating : {course?.courseRating}</p>

                    {/* <button onClick={() => handleDeleteEnquiry(enquiry._id)}>
                      Delete
                    </button> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetAllCourses;
