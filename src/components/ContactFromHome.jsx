import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

import "../styles/ContactFromHome.css";
import { useTheme } from "../context/ThemeContext";

const ContactFromHome = ({ heading, mainContent, subContent }) => {
  const { themeMode } = useTheme();

  return (
    <>
      <div className="container-fluid contact-home-bg">
        <div className="contact-home">
          <div className="p-0 d-flex justify-content-center align-items-center contact-home-content-parent">
            <div className="contact-home-content container">
              <div
                className="content-left"
                data-aos="zoom-in"
                style={
                  themeMode === "light"
                    ? {}
                    : themeMode === "dark"
                    ? {
                        backgroundImage:
                          "radial-gradient(circle at 50% 50%, rgb(19 2 25) 97%, rgb(6, 2, 7) 115%)",
                        color: "white",
                      }
                    : {}
                }
              >
                <span className="mt-4">{heading}</span>
                <h4 className="fs-3 my-3">{mainContent}</h4>
                <p className="my-2">{subContent}</p>
                <div className="contact-left-phone d-flex align-items-center gap-2 mt-2 mb-3">
                  <MDBIcon fas icon="mobile-alt" />
                  <span>+91 77228 14150</span>
                </div>
              </div>

              <div className="content-right">
                <h2 className="text-start fs-1 text-white mb-4 fw-bold">
                  Join Our Family
                </h2>
                <span className="text-white fw-bold">
                  Reach us from here :{" "}
                </span>

                <div className="content-right-icons mt-4">
                  <div className="instagram-icon text-white" data-aos="zoom-in">
                    <Link
                      to={"https://instagram.com/codenesters"}
                      aria-label="CodeNesters Instagram Account"
                    >
                      <MDBIcon fab icon="instagram" size="3x" />
                      <span style={{ display: "none" }}>
                        Visit our Instagram profile
                      </span>
                    </Link>
                    <span className="fs-5">Instagram</span>
                  </div>

                  <div className="linkedin-icon text-white" data-aos="zoom-in">
                    <Link
                      to={"https://linkedin.com/company/codenesters"}
                      aria-label="CodeNesters LinkedIn Account"
                    >
                      <MDBIcon fab icon="linkedin" size="3x" />
                      <span style={{ display: "none" }}>
                        Visit our LinkedIn profile
                      </span>
                    </Link>
                    <span className="fs-5">LinkedIn</span>
                  </div>

                  <div className="whatsapp-icon text-white" data-aos="zoom-in">
                    <Link
                      to="https://api.whatsapp.com/send?phone=7722814150&text=Hey, there! I want to book an appointment for my project."
                      aria-label="CodeNesters WhatsApp"
                    >
                      <MDBIcon fab icon="whatsapp" size="3x" />
                      <span style={{ display: "none" }}>
                        Contact us on WhatsApp
                      </span>
                    </Link>
                    <span className="fs-5">WhatsApp</span>
                  </div>

                  <div className="email-icon text-white" data-aos="zoom-in">
                    <Link
                      to="mailto:info@codenesters.in"
                      aria-label="CodeNesters Email Address"
                    >
                      <MDBIcon far icon="envelope" size="3x" />
                      <span style={{ display: "none" }}>
                        Reach us through email
                      </span>
                    </Link>
                    <span className="fs-5">Email</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFromHome;
