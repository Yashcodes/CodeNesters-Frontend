import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/images/brandLogo.png";

import "../../components/Layout/styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="container footer-container">
          <div className="footer-left" id="content-1">
            <div className="footer-content-1">
              <div className="footer-brand-header">
                <img
                  src={brandLogo}
                  alt="logo"
                  width={"44px"}
                  height={"44px"}
                />
                <span className="fw-bold">CODENESTERS</span>
              </div>
              <div className="footer-brand-quote">
                <span className="fw-bold">Think | Code | Create | Deploy</span>
              </div>
              <div className="content-1-para">
                <p>
                  CodeNesters is the best software company in Raipur. We bring
                  dreams to life through exceptional website and app development
                  and design services.
                </p>
              </div>
            </div>
          </div>

          <div className="footer-right">
            <div className="" id="content-2">
              <div className="footer-content-2">
                <div className="content-2-head">
                  <h6 className="fw-bold">MENU</h6>
                </div>

                <div className="footer-content-list">
                  <ul>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="" id="content-3">
              <div className="footer-content-3">
                <div className="content-3-head">
                  <h6 className="fw-bold">POLICIES</h6>
                </div>

                <div className="footer-content-list">
                  <ul>
                    <li>
                      <Link to={"/privacy-policy"}>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to={"/terms-of-services"}>Terms of Use</Link>
                    </li>
                    <li>
                      <Link to={"/cancellation-and-refund"}>
                        Refund & Cancellation Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="" id="content-4">
              <div className="footer-content-4">
                <div className="content-4-head">
                  <h6 className="fw-bold">GET IN TOUCH</h6>
                </div>

                <div className="footer-content-list">
                  <ul>
                    <li>
                      <Link to={"tel:7722814150"}>
                        <MDBIcon fas icon="phone" /> 7722814150
                      </Link>
                    </li>
                    <li>
                      <Link to={"mailto:codenesters3@gmail.com"}>
                        <MDBIcon fas icon="envelope" /> codenesters3@ gmail.com
                      </Link>
                    </li>
                    <li>
                      <ul
                        className="footer-icon-list d-flex align-items-center gap-3 mt-1"
                        style={{ listStyle: "none", fontSize: "17px" }}
                      >
                        <li>
                          <Link to={"https://instagram.com/codenesters"}>
                            <MDBIcon fab icon="instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link to={"https://linkedin.com/company/codenesters"}>
                            <MDBIcon fab icon="linkedin" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={
                              "https://api.whatsapp.com/send?phone=7722814150&text=Hey, there! I want to book an appointment for my project."
                            }
                          >
                            <MDBIcon fab icon="whatsapp" />
                          </Link>
                        </li>
                        <li>
                          <Link to="mailto:codenesters3@gmail.com">
                            <MDBIcon far icon="envelope" />
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <span className="copyright text-center d-block px-1">
          © Copyright CodeNesters. All Rights Reserved 2023
        </span>
      </footer>
    </>
  );
};

export default Footer;
