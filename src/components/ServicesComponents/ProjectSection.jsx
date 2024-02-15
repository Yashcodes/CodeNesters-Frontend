import { Swiper, SwiperSlide } from "swiper/react";
import gitEvent from "../../assets/images/events/git-event.jpg";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const ProjectSection = () => {
  const ProjectData = [
    {
      card: {
        id: 1,
        title: "E-Commerce Project",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem eveniet error unde quia, sed doloremque blanditiis accusamus veniam atque, et doloribus deserunt iste!",
        rating: [
          {
            id: 1,
            icon: <FaStar size={"22px"} />,
            color: "Yellow",
          },
          {
            id: 2,
            icon: <FaStar size={"22px"} />,
            color: "Yellow",
          },
          {
            id: 3,
            icon: <FaStar size={"22px"} />,
            color: "Yellow",
          },
          {
            id: 4,
            icon: <FaStar size={"22px"} />,
            color: "Yellow",
          },
          {
            id: 5,
            icon: <FaRegStar size={"22px"} />,
            color: "Yellow",
          },
        ],
      },
    },
    {
      card: {
        id: 2,
        title: "Ed-tech Website",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem eveniet error unde quia, sed doloremque blanditiis accusamus veniam atque, et doloribus deserunt iste!",
        rating: [
          {
            id: 1,
            icon: <FaStar size={"22px"} />,
            color: "Yellow",
          },
          {
            id: 2,
            icon: <FaStar size={"22px"} />,
            color: "Yellow",
          },
          {
            id: 3,
            icon: <FaStar size={"22px"} />,
            color: "Yellow",
          },
          { id: 4, icon: <FaStar size={"22px"} />, color: "Yellow" },
          { id: 5, icon: <FaStar size={"22px"} />, color: "Yellow" },
        ],
      },
    },
    {
      card: {
        id: 3,
        title: "Business Portfolio",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem eveniet error unde quia, sed doloremque blanditiis accusamus veniam atque, et doloribus deserunt iste!",
        rating: [
          { id: 1, icon: <FaStar size={"22px"} />, color: "Yellow" },
          {
            id: 2,
            icon: <FaStar size={"22px"} />,
            color: "Yellow",
          },
          {
            id: 3,
            icon: <FaStar size={"22px"} />,
            color: "Yellow",
          },
          {
            id: 4,
            icon: <FaStarHalfAlt size={"22px"} />,
            color: "Yellow",
          },
          {
            id: 5,
            icon: <FaRegStar size={"22px"} />,
            color: "Yellow",
          },
        ],
      },
    },
    {
      card: {
        id: 4,
        title: "Spices Business Portfolio",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem eveniet error unde quia, sed doloremque blanditiis accusamus veniam atque, et doloribus deserunt iste!",
        rating: [
          { id: 1, icon: <FaStar size={"22px"} />, color: "Yellow" },
          {
            id: 2,
            icon: <FaStar size={"22px"} />,
            color: "Yellow",
          },
          {
            id: 3,
            icon: <FaStar size={"22px"} />,
            color: "Yellow",
          },
          {
            id: 4,
            icon: <FaStar size={"22px"} />,
            color: "Yellow",
          },
          {
            id: 5,
            icon: <FaStarHalfAlt size={"22px"} />,
            color: "Yellow",
          },
        ],
      },
    },
  ];

  const { themeMode } = useTheme();

  return (
    <div
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
      <div className="container p-5">
        <div className="testimonial-container">
          <h4
            className="text-center"
            style={{ color: "#a87fff", fontWeight: "600" }}
          >
            OUR PROJECTS
          </h4>
          <h2
            className="fs-1 fw-bold whyUsHeading text-center mb-5"
            style={
              themeMode === "light"
                ? { color: "rgba(9, 9, 9, 0.842)" }
                : themeMode === "dark"
                ? { color: "white" }
                : { color: "rgba(9, 9, 9, 0.842)" }
            }
          >
            Discover our portfolio featuring <br />
            real projects and impactful solutions
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
              996: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
              },
              120: {
                slidesPerView: 1,
              },
            }}
            modules={[Pagination, Autoplay, Keyboard]}
            className="mySwiper"
          >
            {ProjectData.map((project) => (
              <SwiperSlide
                key={project?.card?.id}
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
                <div className="container p-0">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="event-card p-2 shadow rounded">
                        <div className="event-card-img">
                          <img
                            src={gitEvent}
                            alt=""
                            style={{
                              width: "100%",
                              height: "300px",
                              borderRadius: "2px 2px 0px 0px",
                            }}
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-body py-2 px-2">
                          <h5
                            className="m-0 fw-bold my-1 mb-2"
                            style={
                              themeMode === "light"
                                ? { color: "black" }
                                : themeMode === "dark"
                                ? { color: "#a87fff" }
                                : { color: "black" }
                            }
                          >
                            {project?.card?.title}
                          </h5>
                          <p
                            style={{ lineHeight: "22px" }}
                            className="text-justify"
                          >
                            {project?.card?.description}
                          </p>

                          <div className="event-register d-flex align-items-center justify-content-between flex-wrap">
                            <div className="left d-flex align-items-center gap-3 flex-wrap">
                              <Link
                                to={
                                  "https://book.stripe.com/aEU5mb8Bt0Ea39maEE"
                                }
                              >
                                <button className="btn contact-banner-btn">
                                  View Project
                                </button>
                              </Link>
                              <div className="event-price d-flex justify-content-between flex-wrap">
                                <p className="m-0 d-flex gap-1 align-items-center">
                                  <span>Rating: </span>

                                  {project?.card?.rating.map((rating) => (
                                    <span
                                      style={{
                                        marginBottom: "6px",
                                        color: "darkViolet",
                                      }}
                                      key={rating?.id}
                                    >
                                      {rating?.icon}
                                    </span>
                                  ))}
                                </p>
                              </div>
                            </div>
                            <div className="event-discount align-self-right">
                              <span className="badge badge-success fs-5">
                                60% off
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
