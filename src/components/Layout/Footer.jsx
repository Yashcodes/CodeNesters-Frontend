import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/images/brandLogo.png";

import "../../components/Layout/styles/Footer.css";

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
                  <span className="fw-bold fs-5">CODENESTERS</span>
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
              <div id="content-2 mx-2">
                <div className="footer-content-head mb-3">
                  <span className="fw-bold">MENU</span>
                </div>

                <div className="footer-content-list">
                  <ul>
                    <li>
                      <Link to={"/"}> Home </Link>
                    </li>
                    <li>
                      <Link to={"/about"}> About </Link>
                    </li>
                    <li>
                      <Link to={"/contact"}> Contact </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="content-3 mx-2">
                <div className="footer-content-head mb-3">
                  <span className="fw-bold">POLICIES</span>
                </div>

                <div className="footer-content-list">
                  <ul>
                    <li>
                      <Link>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link>Terms of use</Link>
                    </li>
                    <li>
                      <Link>Refund & Cancellation Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="right-footer-content">
              <div id="content-4" className="fw-bold">
                <div className="footer-content-head mb-3">
                  <span className="fw-bold">GET IN TOUCH</span>
                </div>

                <div className="footer-content-list">
                  <ul>
                    <li className="d-flex align-items-center gap-1">
                      <MDBIcon fas icon="phone" /> <span>77228 14150</span>
                    </li>

                    <li className="d-flex align-items-center gap-1">
                      <MDBIcon fas icon="envelope" />{" "}
                      <span className="p-0">
                        codenesters3@ <span className="mx-0"> gmail.com</span>
                      </span>
                    </li>
                  </ul>
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
