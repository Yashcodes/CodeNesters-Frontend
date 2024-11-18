import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Lottie from "lottie-react";
import paymentSuccess from "../../assets/animations/payment_success.json";
import paymentSuccessGreen from "../../assets/animations/payment_success_green.json";
import { useTheme } from "../../context/ThemeContext";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [remainingTime, setRemainingTime] = useState(3);

  const { themeMode } = useTheme();

  useEffect(() => {
    setIsNavigating(true);

    const interval = setInterval(() => {
      setRemainingTime((preValue) => --preValue);
    }, 1000);

    if (remainingTime === 0) {
      clearInterval(interval);
    }

    setTimeout(() => {
      navigate("/dashboard/user/cart");
      setIsNavigating(false);
    }, [3000]);

    return () => clearInterval(interval);
  }, [navigate, remainingTime]);

  return (
    <Layout>
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={
          themeMode === "light"
            ? {
                backgroundImage:
                  "linear-gradient(198deg, #bba9e2aa 0%, #ffffff 100%)",
                minHeight: "80vh",
                color: "black",
              }
            : themeMode === "dark"
            ? {
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgb(25 13 29) 0%, rgb(0 0 0) 115%)",
                minHeight: "80vh",
                color: "white",
              }
            : {
                backgroundImage:
                  "linear-gradient(198deg, #bba9e2aa 0%, #ffffff 100%)",
                minHeight: "80vh",
                color: "black",
              }
        }
      >
        <Lottie
          animationData={
            themeMode === "light" ? paymentSuccess : paymentSuccessGreen
          }
          loop={true}
          style={{ height: "40vh" }}
        />
        <h1
          className="text-center"
          style={themeMode === "light" ? { color: "black" } : {}}
        >
          Payment Success
        </h1>
        <p>Reference No.: {searchQuery.get("referenceId")}</p>
        {isNavigating === true ? (
          <div
            className="d-flex justify-content-center align-items-center gap-2 rounded"
            style={{
              color: "white",
              padding: "6px 12px",
              backgroundImage:
                "linear-gradient( to right, #9d50bb 0%, #6e48aa 51%, #9d50bb 100%)",
            }}
          >
            <span>Redirecting to dashboard.... {remainingTime}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
};

export default PaymentSuccess;
