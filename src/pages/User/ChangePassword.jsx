import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import SettingMenu from "../../components/UserDashboardComponents/SettingMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/Auth";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const [auth] = useAuth();

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");

  const updatePassword = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        "https://code-nesters-backend.vercel.app/api/v1/auth/update-password",
        {
          oldPassword: oldPass,
          newPassword: newPass,
        },
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: auth?.authToken,
          },
        }
      );

      toast.success(data?.message);
    } catch (error) {
      toast.error("Error while updating password");
    }
  };

  return (
    <Layout>
      <div className="bg-gray-gradient" style={{ minHeight: "80vh" }}>
        <div className="container p-5">
          <div className="row">
            <div className="col-md-4">
              <SettingMenu />
            </div>
            <div className="col-md-8">
              <h1 style={{ color: "rgb(33, 33, 33)", fontWeight: 500 }}>
                Change your password
              </h1>

              <div className="change-password-section">
                <div className="old-pass">
                  <label htmlFor="oldPass">Old password</label>
                  <input
                    type="text"
                    id="oldPass"
                    value={oldPass}
                    onChange={(e) => setOldPass(e.target.value)}
                  />
                </div>
                <div className="new-pass mt-3">
                  <label htmlFor="newPass">New password</label>
                  <input
                    type="password"
                    id="newPass"
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                  />
                </div>
                <div className="confirm-new-pass mt-3">
                  <label htmlFor="confirmNewPass">Confirm new password</label>
                  <input
                    type="password"
                    id="confirmNewPass"
                    value={confirmNewPass}
                    onChange={(e) => setConfirmNewPass(e.target.value)}
                  />
                </div>

                <div className="update-password">
                  <div className="update-pass-btn">
                    <button onClick={updatePassword}>Update Password</button>
                  </div>
                  <div className="update-pass-btn">
                    <Link to={"/forgot-password"}>
                      <button>Forgot Password</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChangePassword;
