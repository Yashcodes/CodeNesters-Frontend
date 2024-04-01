import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../../context/Auth";
import toast from "react-hot-toast";
import Layout from "../../../components/Layout/Layout";
import AdminMenu from "../../../components/AdminDashboardComponents/AdminMenu";
import "../../../styles/AdminStyles/EventRegistrations.css";

const EventRegistrations = () => {
  const [auth] = useAuth();
  const [registrations, setRegistrations] = useState([]);

  const getRegistrations = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://code-nesters-backend.vercel.app/api/v1/event/get-event-registrations",
        {
          method: "GET",
          headers: {
            Authorization: auth?.authToken,
          },
        }
      );

      setRegistrations(data?.registrations);
    } catch (error) {
      toast.error("Error while getting registration");
    }
  }, [auth?.authToken]);

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
              <h1>Event Registrations</h1>

              <div className="eventRegistrationCards">
                {registrations.map((registration) => (
                  <div
                    className="eventRegistrationCard"
                    key={registration?._id}
                  >
                    <p className="mt-0">Name : {registration?.name}</p>
                    <p>Email : {registration?.email}</p>
                    <p>Phone : {registration?.phone}</p>
                    <p>Place : {registration?.place}</p>
                    <span>Pincode : {registration?.pincode}</span>
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

export default EventRegistrations;
