import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/Auth";
import { Link } from "react-router-dom";
import { useUserProfile } from "../../context/UserProfileContext";
import toast from "react-hot-toast";
import axios from "axios";
import "../../styles/UserStyles/Profile.css";
import { MDBIcon } from "mdb-react-ui-kit";
import { GrInstagram } from "react-icons/gr";
import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Profile = () => {
  const [auth] = useAuth();
  const { profileUrl, getProfileUrl } = useUserProfile();

  const [file, setFile] = useState("");
  const [uploadProfileUrl, setUploadProfileUrl] = useState("");
  const [userData, setUserData] = useState({});

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

  const getUserData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://code-nesters-backend.vercel.app/api/v1/auth/get-user",
        {
          method: "GET",
          headers: {
            Authorization: auth?.authToken,
          },
        }
      );

      setUserData(data);
    } catch (error) {
      toast.error("Please reload page");
    }
  }, [auth?.authToken]);

  useEffect(() => {
    if (auth) getUserData();
  }, [auth, getUserData]);

  return (
    <Layout>
      <div className="container py-5 px-2">
        <div className="row gap-3">
          <div className="col-md-4 profile-image border rounded">
            <div>
              <img
                src={
                  profileUrl ||
                  "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=sph"
                }
                alt=""
                className="img-fluid m-1"
                onError={(e) =>
                  (e.target.src =
                    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=sph")
                }
              />
            </div>

            <div
              className="update-profile-image gap-3"
              style={{ textAlign: "left" }}
            >
              <div className="d-inline">
                <input
                  type="file"
                  name="profile"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="mt-2 d-none"
                  accept="image/png, image/jpeg, image/jpg"
                />
                <label
                  htmlFor="file"
                  className="update-profile-btn"
                  style={{ cursor: "pointer" }}
                >
                  <MDBIcon fas icon="upload" /> Change Profile
                </label>
              </div>

              <div>
                <button
                  onClick={handleProfileUpload}
                  className="update-profile-btn"
                  disabled={!file}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-7 profile-info-container">
            <div className="profile-info-content">
              <div className="user-profile-info-container border rounded p-3">
                <h1
                  className="fs-4"
                  style={{ color: "rgb(30, 29, 29)", letterSpacing: "0.1px" }}
                >
                  My Profile
                </h1>

                <div className="user-profile-info py-2">
                  <div className="row info-row px-3 mb-2 d-flex justify-content-between flex-wrap">
                    <p className="col-md-6">
                      <span>Name:</span> {userData?.user?.name}
                    </p>
                    <p className="col-md-6">
                      <span>Email:</span> {userData?.user?.email}
                    </p>
                  </div>
                  <div className="row info-row px-3 d-flex justify-content-between flex-wrap">
                    <p className="col-md-6" style={{ fontSize: "16px" }}>
                      <span style={{ fontSize: "18px" }}>Contact:</span>{" "}
                      {userData?.user?.phone}
                    </p>
                    <p className="col-md-6">
                      <span>Username:</span> {userData?.user?.username}
                    </p>
                  </div>
                </div>
              </div>

              <div className="user-social-info-container border rounded p-3">
                <h2
                  className="fs-4"
                  style={{ color: "rgb(30, 29, 29)", letterSpacing: "0.1px" }}
                >
                  Social Links
                </h2>

                <div className="user-social-info py-2">
                  <div className="row info-row px-3 mb-2 d-flex gap-2 flex-column justify-content-between flex-wrap">
                    <div className="col-md-12 social-link-container gap-2">
                      <span className="social-link-icon">
                        <Link to={userData?.user?.instagram} target="_blank">
                          <GrInstagram />
                        </Link>
                      </span>
                      <input
                        type="text"
                        className="social-link-input"
                        value={userData?.user?.instagram}
                        readOnly
                      />
                    </div>

                    <div className="col-md-12 social-link-container gap-2">
                      <span className="social-link-icon">
                        <Link to={userData?.user?.linkedin} target="_blank">
                          <SiLinkedin />
                        </Link>
                      </span>
                      <input
                        type="text"
                        className="social-link-input"
                        value={userData?.user?.linkedin}
                        readOnly
                      />
                    </div>

                    <div className="col-md-12 social-link-container gap-2">
                      <span className="social-link-icon">
                        <Link to={userData?.user?.github} target="_blank">
                          <BsGithub size={"26px"} />
                        </Link>
                      </span>
                      <input
                        type="text"
                        className="social-link-input"
                        value={userData?.user?.github}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="user-profile-btns d-flex gap-3 align-items-center">
                <Link
                  to={
                    auth?.user?.email === "pariharyash1989@gmail.com"
                      ? `/dashboard/admin/profile/${auth?.user?._id}/change-password`
                      : `/dashboard/user/profile/${auth?.user?._id}/change-password`
                  }
                >
                  <button className="update-profile-btn">
                    Change my password
                  </button>
                </Link>

                <Link
                  to={
                    auth?.user?.email === "pariharyash1989@gmail.com"
                      ? `/dashboard/admin/settings`
                      : `/dashboard/user/settings`
                  }
                >
                  <button className="update-profile-btn"> Edit Profile</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
