import React from "react";
import reviewImg from "../assets/images/review1.jpg";
import "../styles/Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <section className="section-2" id="testimonial">
        <div className="container">
          <h2
            className="text-uppercase text-dark mb-3 text-center"
            data-aos="fade-up"
          >
            See what our clients say
          </h2>
          <p className="testimonialHeadText" data-aos="fade-up">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            tempore temporibus <br />
            nemo mollitia esse, inventore magni quaerat.
          </p>
          <p className="border-btm" />
          <div className="row mb-5 testimonial-gap">
            <div className="col-lg-4">
              <div className="card">
                <div className="face front-face">
                  <img
                    // src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                    src={reviewImg}
                    alt=""
                    className="profile"
                  />
                  <div className="pt-3 text-uppercase name fw-bold">
                    Anushka Baghel
                  </div>
                  <div className="designation">Content Writer, Journalism</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left" />
                  <div className="testimonial">
                    I made bacck the purchase price in just 48 hours! Thank you
                    for making it pain less, pleasant. The service was
                    execellent. I will refer everyone I know.
                  </div>
                  <span className="fas fa-quote-right" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="face front-face">
                  <img
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                    className="profile"
                  />
                  <div className="pt-3 text-uppercase name fw-bold">
                    Jeffery Kennan
                  </div>
                  <div className="designation">Full Stack Developer</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left" />
                  <div className="testimonial">
                    Really good, you have saved our business! I made bacck the
                    purchase price in just 48 hours! man, this thing is getting
                    better and better as I learn more about it.
                  </div>
                  <span className="fas fa-quote-right" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="face front-face">
                  <img
                    src="https://images.unsplash.com/photo-1614574762522-6ac2fbba2208?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY2fHxtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="profile"
                  />
                  <div className="pt-3 text-uppercase name fw-bold">
                    Issac Maxwell
                  </div>
                  <div className="designation">Finance Director</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left" />
                  <div className="testimonial">
                    Account keeper is the most valuable business research we
                    have EVER purchased. Without electrician, we would ahave
                    gone bankrupt by now.
                  </div>
                  <span className="fas fa-quote-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
