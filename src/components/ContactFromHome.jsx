import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

const ContactFromHome = () => {
  return (
    <>
      <div className="container-fluid contact-home-bg">
        <div className="contact-home">
          <div className="p-0 d-flex justify-content-center align-items-center contact-home-content-parent">
            <div className="contact-home-content container">
              <div className="content-left">
                <span className="mt-4">Are you interested?</span>
                <h3 className="my-3">
                  Entrust Your Project to Our Best Team of Professionals
                </h3>
                <p className="my-2">
                  Have any project on mind? For immidiate support :
                </p>
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
                  <div className="instagram-icon text-white">
                    <Link to={"https://instagram.com/codenesters"}>
                      <MDBIcon fab icon="instagram" size="3x" />
                    </Link>
                    <span className="fs-5">Instagram</span>
                  </div>

                  <div className="linkedin-icon text-white">
                    <Link to={"https://linkedin.com/company/codenesters"}>
                      <MDBIcon fab icon="linkedin" size="3x" />
                    </Link>
                    <span className="fs-5">LinkedIn</span>
                  </div>

                  <div className="telegram-icon text-white">
                    <MDBIcon fab icon="telegram-plane" size="3x" />
                    <span className="fs-5">Telegram</span>
                  </div>

                  <div className="email-icon text-white">
                    <Link to="mailto:pariharyash1989@gmail.com">
                      <MDBIcon far icon="envelope" size="3x" />
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
