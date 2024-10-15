import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/AuthStyles/Register.css";
import Brand from "../../assets/images/brandLogo.png";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/Auth";
import SignIn from "../../assets/images/Register/signIn.svg";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../context/ThemeContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [auth, setAuth] = useAuth();
  const { themeMode } = useTheme();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://code-nesters-backend.vercel.app/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          email,
          password,
        }
      );

      if (data.success) {
        setAuth({
          ...auth,
          user: data.user,
          authToken: data.authToken,
        });

        window.location.reload();
        toast.success(data.message);

        localStorage.setItem("auth", JSON.stringify(data));
        navigate(location.state || "/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error while logging in");
    }
  };

  const labelStyle =
    themeMode === "light"
      ? {}
      : themeMode === "dark"
      ? {
          color: "white",
        }
      : {};

  const inputColor =
    themeMode === "light" ? "" : themeMode === "dark" ? "text-white" : "";

  return (
    <>
      <Helmet>
        <title>Login - CodeNesters</title>
        <meta
          name="keywords"
          content="Login, codenesters, login codenesters, login to codenesters, website development, web agency, web developer, login developer, sign in codenesters, codenesters web services, codenesters website agency, already a member"
        />
        <meta
          name="description"
          content="Login to CodeNesters | Already a member! Stay connected with us for future updates and get benefited with our products and services."
        />
        <link rel="canonical" href="https://www.codenesters.in/login" />
      </Helmet>

      <div
        className="register-page container-fluid"
        style={
          themeMode === "light"
            ? {
                backgroundImage:
                  "linear-gradient(198deg, #cdbbf9aa 0%, #ffffff 100%)",
              }
            : themeMode === "dark"
            ? {
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgb(25 13 29) 0%, rgb(0 0 0) 115%)",
                color: "white",
              }
            : {
                backgroundImage:
                  "linear-gradient(198deg, #bba9e2aa 0%, #ffffff 100%)",
              }
        }
      >
        <div className="register-left col-md-4 col-sm-9">
          <h1
            className="text-gray fs-2"
            color="darkgray"
            style={{ fontWeight: "600" }}
          >
            Login to <span className="text-gradient">CodeNesters</span>
          </h1>
          <p className="fs-5">
            Already a member! Stay connected with us for future updates and get
            benefited with our products and services.
          </p>

          <img
            src={SignIn}
            alt="Login CodeNesters"
            className="img-fluid"
            height={"auto"}
            width={"auto"}
          />
        </div>

        <div className="register-right col-md-4 col-sm-10">
          <div
            className="register-card"
            style={
              themeMode === "light"
                ? {
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                  }
                : themeMode === "dark"
                ? {
                    boxShadow:
                      "rgb(72 46 95 / 25%) 0px 13px 54px 8px, rgb(67 12 117 / 55%) 0px 8px 14px 3px",
                  }
                : {
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                  }
            }
          >
            <div className="register-card-header my-3">
              <div className="register-card-img">
                <img src={Brand} alt="" width="34px" height="34px" />
              </div>
              <div className="card-head">
                <h2>CodeNesters</h2>
              </div>
            </div>

            <div className="register-card-input">
              <div className="register-email mb-3">
                <MDBInput
                  label="Email Address"
                  type="email"
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  labelStyle={labelStyle}
                  className={inputColor}
                />
              </div>
              <div className="register-password mb-3">
                <MDBInput
                  label="Enter Password"
                  type="password"
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  labelStyle={labelStyle}
                  className={inputColor}
                />
              </div>
            </div>

            <div className="register-card-btn mb-2">
              <MDBBtn
                className="w-100 card-btn"
                onClick={handleSubmit}
                disabled={email === "" || password === ""}
              >
                Login
              </MDBBtn>
            </div>

            <div className="login-option mb-1">
              <p className="text-center mb-0">
                Don't have an account?
                <Link to={"/register"}> Create Account</Link>
              </p>
            </div>

            <div className="forgot-pass-option mb-3">
              <p className="text-center">
                <Link to={"/forgot-password"}>Forgot Password?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
