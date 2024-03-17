import React from "react";
import Layout from "../../components/Layout/Layout";
import SettingMenu from "../../components/UserDashboardComponents/SettingMenu";
import "../../styles/UserStyles/Settings.css";
import EditProfile from "./EditProfile";

const Settings = () => {
  return (
    <Layout>
      <div className="bg-gray-gradient" style={{ minHeight: "80vh" }}>
        <div className="container p-5">
          <div className="row setting-layout">
            <div className="col-md-4">
              <SettingMenu />
            </div>
            <div className="col-md-8">
              <EditProfile />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
