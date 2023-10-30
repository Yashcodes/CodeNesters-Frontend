import React from "react";
import founder1 from "../../assets/images/Profile/profile_photo.jpg";
import {Link} from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="container my-5">
        <div
          className="about-us-container d-flex justify-content-center align-items-start"
          style={{ gap: "44px" }}
        >
          <div className="about-left">
            <img
              src={founder1}
              alt=""
              style={{
                width: "100%",
                maxHeight: "600px",
                borderRadius: "22px",
                boxShadow:
                  "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
              }}
              className="img-responsive"
            />
          </div>

          <div className="about-right" style={{ maxWidth: "600px" }}>
            <h1 className="text-black">About Us</h1>
            <p>
              <span className="fs-5">
                Welcome to the CodeNesters! Join us for better growth and
                implementations.
              </span>{" "}
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
              tempore, magnam sequi quae illum voluptatum ut esse odio dicta
              quidem blanditiis eos quod! Dolor quia dolores reprehenderit
              quaerat nesciunt asperiores a quibusdam ipsam cum libero
              repudiandae ipsum ut, consectetur ipsa.
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              pariatur, magnam adipisci quia exercitationem dolores! Rerum illo
              odio ea aliquid soluta excepturi debitis eius voluptatem atque.
              Doloribus laudantium vitae iure?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              molestiae quod numquam esse. Facere tempora corrupti nemo
              excepturi assumenda, ullam mollitia sapiente, consequatur
              exercitationem error eius! Excepturi praesentium maiores magnam?
            </p>

            <div className="about-us-btn d-flex flex-row gap-2 flex-wrap">
              <Link className="btn contact-banner-btn" to={'/courses'}>View Courses</Link>
              <Link className="btn contact-banner-btn" to={'/contact'}>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
