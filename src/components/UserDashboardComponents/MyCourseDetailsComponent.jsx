import React, { useCallback, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useTheme } from "../../context/ThemeContext";
import axios from "axios";
import { useAuth } from "../../context/Auth";
import toast from "react-hot-toast";
import Loading from "../../Utils/Loading";
import { useParams } from "react-router-dom";
import "../../styles/UserStyles/MyCourseDetailsComponent.jsx.css";

const MyCourseComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const { themeMode } = useTheme();
  const [auth] = useAuth();
  const { courseId } = useParams();

  const getOrderDetails = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(
        `https://code-nesters-backend.vercel.app/api/v1/order/get-order/${courseId}`,
        {
          headers: {
            Authorization: auth?.authToken,
          },
        }
      );

      setOrder(data.order[0]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("Error Occured, Please Reload 🥲");
      toast.error("Error Getting Order Details");
    }
  }, [auth?.authToken, courseId]);

  useEffect(() => {
    getOrderDetails();
  }, [getOrderDetails]);

  if(Object.keys(order).length > 0) {
    console.log(order.courses)
  }

  return (
    <Layout>
      <div
        className={`container-fluid py-2 px-3 ${
          isLoading ? "d-flex justify-content-center align-items-center" : ""
        }`}
        style={
          themeMode === "light"
            ? {
                backgroundImage:
                  "linear-gradient(198deg, #bba9e2aa 0%, #ffffff 100%)",
                minHeight: "80vh",
              }
            : themeMode === "dark"
            ? {
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgb(25 13 29) 0%, rgb(0 0 0) 115%)",
                color: "white",
                minHeight: "80vh",
              }
            : {
                backgroundImage:
                  "linear-gradient(198deg, #bba9e2aa 0%, #ffffff 100%)",
                minHeight: "80vh",
              }
        }
      >
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {!isLoading && !errorMessage ? (
              <div className="container p-0 pt-1" style={{ maxWidth: "70rem" }}>
                <h1 className="mb-4">Your Purchase Details</h1>
  
                <div
                  className="order-card py-3 rounded mb-4"
                  key={order._id}
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
                  <div className="row order-info">
                    <div className="orderId">
                      <p>Order ID</p>
                      <p className="text-break">{order._id}</p>
                    </div>
                    <div className="razorpayId">
                      <p>Razorpay Order ID</p>
                      <p className="text-break">{order.razorpay_order_id}</p>
                    </div>
                    <div className="paymentId">
                      <p>Payment ID</p>
                      <p className="text-break">{order.razorpay_payment_id}</p>
                    </div>
                    <div className="orderCreatedAt">
                      <p>Created At</p>
                      <p className="text-break">{new Date(order.createdAt).toLocaleString()}</p>
                    </div>
                    <div>
                      <p>Status</p>
                      <p>{order.status}</p>
                    </div>
                    <div>
                      <p>Amount Paid</p>
                      <p>{order.amount_paid / 100} INR</p>
                    </div>
                    <div>
                      <p>Amount Due</p>
                      <p>{order.amount_due / 100} INR</p>
                    </div>
                    <div>
                      <p>Currency</p>
                      <p>{order.currency}</p>
                    </div>
                  </div>
  
                  <div className="mt-4">
                    <p>Courses</p>
                    <ul>
                      {order?.courses?.map((course, index) => (
                        <li key={course?.courseId?._id + index}>{course?.courseId?.courseName}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="container text-center p-0 d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: "80vh" }}
              >
                <p className="fs-2">{errorMessage && errorMessage}</p>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default MyCourseComponent;
