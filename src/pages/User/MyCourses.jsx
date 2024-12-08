import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/Auth";
import Loading from "../../Utils/Loading";
import toast from "react-hot-toast";
import axios from "axios";
import "../../styles/UserStyles/MyCourses.css";
import { Link } from "react-router-dom";

const MyCourses = () => {
  const { themeMode } = useTheme();
  const [auth] = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [orders, setOrders] = useState([]);

  const getAllOrders = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(
        "https://code-nesters-backend.vercel.app/api/v1/order/get-all-orders",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: auth?.authToken,
          },
        }
      );

      setOrders(data?.orders);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("Error Occured, Please Reload 🥲");
      toast.error("Error Getting Orders");
    }
  }, [auth?.authToken]);

  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

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
            {orders.length !== 0 ? (
              <div className="container p-0 pt-1" style={{ maxWidth: "50rem" }}>
                <h1 className="">Your Courses</h1>

                {orders.map((order) => {
                  return (
                    <div
                      className="order-card py-3 px-4 rounded mt-4 mb-4"
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
                      <div className="order-details-grid">
                        <div className="order-detail">
                          <span className="fw-bold">Order ID:</span> <span className="text-break">{order._id}</span>
                        </div>

                        <div className="order-detail">
                          <span className="fw-bold">Amount:</span> ₹
                          {order.amount / 100}
                        </div>

                        <div className="order-detail">
                          <span className="fw-bold">Date:</span>{" "}
                          {new Date(order.createdAt).toLocaleDateString()}
                        </div>

                        <div className="order-detail">
                          <Link
                            to={`/dashboard/user/my-courses/${order._id}`}
                            className="btn contact-banner-btn btn-sm"
                          >
                            View Order
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                className="container text-center p-0 d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: "80vh" }}
              >
                <h1 className="">Your have no Orders</h1>
                <p className="fs-5">{errorMessage && errorMessage}</p>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default MyCourses;
