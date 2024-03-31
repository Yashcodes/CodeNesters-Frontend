import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/AdminDashboardComponents/AdminMenu";
import DashboardCatalogue from "./DashboardCatalogue";
import "../../styles/AdminStyles/AdminMenu.css"

const AdminDashboard = () => {
  return (
    <Layout>
      <div className="bg-gray-gradient" style={{ minHeight: "80vh" }}>
        <div className="container-fluid" >
          <div className="row setting-layout">
            <div className="col-md-2 p-0">
              <AdminMenu />
            </div>
            <div className="col-md-10">
              <DashboardCatalogue />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
