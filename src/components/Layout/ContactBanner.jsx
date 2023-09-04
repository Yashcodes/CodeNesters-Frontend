import React from "react";
import "../../styles/Contact.css";

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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod <br />
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#contact-form" className="btn btn-appoint">
                    Contact Us
                  </a>
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
