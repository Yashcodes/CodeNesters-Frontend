import React from "react";
import founder1 from "../../assets/images/FounderImage/founder-1.jpg";
import linkedinIcon from "../../assets/images/FounderIcons/linkedin-icon.svg";
import instagramIcon from "../../assets/images/FounderIcons/instagram-icon.svg";
import githubIcon from "../../assets/images/FounderIcons/github-icon.svg";
import { Link } from "react-router-dom";

const Founders = () => {
  return (
    <>
      <section className="founders-section my-5">
        <p
          className="text-center fs-4 m-0"
          style={{ color: "#a87fff", fontWeight: 600 }}
        >
          We are CodeNesters
        </p>
        <p className="fw-bold founders-section-head text-center fs-1 text-black">
          Meet Our Team
        </p>

        <div className="container founders-section-cards my-4 d-flex justify-content-center gap-5 align-items-center flex-wrap">
          <div className="">
            <div className="founders-card card shadow-lg p-4 d-flex align-items-center flex-column">
              <img
                className="img-responsive founder-img"
                src={founder1}
                alt=""
                width="150"
                height="150"
                style={{ borderRadius: "50%" }}
              />
              <p className="mb-0 mt-2">Bhagvendra Singh Parihar</p>
              <p>
                Founder,{" "}
                <span style={{ fontStyle: "italic" }}>CodeNesters</span>
              </p>

              <div className="founder-icons d-flex gap-2">
                <Link to={"https://linkedin.com/in/bhagvendra-singh"}>
                  <img src={linkedinIcon} alt="" />
                </Link>
                <Link to={"https://github.com/YashCodes"}>
                  <img src={githubIcon} alt="" />
                </Link>
                <Link to={"https://instagram.com/asynchronous.1"}>
                  <img src={instagramIcon} alt="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="">
            <div className="founders-card card shadow-lg p-4 d-flex align-items-center flex-column">
              <img
                className="img-responsive founder-img"
                src={founder1}
                alt=""
                width="150"
                height="150"
                style={{ borderRadius: "50%" }}
              />
              <p className="mb-0 mt-2">Bhagvendra Singh Parihar</p>
              <p>
                Founder,{" "}
                <span style={{ fontStyle: "italic" }}>CodeNesters</span>
              </p>

              <div className="founder-icons d-flex gap-2">
                <Link to={"https://linkedin.com/in/bhagvendra-singh"}>
                  <img src={linkedinIcon} alt="" />
                </Link>
                <Link to={"https://github.com/YashCodes"}>
                  <img src={githubIcon} alt="" />
                </Link>
                <Link to={"https://instagram.com/asynchronous.1"}>
                  <img src={instagramIcon} alt="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="">
            <div className="founders-card card shadow-lg p-4 d-flex align-items-center flex-column">
              <img
                className="img-responsive founder-img"
                src={founder1}
                alt=""
                width="150"
                height="150"
                style={{ borderRadius: "50%" }}
              />
              <p className="mb-0 mt-2">Bhagvendra Singh Parihar</p>
              <p>
                Founder,{" "}
                <span style={{ fontStyle: "italic" }}>CodeNesters</span>
              </p>

              <div className="founder-icons d-flex gap-2">
                <Link to={"https://linkedin.com/in/bhagvendra-singh"}>
                  <img src={linkedinIcon} alt="" />
                </Link>
                <Link to={"https://github.com/YashCodes"}>
                  <img src={githubIcon} alt="" />
                </Link>
                <Link to={"https://instagram.com/asynchronous.1"}>
                  <img src={instagramIcon} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Founders;
