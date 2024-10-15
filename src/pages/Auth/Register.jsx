import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/AuthStyles/Register.css";
import Brand from "../../assets/images/brandLogo.png";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/Auth";
import SignIn from "../../assets/images/Register/signIn.svg";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../context/ThemeContext";
// import { useFirebase } from "../../context/Firebase";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [auth, setAuth] = useAuth();
  const { themeMode } = useTheme();

  const navigate = useNavigate();

  // const firebase = useFirebase();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://code-nesters-backend.vercel.app/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          name,
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
        navigate("/");
      } else {
        console.log(data);
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error in creating account");
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

  // const signInWithGoogle = async () => {
  //   await firebase.signInWithGoogle();
  // };

  // useEffect(() => {
  //   if (firebase.isLoggedIn) {
  //     navigate("/");
  //     console.log(true)
  //   }
  // }, [firebase, navigate]);

  return (
    <>
      <Helmet>
        <title>Register - CodeNesters</title>
        <meta
          name="keywords"
          content="Register, codenesters, register codenesters, register to codenesters, website development, web agency, web developer, register developer, sign up codenesters, create account codenesters, codenesters web services, codenesters website agency, don't have an account"
        />
        <meta
          name="description"
          content="Register to CodeNesters | Join our digital journey with high quality software services and interactive learning guidance!"
        />
        <link rel="canonical" href="https://www.codenesters.in/register" />
      </Helmet>
      {/* background-image: linear-gradient(198deg, #cdbbf9aa 0%, #ffffff 100%); */}
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
          <h1 className="fs-2" color="darkgray" style={{ fontWeight: "600" }}>
            Register to <span className="text-gradient">CodeNesters</span>
          </h1>
          <p className="fs-5">
            Join our digital journey with high quality software services and
            interactive learning guidance!
          </p>

          <img
            src={SignIn}
            alt="Register CodeNesters"
            className="img-fluid"
            width={"auto"}
            height={"auto"}
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
              <div className="register-name mb-3">
                <MDBInput
                  labelStyle={labelStyle}
                  label="Your Name"
                  type="text"
                  size="lg"
                  color="white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={inputColor}
                />
              </div>
              <div className="register-email mb-3">
                <MDBInput
                  label="Email Address"
                  labelStyle={labelStyle}
                  type="email"
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={inputColor}
                />
              </div>
              <div className="register-password mb-3">
                <MDBInput
                  label="Enter Password"
                  labelStyle={labelStyle}
                  type="password"
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={inputColor}
                />
              </div>
              <div className="register-password mb-3">
                <MDBInput
                  label="Confirm Password"
                  labelStyle={labelStyle}
                  type="password"
                  size="lg"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className={inputColor}
                />
              </div>
            </div>

            <div className="register-card-btn mb-2">
              <MDBBtn
                className={`w-100 card-btn`}
                onClick={handleSubmit}
                disabled={
                  password !== confirmPassword ||
                  name === "" ||
                  email === "" ||
                  password === "" ||
                  confirmPassword === ""
                }
              >
                Create Account
              </MDBBtn>
            </div>

            <div className="login-option mb-3">
              <p className="text-center">
                Do you already have an account?
                <Link to={"/login"}> Login Here </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
