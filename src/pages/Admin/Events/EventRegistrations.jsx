import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../../context/Auth";
import toast from "react-hot-toast";
import Layout from "../../../components/Layout/Layout";
import AdminMenu from "../../../components/AdminDashboardComponents/AdminMenu";

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
      <div className="bg-gray-gradient" style={{ minHeight: "80vh" }}>
        <div className="container-fluid">
          <div className="row setting-layout">
            <div className="col-md-2 p-0">
              <AdminMenu />
            </div>
            <div className="col-md-10">
              <h1>Event Registrations</h1>

              {registrations.map((registration) => (
                <p key={registration?._id}>{registration?.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventRegistrations;
