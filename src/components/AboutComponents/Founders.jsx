import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import founder1 from "../../assets/images/FounderImage/founder1.jpeg";
import img from "../../assets/images/FounderImage/founder-1.jpg";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

const Founders = () => {
  const founderCardData = [
    {
      card: {
        name: "Yash Parihar",
        designation: "Founder, CodeNesters",
        about: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Possimus cumque expedita dolorum provident velit ullam sunt,
      quae veritatis doloremque vero libero voluptates dignissimos
      similique reprehenderit corporis natus reiciendis? Ipsam,
      perferendis. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Consequatur distinctio provident
      voluptatibus facilis voluptates hic, facere eos sed soluta
      dolorum incidunt, perspiciatis ipsa molestias adipisci minus
      vero illum fugit repellat!`,
        linkedin: "https://linkedin.com/in/bhagvendra-singh",
        instagram: "https://instagram.com/asynchronous.1",
        github: "https://github.com/Yashcodes",
        image: founder1,
      },
    },

    {
      card: {
        name: "Jalla Upendra Rao",
        designation: "Founder, CodeNesters",
        about: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Possimus cumque expedita dolorum provident velit ullam sunt,
      quae veritatis doloremque vero libero voluptates dignissimos
      similique reprehenderit corporis natus reiciendis? Ipsam,
      perferendis. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Consequatur distinctio provident
      voluptatibus facilis voluptates hic, facere eos sed soluta
      dolorum incidunt, perspiciatis ipsa molestias adipisci minus
      vero illum fugit repellat!`,
        linkedin: "https://linkedin.com/in/bhagvendra-singh",
        instagram: "https://instagram.com/asynchronous.1",
        github: "https://github.com/Yashcodes",
        image: img,
      },
    },

    {
      card: {
        name: "Yash Parihar",
        designation: "Founder, CodeNesters",
        about: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Possimus cumque expedita dolorum provident velit ullam sunt,
      quae veritatis doloremque vero libero voluptates dignissimos
      similique reprehenderit corporis natus reiciendis? Ipsam,
      perferendis. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Consequatur distinctio provident
      voluptatibus facilis voluptates hic, facere eos sed soluta
      dolorum incidunt, perspiciatis ipsa molestias adipisci minus
      vero illum fugit repellat!`,
        linkedin: "https://linkedin.com/in/bhagvendra-singh",
        instagram: "https://instagram.com/asynchronous.1",
        github: "https://github.com/Yashcodes",
        image: founder1,
      },
    },
  ];

  return (
    <div className="founder-section-bg p-5">
      <h4
        className="text-center"
        style={{ color: "#a87fff", fontWeight: "600" }}
        data-aos="fade-up"
      >
        BUSINESS FOUNDATION
      </h4>
      <h2 className="fs-1 fw-bold text-black text-center" data-aos="fade-up">
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
          {founderCardData.map((cardData) => (
            <div
              className="card-container d-flex flex-row flex-wrap  align-items-start shadow mx-auto"
              style={{ maxWidth: "1000px", borderRadius: "8px" }}
            >
              <div className="card-container-left" style={{ width: "380px" }}>
                <img
                  className="img-responsive"
                  src={cardData?.card?.image}
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
                  <h2 className="m-0">{cardData?.card?.name}</h2>
                  <p className="fs-5 mb-2">{cardData?.card?.designation}</p>

                  <p
                    className="founder-card-para"
                    style={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                    }}
                  >
                    {cardData?.card?.about}
                  </p>

                  <div className="founder-icons d-flex gap-2">
                    <Link to={`${cardData?.card?.linkedin}`}>
                      <MDBIcon
                        fab
                        icon="linkedin"
                        size="lg"
                        style={{ color: "rgb(115 54 245)" }}
                      />
                    </Link>

                    <Link to={`${cardData?.card?.github}`}>
                      <MDBIcon
                        fab
                        icon="github"
                        size="lg"
                        className="ms-1"
                        style={{ color: "rgb(115 54 245)" }}
                      />
                    </Link>

                    <Link to={`${cardData?.card?.instagram}`}>
                      <MDBIcon
                        fab
                        icon="instagram"
                        size="lg"
                        className="ms-1 text-gradient"
                        style={{ color: "rgb(115 54 245)" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Founders;
