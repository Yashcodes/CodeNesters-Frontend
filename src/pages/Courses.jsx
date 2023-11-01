import React from "react";
import Layout from "../components/Layout/Layout";

const Courses = () => {
  return (
    <Layout>
      <>
        <h1 className="text-black text-center">Courses and Trainings</h1>

        {/* <div className="container">
        <div
          className="card-container d-flex flex-row flex-wrap  align-items-start shadow"
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
            <div className="right-card-content" style={{ padding: "22px 26px 22px 12px" }}>
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
                perferendis. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Consequatur distinctio provident voluptatibus facilis
                voluptates hic, facere eos sed soluta dolorum incidunt,
                perspiciatis ipsa molestias adipisci minus vero illum fugit
                repellat!
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
      </div> */}
      </>
    </Layout>
  );
};

export default Courses;
