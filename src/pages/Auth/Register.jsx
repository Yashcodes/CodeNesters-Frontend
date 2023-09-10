import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/AuthStyles/Register.css";
import Brand from "../../assets/images/brandLogo.png";
import { MDBBtn, MDBIcon, MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/Auth";
// import { useFirebase } from "../../context/Firebase";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [auth, setAuth] = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  // const firebase = useFirebase();

  useEffect(() => {
    if (location.pathname === "/register") {
      document.title = "Register - CodeNesters";
    }
  }, [location]);

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
        console.log(data);
        setAuth({
          ...auth,
          user: data.user,
          authToken: data.authToken,
        });

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
      <div className="register-page">
        <div className="register-card shadow-lg">
          <div className="register-card-header mt-3">
            <div className="register-card-img">
              <img src={Brand} alt="" width="44px" height="44px" />
            </div>
            <div className="card-head">
              <h2>CodeNesters</h2>
            </div>
          </div>

          <div className="register-card-input">
            <div className="register-name mb-3">
              <MDBInput
                label="Your Name"
                type="text"
                size="lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="register-email mb-3">
              <MDBInput
                label="Email Address"
                type="email"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
              />
            </div>
            <div className="register-password mb-3">
              <MDBInput
                label="Confirm Password"
                type="password"
                size="lg"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="register-card-btn mb-2">
            <MDBBtn className="w-100 card-btn" onClick={handleSubmit}>
              Create Account
            </MDBBtn>
          </div>

          <div className="divider-text text-center mb-2">or</div>

          <div className="register-with-google mb-3">
            <MDBBtn className="w-100 card-btn" onClick={""}>
              SignUp with Google
              <span>
                <MDBIcon fab icon="google" className="mx-2" size="lg" />
              </span>
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
    </>
  );
};

export default Register;
