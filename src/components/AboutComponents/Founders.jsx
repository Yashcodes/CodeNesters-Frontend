import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import founder1 from "../../assets/images/FounderImage/founder-1.jpg";
import founder2 from "../../assets/images/FounderImage/founder-2.png";
import founder3 from "../../assets/images/FounderImage/founder-3.jpg";
import founder4 from "../../assets/images/FounderImage/founder-4.jpg";
import founder5 from "../../assets/images/FounderImage/founder-5.jpg";
import founder6 from "../../assets/images/FounderImage/founder-6.jpg";
import { MDBIcon } from "mdb-react-ui-kit";
import { useTheme } from "../../context/ThemeContext";

const Founders = () => {
  const { themeMode } = useTheme();

  const Data = [
    {
      card: {
        id: 1,
        title: "Bhagvendra Singh Parihar",
        subTitle: "Founder & CEO",
        description: "Hey, I want to avail your services",
        img: founder1,
        email: "pariharyash1989@gmail.com",
        instagram: "https://instagram.com/asynchronous.1",
        linkedin: "https://linkedin.com/in/bhagvendra-singh",
      },
    },
    {
      card: {
        id: 2,
        title: "Jalla Upendra Rao",
        subTitle: "Founder & CEO",
        description: "Hey, I want to avail your services",
        img: founder2,
        email: "",
        instagram: "https://www.instagram.com/upendrarao_01/",
        linkedin: "https://www.linkedin.com/in/upendra-rao/",
      },
    },
    {
      card: {
        id: 3,
        title: "Ashish Tripathi",
        subTitle: "Founder & CEO",
        description: "Hey, I want to avail your services",
        img: founder3,
        email: "ashishtrip27@gmail.com",
        instagram: "https://www.instagram.com/ashishtripathi_________/",
        linkedin: "https://www.linkedin.com/in/ashish-triapthi/",
      },
    },
    {
      card: {
        id: 4,
        title: "Soham Patharkar",
        subTitle: "Founder & CEO",
        description: "Hey, I want to avail your services",
        img: founder4,
        email: "sohampatharkar48@gmail.com",
        instagram: "https://www.instagram.com/sohampatharkar48/",
        linkedin: "https://www.linkedin.com/in/soham-patharkar-547b75222/",
      },
    },
    {
      card: {
        id: 5,
        title: "Anurag Verma",
        subTitle: "Founder & CEO",
        description: "Hey, I want to avail your services",
        img: founder5,
        email: "anuragverma6266361989@gmail.com",
        instagram: "https://www.instagram.com/anurag.verma02/",
        linkedin: "",
      },
    },
    {
      card: {
        id: 6,
        title: "Priyanshu Patel",
        subTitle: "Founder & CEO",
        description: "Hey, I want to avail your services",
        img: founder6,
        email: "priyanshu678patel@gmail.com",
        instagram: "",
        linkedin: "",
      },
    },
    {
      card: {
        id: 7,
        title: "Aditya Raut",
        subTitle: "Founder & CEO",
        description: "Hey, I want to avail your services",
        img: founder2,
        email: "",
        instagram: "https://www.instagram.com/aditya_rt_04/",
        linkedin: "",
      },
    },
  ];

  return (
    <section
      className="founders-section py-5 px-4"
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
      <div className="container">
        <h4
          className="text-center"
          style={{ color: "#a87fff", fontWeight: "600" }}
          data-aos="fade-up"
        >
          BUSINESS FOUNDATION
        </h4>
        <h2
          className="fs-1 fw-bold text-center mb-5"
          style={
            themeMode === "light"
              ? { color: "rgba(9, 9, 9, 0.842)" }
              : themeMode === "dark"
              ? { color: "white" }
              : { color: "rgba(9, 9, 9, 0.842)" }
          }
          data-aos="fade-up"
        >
          Meet Our Expert Team
        </h2>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            120: {
              slidesPerView: 1,
            },
          }}
          modules={[Pagination, Autoplay, Keyboard]}
          className="mySwiper px-2 pt-2 pb-5"
          style={{ zIndex: "0" }}
        >
          <div className="mb-5">
            {Data.map((founder) => (
              <SwiperSlide
                key={founder?.card?.id}
                className=""
                style={
                  themeMode === "light"
                    ? { borderRadius: "14px" }
                    : themeMode === "dark"
                    ? {
                        backgroundImage:
                          "radial-gradient(circle at 50% 50%, rgb(25 13 29) 0%, rgb(0 0 0) 115%)",
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                        color: "white",
                        borderRadius: "14px",
                      }
                    : { borderRadius: "14px" }
                }
              >
                <div className="founders-card shadow px-2 py-4">
                  <div className="founder-profile m-0">
                    <div className="left">
                      <img src={founder?.card?.img} alt="founder1" />
                    </div>

                    <div className="right">
                      <p
                        style={
                          themeMode === "light"
                            ? { color: "black" }
                            : themeMode === "dark"
                            ? { color: "#a87fff" }
                            : { color: "black" }
                        }
                      >
                        {founder?.card?.title}
                      </p>
                      <span>Founder & CEO</span>

                      <div className="founder-icons">
                        <Link
                          to={`mailTo:${founder?.card?.email}`}
                          style={{
                            backgroundImage:
                              "linear-gradient(to right,#9d50bb 0%,#6e48aa 51%,#9d50bb 100%)",
                            padding: " 0px 7px 0px 7px",
                            borderRadius: "4px",
                          }}
                        >
                          <MDBIcon
                            far
                            icon="envelope"
                            className="founder-icon"
                          />
                        </Link>
                        <Link
                          to={founder?.card?.instagram}
                          target="_blank"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right,#9d50bb 0%,#6e48aa 51%,#9d50bb 100%)",
                            padding: " 0px 7px 0px 7px",
                            borderRadius: "4px",
                          }}
                        >
                          <MDBIcon
                            fab
                            icon="instagram"
                            className="founder-icon"
                          />
                        </Link>
                        <Link
                          to={founder?.card?.linkedin}
                          target="_blank"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right,#9d50bb 0%,#6e48aa 51%,#9d50bb 100%)",
                            padding: "0px 7px 0px 7px",
                            borderRadius: "4px",
                          }}
                        >
                          <MDBIcon
                            fab
                            icon="linkedin-in"
                            className="founder-icon"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="founder-about">
                    <p className="text-justify m-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eveniet earum dolor distinctio porro impedit consequuntur
                      eius tempora quod officiis quae? Quidem exercitationem
                      voluptas earum quis Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Corporis, nam.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Founders;
