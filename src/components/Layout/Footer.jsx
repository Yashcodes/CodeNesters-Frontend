import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="container container-fluid p-5">
          <div className="row footer-content">
            <div className="footer-column col-md-4 col-sm-5">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                nesciunt dolorem ipsam saepe ex, quisquam sapiente repellat quo
                natus alias!
              </p>
            </div>
            <div className="footer-column col-md-4 col-sm-5">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a
                    href="./index.html"
                    className="text-white text-decoration-none"
                  >
                    Home
                  </a>{" "}
                </li>
                <li>
                  <a
                    href="./service.html"
                    className="text-white text-decoration-none"
                  >
                    Services
                  </a>{" "}
                </li>
                <li>
                  <a
                    href="./contact.html"
                    className="text-white text-decoration-none"
                  >
                    Appointment
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="footer-column col-md-4 col-sm-5">
              <h3>Follow Us</h3>
              <div className="d-flex gap-3 mt-3">
                <Link>
                  <MDBIcon
                    style={{ color: "white" }}
                    fab
                    icon="linkedin"
                    size="2x"
                  />
                </Link>

                <Link>
                  <MDBIcon
                    style={{ color: "white" }}
                    fab
                    icon="instagram"
                    size="2x"
                  />
                </Link>

                <Link>
                  <MDBIcon
                    style={{ color: "white" }}
                    fab
                    icon="linkedin"
                    size="2x"
                  />
                </Link>
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
