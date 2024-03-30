import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/AdminDashboardComponents/AdminMenu";
import EventRegistrations from "./EventRegistrations";

const AdminDashboard = () => {
  return (
    <Layout>
      <div className="bg-gray-gradient" style={{ minHeight: "80vh" }}>
        <div className="container p-5">
          <div className="row setting-layout">
            <div className="col-md-4">
              <AdminMenu />
            </div>
            <div className="col-md-8">
              <EventRegistrations />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
