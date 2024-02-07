import React, { useState } from "react";
import Select from "react-select";

const ContactForServices = () => {
  const options = [
    { value: "landingPages", label: "Landing Pages" },
    { value: "portfolioCreation", label: "Portfolio Creation" },
    { value: "webDevelopment", label: "Web Development" },
    { value: "mobileAppDevelopment", label: "Mobile App Development" },
    { value: "frontendDevelopment", label: "Fronted Development" },
    { value: "webHosting", label: "Web Hosting" },
  ];

  const [selectedOption, setSelectedOption] = useState([]);

  const handleSelectChange = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <div className="container p-5">
      <h4
        className="text-center"
        style={{ color: "#a87fff", fontWeight: "600" }}
      >
        WANT TO CONNECT?
      </h4>
      <h2 className="fs-1 text-black fw-bold whyUsHeading text-center mb-5">
        Let's customize your digital <br /> journey together
      </h2>

      <div className="container w-100 p-0">
        <form action="" autoComplete="off">
          <div className="services-form row d-flex align-items-center justify-content-center">
            <div className="col-md-9 col-sm-12 p-0 d-flex flex-column gap-4">
              <div className="row flex-wrap">
                <div className="input-name service-page-input d-flex flex-column col-md-6">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" autoComplete="off" />
                </div>

                <div className="input-email service-page-input d-flex flex-column col-md-6">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" autoComplete="off" />
                </div>
              </div>

              <div className="row flex-wrap">
                <div className="input-place service-page-input d-flex flex-column col-md-6">
                  <label htmlFor="place">Place</label>
                  <input type="text" id="place" autoComplete="off" />
                </div>

                <div className="input-phone service-page-input d-flex flex-column col-md-6">
                  <label htmlFor="phone">Mobile No.</label>
                  <input type="text" id="phone" autoComplete="off" />
                </div>
              </div>

              <div className="row flex-wrap">
                <div className="input-services service-page-input d-flex flex-column col-md-12">
                  <label htmlFor="services">Services</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={handleSelectChange}
                    options={options}
                    isMulti
                    isSearchable
                    className="services-select"
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        border: 0,
                        borderBottom: "2px solid darkviolet",
                        borderRadius: 0,
                        boxShadow: "none",
                        ":hover": {
                          borderBottomColor: "darkviolet",
                        },
                      }),
                    }}
                    placeholder="Select Services"
                    value={selectedOption}
                  />
                </div>
              </div>

              <div className="row flex-wrap">
                <div className="input-message service-page-input d-flex flex-column col-md-12">
                  <label htmlFor="message">Message</label>
                  <input type="text" id="message" autoComplete="off" />
                </div>
              </div>

              <button
                type="button"
                className="contact-banner-btn m-0 border-0 my-2"
                style={{
                  width: "120px",
                  fontSize: "14px",
                  padding: "10px 14px",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForServices;
