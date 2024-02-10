import React from "react";
import "../styles/Testimonial.css";

const Testimonial = ({ title, caption, Data }) => {
  return (
    <>
      <section className="section-2 mt-5" id="testimonial">
        <div className="container">
          <h2
            className="text-center fs-4"
            style={{ color: "#a87fff", fontWeight: "600"}}
          >
            {title.toUpperCase()}
          </h2>
          <h3 className="fs-1 fw-bold text-black text-center" style={{marginBottom : "60px"}}>{caption}</h3>
          <p className="border-btm" />
          <div className="row mb-5 testimonial-gap">
            {Data.map((cardData) => (
              <div className="col-lg-4" key={cardData?.card?.id}>
                <div className="card">
                  <div className="face front-face">
                    <img
                      // src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                      src={cardData?.card?.image}
                      alt=""
                      className="profile"
                      loading="lazy"
                      width={"150px"}
                      height={"150px"}
                    />
                    <div className="pt-3 text-uppercase name fw-bold">
                      {cardData?.card?.title}
                    </div>
                    <div className="designation">
                      {cardData?.card?.subTitle}
                    </div>
                  </div>
                  <div className="face back-face">
                    <span className="fas fa-quote-left" />
                    <div className="testimonial">{cardData?.card?.content}</div>
                    <span className="fas fa-quote-right" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
