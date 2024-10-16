import React from "react";
import Layout from "../../components/Layout/Layout";
import { useTheme } from "../../context/ThemeContext";
import "../../styles/UserStyles/Cart.css";

const Cart = () => {
  const { themeMode } = useTheme();

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
          <h1 className="text-center">Your Cart</h1>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <div
              className="cart-products"
              style={{ height: "500px", width: "30rem" }}
            >
              <div
                className="cart-card p-2 rounded"
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
                    src="https://cdn.pixabay.com/photo/2020/06/16/10/30/camera-5305154_640.jpg"
                    alt="CartImage"
                    width={"140"}
                    height={"140"}
                    className="rounded"
                  />
                </div>
                <div className="cart-card-content"></div>
              </div>
            </div>
            <div
              className="cart-checkout"
              style={{
                backgroundColor: "green",
                height: "500px",
                width: "25rem",
              }}
            >
              fhugvre
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
