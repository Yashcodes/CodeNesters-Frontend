import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/Auth";
import { Link } from "react-router-dom";
import axios from "axios";
import { useUserProfile } from "../../context/UserProfileContext";

const Profile = () => {
  const [auth] = useAuth();
  const { profileUrl } = useUserProfile();

  return (
    <Layout>
      <div className="container p-5">
        <div className="row">
          <div className="col-4">
            <img src={profileUrl} alt="" />
          </div>
          <div className="col-8">
            <h1>My Profile</h1>
            <div>
              <ul>
                <li>Name: {auth?.user?.name}</li>
                <li>Email: {auth?.user?.email}</li>
                <li>Password: {"***********"}</li>

                <Link
                  to={
                    auth?.user?.email === "ashish@gmail.com"
                      ? `/dashboard/admin/profile/${auth?.user?._id}/change-password`
                      : `/dashboard/user/profile/${auth?.user?._id}/change-password`
                  }
                >
                  <sub>Change my password</sub>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
