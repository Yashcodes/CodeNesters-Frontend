import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../../context/Auth";
import toast from "react-hot-toast";
import Layout from "../../../components/Layout/Layout";
import AdminMenu from "../../../components/AdminDashboardComponents/AdminMenu";
import "../../../styles/AdminStyles/EventRegistrations.css";

const GetServiceEnquiry = () => {
  const [auth] = useAuth();
  const [enquiries, setEnquiries] = useState([]);

  const getRegistrations = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://code-nesters-backend.vercel.app/api/v1/service/get-service-requests",
        {
          method: "GET",
          headers: {
            Authorization: auth?.authToken,
          },
        }
      );

      setEnquiries(data?.serviceRequests);
      toast.success("Enquiries fetched successfully");
    } catch (error) {
      toast.error("Error while getting registration");
    }
  }, [auth?.authToken]);

  const handleDeleteEnquiry = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://code-nesters-backend.vercel.app/api/v1/service/delete-services-enquiry/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: auth?.authToken,
          },
        }
      );

      getRegistrations();
      toast.success("Enquiry deleted successfully");
    } catch (error) {
      toast.error("Error while deleting enquiry");
    }
  };

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
              <h1>Service Enquiries</h1>

              <div className="eventRegistrationCards">
                {enquiries.map((enquiry) => (
                  <div className="eventRegistrationCard" key={enquiry?._id}>
                    <p className="mt-0">Name : {enquiry?.name}</p>
                    <p>Email : {enquiry?.email}</p>
                    <p>Phone : {enquiry?.phone}</p>
                    <p>Place : {enquiry?.place}</p>
                    <p>Message : {enquiry?.message}</p>
                    <p>Pincode : {enquiry?.pincode}</p>

                    <button onClick={() => handleDeleteEnquiry(enquiry._id)}>
                      Delete
                    </button>
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

export default GetServiceEnquiry;
