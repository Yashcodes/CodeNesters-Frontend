import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { id, token } = useParams();
  const navigate = useNavigate();

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://code-nesters-backend.vercel.app/api/v1/auth/reset-password/${id}/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          password,
        }
      );

      if (response?.data?.success) {
        navigate("/login");
        setPassword("");
      } else {
        toast.error("Expired token");
      }
    } catch (error) {
      toast.error("Expired token");
    }
  };

  //! Verifying user using token and id
  const verifyValidUser = useCallback(async () => {
    try {
      await axios.get(
        `https://code-nesters-backend.vercel.app/api/v1/auth/verify-reset-user/${id}/${token}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      navigate("*");
      toast.error("Token Expired");
    }
  }, [id, navigate, token]);

  useEffect(() => {
    verifyValidUser();
  }, [verifyValidUser]);

  return (
    <>
      <div className="container-fluid bg-gray-gradient reset-page">
        <div className="reset-pass-form shadow">
          <div className="reset-page-heading text-center">
            <h1>Create New Password</h1>
            <span>
              This helps to reset your password and allow you to login into your
              account.
            </span>
          </div>

          <div className="forgot-password">
            <label htmlFor="reset-pass">New Password</label>
            <input
              type="password"
              id="reset-pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              autoComplete="off"
            />
          </div>
          <div className="forgot-password mt-4">
            <label htmlFor="confirm-reset-pass">Confirm New Password</label>
            <input
              type="password"
              id="confirm-reset-pass"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="off"
            />
          </div>

          <p className="my-2 text-danger mb-0 mt-0" style={{ height: "10px" }}>
            {" "}
            {password !== confirmPassword
              ? "Your passwords do not match"
              : ""}{" "}
          </p>

          <div className="forgot-pass-btn text-center">
            <button
              onClick={resetPasswordHandler}
              disabled={password !== confirmPassword}
            >
              Reset Password
            </button>

            <p className="fs-6">
              Remember your password?{" "}
              <Link to={"/login"}>
                <span style={{ color: "#7f097f" }}>Login Here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
