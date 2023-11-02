import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import founder1 from "../../assets/images/FounderImage/founder1.jpeg";
import { Link } from "react-router-dom";
import linkedinIcon from "../../assets/images/FounderIcons/linkedin-icon.svg";
import instagramIcon from "../../assets/images/FounderIcons/instagram-icon.svg";
import githubIcon from "../../assets/images/FounderIcons/github-icon.svg";

const Founders = () => {
  return (
    <div className="founder-section-bg p-5">
      <h4
        className="text-center"
        style={{ color: "#a87fff", fontWeight: "600" }}
      >
        BUSINESS FOUNDATION
      </h4>
      <h2 className="fs-1 fw-bold text-black text-center">
        Meet Our Expert Team
      </h2>

      <div className="container my-5" style={{}}>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
          transitionTime={1500}
          useKeyboardArrows={true}
          swipeable={true}
          emulateTouch={true}
          showIndicators={true}
        >
          <div
            className="card-container d-flex flex-row flex-wrap  align-items-start shadow mx-auto"
            style={{ maxWidth: "1000px", borderRadius: "8px" }}
          >
            <div className="card-container-left" style={{ width: "380px" }}>
              <img
                className="img-responsive"
                src={founder1}
                alt=""
                style={{
                  maxWidth: "380px",
                  height: "400px",
                  borderRadius: "8px 0px 0px 8px",
                }}
              />
            </div>

            <div className="card-container-right" style={{ width: "615px" }}>
              <div
                className="right-card-content"
                style={{ padding: "22px 26px 22px 12px" }}
              >
                <h2 className="m-0">Yash Parihar</h2>
                <p className="fs-5 mb-2">Founder, CodeNesters</p>

                <p
                  className="founder-card-para"
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus cumque expedita dolorum provident velit ullam sunt,
                  quae veritatis doloremque vero libero voluptates dignissimos
                  similique reprehenderit corporis natus reiciendis? Ipsam,
                  perferendis. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Consequatur distinctio provident
                  voluptatibus facilis voluptates hic, facere eos sed soluta
                  dolorum incidunt, perspiciatis ipsa molestias adipisci minus
                  vero illum fugit repellat!
                </p>

                <div className="founder-icons d-flex gap-2">
                  <Link to={"https://linkedin.com/in/bhagvendra-singh"}>
                    <img src={linkedinIcon} alt="" width={"44px"} />
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

          <div
            className="card-container d-flex flex-row flex-wrap  align-items-start shadow mx-auto"
            style={{ maxWidth: "1000px", borderRadius: "8px" }}
          >
            <div className="card-container-left" style={{ width: "380px" }}>
              <img
                className="img-responsive"
                src={founder1}
                alt=""
                style={{
                  maxWidth: "380px",
                  height: "400px",
                  borderRadius: "8px 0px 0px 8px",
                }}
              />
            </div>

            <div className="card-container-right" style={{ width: "615px" }}>
              <div
                className="right-card-content"
                style={{ padding: "22px 26px 22px 12px" }}
              >
                <h2 className="m-0">Yash Parihar</h2>
                <p className="fs-5 mb-2">Founder, CodeNesters</p>

                <p
                  className="founder-card-para"
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus cumque expedita dolorum provident velit ullam sunt,
                  quae veritatis doloremque vero libero voluptates dignissimos
                  similique reprehenderit corporis natus reiciendis? Ipsam,
                  perferendis. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Consequatur distinctio provident
                  voluptatibus facilis voluptates hic, facere eos sed soluta
                  dolorum incidunt, perspiciatis ipsa molestias adipisci minus
                  vero illum fugit repellat!
                </p>

                <div className="founder-icons d-flex gap-2">
                  <Link to={"https://linkedin.com/in/bhagvendra-singh"}>
                    <img src={linkedinIcon} alt="" width={"44px"} />
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

          <div
            className="card-container d-flex flex-row flex-wrap  align-items-start shadow mx-auto"
            style={{ maxWidth: "1000px", borderRadius: "8px" }}
          >
            <div className="card-container-left" style={{ width: "380px" }}>
              <img
                className="img-responsive"
                src={founder1}
                alt=""
                style={{
                  maxWidth: "380px",
                  height: "400px",
                  borderRadius: "8px 0px 0px 8px",
                }}
              />
            </div>

            <div className="card-container-right" style={{ width: "615px" }}>
              <div
                className="right-card-content"
                style={{ padding: "22px 26px 22px 12px" }}
              >
                <h2 className="m-0">Yash Parihar</h2>
                <p className="fs-5 mb-2">Founder, CodeNesters</p>

                <p
                  className="founder-card-para"
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus cumque expedita dolorum provident velit ullam sunt,
                  quae veritatis doloremque vero libero voluptates dignissimos
                  similique reprehenderit corporis natus reiciendis? Ipsam,
                  perferendis. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Consequatur distinctio provident
                  voluptatibus facilis voluptates hic, facere eos sed soluta
                  dolorum incidunt, perspiciatis ipsa molestias adipisci minus
                  vero illum fugit repellat!
                </p>

                <div className="founder-icons d-flex gap-2">
                  <Link to={"https://linkedin.com/in/bhagvendra-singh"}>
                    <img src={linkedinIcon} alt="" width={"44px"} />
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
        </Carousel>
      </div>
    </div>
  );
};

export default Founders;
