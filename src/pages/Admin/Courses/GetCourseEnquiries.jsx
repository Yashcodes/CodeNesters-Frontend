import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../../context/Auth";
import toast from "react-hot-toast";
import Layout from "../../../components/Layout/Layout";
import AdminMenu from "../../../components/AdminDashboardComponents/AdminMenu";
import "../../../styles/AdminStyles/EventRegistrations.css";

const GetCourseEnquiries = () => {
  const [auth] = useAuth();
  const [courseEnquiries, setCourseEnquiries] = useState([]);

  const getRegistrations = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://code-nesters-backend.vercel.app/api/v1/course/get-course-enquiries",
        {
          method: "GET",
          headers: {
            Authorization: auth?.authToken,
          },
        }
      );

      setCourseEnquiries(data?.courseEnquiries);
      toast.success("Enquiries fetched successfully");
    } catch (error) {
      toast.error("Error while getting registration");
    }
  }, [auth?.authToken]);

  // const handleDeleteEnquiry = async (id) => {
  //   try {
  //     const { data } = await axios.delete(
  //       `https://code-nesters-backend.vercel.app/api/v1/service/delete-services-enquiry/${id}`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: auth?.authToken,
  //         },
  //       }
  //     );

  //     getRegistrations();
  //     toast.success("Enquiry deleted successfully");
  //   } catch (error) {
  //     toast.error("Error while deleting enquiry");
  //   }
  // };

  useEffect(() => {
    if (auth?.user) getRegistrations();
  }, [auth?.user, getRegistrations]);

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
              <h1>Course Enquiries</h1>

              <div className="eventRegistrationCards">
                {courseEnquiries.map((enquiry) => (
                  <div
                    className=""
                    style={{
                      maxHeight: "auto",
                      border: "1px solid gray",
                      padding: "22px",
                      width: "380px",
                    }}
                    key={enquiry?._id}
                  >
                    <p className="mt-0">Name : {enquiry?.name}</p>
                    <p>Email : {enquiry?.email}</p>
                    <p>Phone : {enquiry?.phone}</p>
                    <p>Place : {enquiry?.place}</p>
                    <p>Message : {enquiry?.message}</p>
                    <p>Pincode : {enquiry?.pincode}</p>
                    <div>
                      <span>Courses</span>
                      <ul>
                        {enquiry?.courses?.map((course) => (
                          <li>{course?.label}</li>
                        ))}
                      </ul>
                    </div>

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

export default GetCourseEnquiries;
