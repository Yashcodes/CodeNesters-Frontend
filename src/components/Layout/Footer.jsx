import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/images/brandLogo.png";

import "../../components/Layout/styles/Footer.css";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { themeMode } = useTheme();

  return (
    <>
      <footer
        className="footer"
        id="footer"
        style={
          themeMode === "light"
            ? {}
            : themeMode === "dark"
            ? {
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgb(25 13 29) 0%, rgb(0 0 0) 115%)",
                color: "white",
              }
            : {}
        }
      >
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
                  <span className=" fs-6 fw-bold">MENU</span>
                </div>

                <div className="footer-content-list">
                  <ul>
                    <li
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                        })
                      }
                    >
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                        })
                      }
                    >
                      <Link to={"/about"}>About</Link>
                    </li>
                    <li
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                        })
                      }
                    >
                      <Link to={"/services"}>Services</Link>
                    </li>
                    <li
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                        })
                      }
                    >
                      <Link to={"/courses"}>Courses</Link>
                    </li>
                    <li
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                        })
                      }
                    >
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="" id="content-3">
              <div className="footer-content-3">
                <div className="content-3-head">
                  <span className="fs-6 fw-bold">POLICIES</span>
                </div>

                <div className="footer-content-list">
                  <ul>
                    <li
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                        })
                      }
                    >
                      <Link to={"/privacy-policy"}>Privacy Policy</Link>
                    </li>
                    <li
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                        })
                      }
                    >
                      <Link to={"/terms-of-services"}>Terms of Use</Link>
                    </li>
                    <li
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                        })
                      }
                    >
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
                  <span className="fs-6 fw-bold">GET IN TOUCH</span>
                </div>

                <div className="footer-content-list">
                  <ul>
                    <li>
                      <Link to={""} aria-label="Phone Number">
                        <MDBIcon fas icon="phone" /> 7722814150
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"mailto:info@codenesters.in"}
                        aria-label="Email Address"
                      >
                        <MDBIcon fas icon="envelope" /> info@codenesters.in
                      </Link>
                    </li>
                    <li>
                      <ul
                        className="footer-icon-list d-flex align-items-center gap-3 mt-1"
                        style={{ listStyle: "none", fontSize: "17px" }}
                      >
                        <li>
                          <Link
                            to={"https://instagram.com/codenesters"}
                            aria-label="Instagram Link"
                          >
                            <MDBIcon fab icon="instagram" aria-label="hii" />
                            <span style={{ display: "none" }}>
                              Visit our Instagram profile
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"https://linkedin.com/company/codenesters"}
                            aria-label="LinkedIn Link"
                          >
                            <MDBIcon fab icon="linkedin" />
                            <span style={{ display: "none" }}>
                              Visit our LinkedIn profile
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={
                              "https://api.whatsapp.com/send?phone=7722814150&text=Hey, there! I want to book an appointment for my project."
                            }
                            aria-label="WhatsApp CodeNesters"
                          >
                            <MDBIcon fab icon="whatsapp" />
                            <span style={{ display: "none" }}>
                              Contact us on WhatsApp
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="mailto:info@codenesters.in"
                            aria-label="Email CodeNesters"
                          >
                            <MDBIcon far icon="envelope" />
                            <span style={{ display: "none" }}>
                              Reach us through email
                            </span>
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
          Copyright © 2024 CodeNesters All Rights Reserved
        </span>
      </footer>
    </>
  );
};

export default Footer;
