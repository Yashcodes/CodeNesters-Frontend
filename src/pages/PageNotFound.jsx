import React from "react";
import "../styles/PageNotFound.css";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="pageNotFound container-fluid py-5">
      <div className="container page-404-container">
        <h1 className="text-center page-404-head">404 Page Not Found</h1>
        <div className="page-404-image my-3"></div>
        <div className="page-404-content text-center">
          <p className="page-404-text">Looks like this page doesn't exists!</p>
          <button className="page-404-btn" onClick={() => navigate("/")}>
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
