import React from "react";
import "../../styles/Contact.css";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <>
      <section id="banner" className="banner">
        <div className="bg-color">
          <div className="container">
            <div className="row">
              <div className="banner-info">
                <div className="banner-text text-center">
                  <p
                    className="white fw-bold fs-1"
                    style={{ fontSize: "2rem" }}
                  >
                    We are here for you!
                  </p>
                  <p>
                    Empower your digital presence. Your success journey starts
                    with a simple click. <br />
                    Let's Build Your Digital Success Story Together.
                  </p>
                  <Link className="btn contact-banner-btn" to={"/services"}>View Services</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBanner;
