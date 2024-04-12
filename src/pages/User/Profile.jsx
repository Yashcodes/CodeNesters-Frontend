import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/Auth";
import { Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [auth] = useAuth();
  const [url, setUrl] = useState("");

  const getProfileUrl = useCallback(async () => {
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/user/getObjectUrl",
      {
        key: "image.jpg",
      },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth?.authToken,
        },
      }
    );

    console.log(data);
    setUrl(data?.url);
  }, [auth?.authToken]);

  useEffect(() => {
    getProfileUrl();
  }, [getProfileUrl]);

  return (
    <Layout>
      <div className="container p-5">
        <div className="row">
          <div className="col-4">
            <img src={url} alt="" />
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
