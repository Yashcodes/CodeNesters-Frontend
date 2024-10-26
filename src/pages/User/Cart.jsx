import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useTheme } from "../../context/ThemeContext";
import "../../styles/UserStyles/Cart.css";
import axios from "axios";
import { useAuth } from "../../context/Auth";
import { MDBIcon } from "mdb-react-ui-kit";
import toast from "react-hot-toast";

const Cart = () => {
  const { themeMode } = useTheme();
  const [auth] = useAuth();
  const [cart, setCart] = useState([]);

  const getCartProducts = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://code-nesters-backend.vercel.app/api/v1/cart/get-user-cart",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: auth?.authToken,
          },
        }
      );

      console.log(data?.cartCourses);
      setCart(data?.cartCourses);
    } catch (error) {
      console.log(error);
    }
  }, [auth?.authToken]);

  const handleCheckout = async () => {
    const ids = cart.map((cart) => cart?.course?._id);

    try {
      const { data } = await axios.post(
        "https://code-nesters-backend.vercel.app/api/v1/payment/create-payment",
        {
          amount: "100",
          courses: JSON.stringify(ids),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: auth?.authToken,
          },
        }
      );

      if (data?.success) {
        var options = {
          key: process.env.REACT_APP_RAZORPAY,
          amount: data?.order?.amount,
          currency: "INR",
          name: "CodeNesters",
          description: "Test Transaction",
          image:
            "https://www.codenesters.in/static/media/brandLogo.706e7fd2c467ff72b417.png",
          order_id: data?.order?.id,
          callback_url: `https://code-nesters-backend.vercel.app/api/v1/payment/verify-payment?userId=${auth?.user?._id}`,
          prefill: {
            name: auth?.user?.name,
            email: auth?.user?.email,
            contact: "9000090000",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const razorPay = new window.Razorpay(options);
        razorPay.open();
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://code-nesters-backend.vercel.app/api/v1/cart/delete-cart-item/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: auth?.authToken,
          },
        }
      );

      if (data?.success) {
        toast.success(data?.message);
        await getCartProducts();
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartProducts();
  }, [getCartProducts]);

  return (
    <Layout>
      <div
        className="container-fluid cart-page-container p-2"
        style={
          themeMode === "light"
            ? {
                backgroundImage:
                  "linear-gradient(198deg, #bba9e2aa 0%, #ffffff 100%)",
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
        <div className="container p-0">
          <h1 className="text-center">
            {cart.length !== 0 ? "Your Cart" : "Your Cart is Empty!"}
          </h1>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <div className="cart-products" style={{ width: "30rem" }}>
              {cart.map((cartProduct) => {
                return (
                  <div
                    className="cart-card d-flex gap-3 p-2 rounded mb-4"
                    key={cartProduct?._id}
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
                    <div className="cart-card-image">
                      <img
                        src={cartProduct?.course?.courseImage}
                        alt="CartImage"
                        width={"180"}
                        height={"140"}
                        className="rounded"
                      />
                    </div>
                    <div className="cart-card-content">
                      <p className="m-0 fs-5">
                        {cartProduct?.course?.courseName}
                      </p>
                      <p
                        className="mt-1"
                        style={{
                          width: "100%",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          WebkitLineClamp: 2,
                          textOverflow: "ellipsis",
                          fontSize: "0.9rem",
                        }}
                      >
                        {cartProduct?.course?.courseContent}
                      </p>

                      <div className="d-flex justify-content-between align-items-center">
                        <div className="card-price">
                          <span className="m-0 fw-bold">
                            Price: &nbsp; Rs. {cartProduct?.course?.coursePrice}
                            <p
                              className="text-decoration-line-through d-inline"
                              style={{
                                marginLeft: "8px",
                                fontWeight: "normal",
                                color: "gray",
                              }}
                            >
                              Rs. {cartProduct?.course?.courseDiscountedPrice}
                            </p>
                          </span>
                        </div>
                        <div onClick={() => handleDelete(cartProduct?._id)}>
                          <MDBIcon
                            fas
                            icon="trash"
                            color="red"
                            className="text-danger"
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {cart.length !== 0 ? (
              <div
                className="cart-checkout"
                style={{
                  // backgroundColor: "green",
                  height: "500px",
                  width: "25rem",
                }}
              >
                <button
                  className="btn contact-banner-btn"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
