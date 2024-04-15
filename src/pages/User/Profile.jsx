import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/Auth";
import { Link } from "react-router-dom";
import { useUserProfile } from "../../context/UserProfileContext";
import toast from "react-hot-toast";
import axios from "axios";

const Profile = () => {
  const [auth] = useAuth();
  const { profileUrl, getProfileUrl } = useUserProfile();

  const [file, setFile] = useState("");
  const [uploadProfileUrl, setUploadProfileUrl] = useState("");

  const putObjectUrl = useCallback(async () => {
    const { data } = await axios.post(
      "https://code-nesters-backend.vercel.app/api/v1/user/putObjectUrl",
      {
        fileName: `img-${auth?.user?._id}`,
        contentType: file?.type,
      },
      {
        method: "POST",
        headers: {
          Authorization: auth?.authToken,
        },
      }
    );

    setUploadProfileUrl(data?.url);
  }, [auth?.authToken, auth?.user?._id, file?.type]);

  useEffect(() => {
    if (file) putObjectUrl();
  }, [file, putObjectUrl]);

  const handleProfileUpload = async (e) => {
    e.preventDefault();

    try {
      await axios.put(uploadProfileUrl, file);
      getProfileUrl();

      toast.success("Profile uploaded successfully");
    } catch (error) {
      toast.error("Error uploading profile");
    }
  };

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

            <input
              type="file"
              name="profile"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button onClick={handleProfileUpload}>Upload</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
