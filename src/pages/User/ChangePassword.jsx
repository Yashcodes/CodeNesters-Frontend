import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/UserDashboardComponents/UserMenu";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");

  const updatePassword = async (e) => {
    e.preventDefault();

    try {
    } catch (error) {
      toast.error();
    }
  };

  return (
    <Layout>
      <div className="container p-5">
        <div className="row">
          <div className="col-4">
            <UserMenu />
          </div>
          <div className="col-8">
            <h1>Change your password</h1>

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
              <div className="new-pass">
                <label htmlFor="newPass">New password</label>
                <input
                  type="password"
                  id="newPass"
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                />
              </div>
              <div className="confirm-new-pass">
                <label htmlFor="confirmNewPass">Confirm new password</label>
                <input
                  type="password"
                  id="confirmNewPass"
                  value={confirmNewPass}
                  onChange={(e) => setConfirmNewPass(e.target.value)}
                />
              </div>

              <div className="update-pass-btn">
                <button onClick={updatePassword}>Update Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChangePassword;
