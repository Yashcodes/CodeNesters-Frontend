import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import "../../styles/AuthStyles/ResetPassword.css";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://code-nesters-backend.vercel.app/api/v1/auth/send-reset-link",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          email,
        }
      );

      console.log(response?.data);
      setEmail("");
      toast.success("Link sent successfully");

      if(response?.data?.success) {
        navigate("/login");
      }
    } catch (error) {
      toast.error("Error occured");
    }
  };

  return (
    <div className="container-fluid bg-gray-gradient reset-page">
      <div className="reset-pass-form shadow">
        <div className="reset-page-heading text-center">
          <h1>Reset Password</h1>
          <span>
            We'll send you the instructions to reset your password. Enter the
            email associated with your account.
          </span>
        </div>

        <div className="forgot-password">
          <label htmlFor="forgot-pass">Email</label>
          <input
            type="email"
            id="forgot-pass"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            autoComplete="off"
          />
        </div>

        <div className="forgot-pass-btn text-center">
          <button onClick={forgotPasswordHandler}>Send Reset Email</button>

          <p className="fs-6">
            Remember your password?{" "}
            <Link to={"/login"}>
              <span style={{ color: "#7f097f" }}>Login Here</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
