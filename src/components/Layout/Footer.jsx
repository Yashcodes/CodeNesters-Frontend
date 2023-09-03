import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/images/brandLogo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-content">
            <div className="left-footer-content">
              <div id="content-1">
                <div className="footer-brand">
                  <img
                    src={brandLogo}
                    alt=""
                    className="brand-logo img-fluid"
                  />
                  <span className="fw-bold">CODENESTERS</span>
                </div>

                <div className="footer-brand-slogan">
                  <span className="fw-bold">
                    Think | Code | Create | Deploy
                  </span>

                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur, pariatur Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>

            <div className="mid-footer-content">
              <div id="content-2">
              <div className="footer-content-head">
                  <span className="fw-bold">MENU</span>
              </div>
              </div>
              <div id="content-3">
              <div className="footer-content-head">
                  <span className="fw-bold">POLICIES</span>
              </div>
              </div>
            </div>

            <div className="right-footer-content">
              <div id="content-4" className="fw-bold">
                <div className="footer-content-head">
                  GET IN TOUCH
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <span className="copyright text-center d-block">
          © Copyright CodeNesters. All Rights Reserved 2023
        </span>
      </footer>
    </>
  );
};

export default Footer;
