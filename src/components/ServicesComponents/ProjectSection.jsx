// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import gitEvent from "../../assets/images/events/git-event.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  return (
    <>
      <div className="testimonial-container my-5">
        <Swiper
          slidesPerView={window.innerWidth <= "996px" ? 1 : 2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 3000 }}
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
          <SwiperSlide>
            <div className="container p-0 mb-5">
              <div className="row">
                <div className="col-md-12">
                  <div className="event-card p-2 border shadow rounded">
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
                      <h5 className="m-0 fw-bold my-1 text-dark">
                        Git and GitHub - Session on Version Controlling
                      </h5>
                      <p
                        style={{ lineHeight: "22px" }}
                        className="text-justify"
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Error esse aliquid deleniti sequi dolores impedit
                        mollitia voluptate rerum beatae cupiditate. Lorem ipsum
                        dolor, sit amet consectetur adipisicing elit.
                        Voluptatibus, laudantium!
                      </p>

                      <div className="event-register d-flex align-items-center justify-content-between flex-wrap">
                        <div className="left d-flex align-items-center gap-3 flex-wrap">
                          <Link
                            to={"https://book.stripe.com/aEU5mb8Bt0Ea39maEE"}
                          >
                            <button className="btn contact-banner-btn">
                              Book Now
                            </button>
                          </Link>
                          <div className="event-price d-flex justify-content-between flex-wrap">
                            <p className="m-0">
                              Price : Rs. 19/-{" "}
                              <span
                                style={{ textDecoration: "line-through" }}
                                className="text-danger"
                              >
                                Rs. 49
                              </span>
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
          <SwiperSlide>
            <div className="container p-0 mb-5">
              <div className="row">
                <div className="col-md-12">
                  <div className="event-card p-2 border shadow rounded">
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
                      <h5 className="m-0 fw-bold my-1 text-dark">
                        Git and GitHub - Session on Version Controlling
                      </h5>
                      <p
                        style={{ lineHeight: "22px" }}
                        className="text-justify"
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Error esse aliquid deleniti sequi dolores impedit
                        mollitia voluptate rerum beatae cupiditate. Lorem ipsum
                        dolor, sit amet consectetur adipisicing elit.
                        Voluptatibus, laudantium!
                      </p>

                      <div className="event-register d-flex align-items-center justify-content-between flex-wrap">
                        <div className="left d-flex align-items-center gap-3 flex-wrap">
                          <Link
                            to={"https://book.stripe.com/aEU5mb8Bt0Ea39maEE"}
                          >
                            <button className="btn contact-banner-btn">
                              Book Now
                            </button>
                          </Link>
                          <div className="event-price d-flex justify-content-between flex-wrap">
                            <p className="m-0">
                              Price : Rs. 19/-{" "}
                              <span
                                style={{ textDecoration: "line-through" }}
                                className="text-danger"
                              >
                                Rs. 49
                              </span>
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
          <SwiperSlide>
            <div className="container p-0 mb-5">
              <div className="row">
                <div className="col-md-12">
                  <div className="event-card p-2 border shadow rounded">
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
                      <h5 className="m-0 fw-bold my-1 text-dark">
                        Git and GitHub - Session on Version Controlling
                      </h5>
                      <p
                        style={{ lineHeight: "22px" }}
                        className="text-justify"
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Error esse aliquid deleniti sequi dolores impedit
                        mollitia voluptate rerum beatae cupiditate. Lorem ipsum
                        dolor, sit amet consectetur adipisicing elit.
                        Voluptatibus, laudantium!
                      </p>

                      <div className="event-register d-flex align-items-center justify-content-between flex-wrap">
                        <div className="left d-flex align-items-center gap-3 flex-wrap">
                          <Link
                            to={"https://book.stripe.com/aEU5mb8Bt0Ea39maEE"}
                          >
                            <button className="btn contact-banner-btn">
                              Book Now
                            </button>
                          </Link>
                          <div className="event-price d-flex justify-content-between flex-wrap">
                            <p className="m-0">
                              Price : Rs. 19/-{" "}
                              <span
                                style={{ textDecoration: "line-through" }}
                                className="text-danger"
                              >
                                Rs. 49
                              </span>
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
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectSection;
