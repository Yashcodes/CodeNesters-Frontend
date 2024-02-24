import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useTheme } from "../../context/ThemeContext";

const ContactForServices = () => {
  const { themeMode } = useTheme();

  const options = [
    { value: "landingPages", label: "Landing Pages" },
    { value: "portfolioCreation", label: "Portfolio Creation" },
    { value: "webDevelopment", label: "Web Development" },
    { value: "mobileAppDevelopment", label: "Mobile App Development" },
    { value: "frontendDevelopment", label: "Fronted Development" },
    { value: "webHosting", label: "Web Hosting" },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [message, setMessage] = useState("");
  const [pincode, setPincode] = useState("");

  const handleSelectChange = (selected) => {
    setSelectedServices(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://code-nesters-backend.vercel.app/api/v1/service/submit",
        {
          headers: {
            "Content-Type": "application/json",
          },

          name,
          email,
          place,
          phone,
          services: selectedServices,
          message,
          pincode,
        }
      );

      toast.success("Form submitted Successfully");
      setName("");
      setEmail("");
      setPhone("");
      setPlace("");
      setPincode("");
      setMessage("");
      setSelectedServices([]);
    } catch (error) {
      toast.error("Error in submitting form");
    }
  };

  const formLabelStyle =
    themeMode === "light"
      ? { color: "rgba(9, 9, 9, 0.842)" }
      : themeMode === "dark"
      ? { color: "white" }
      : { color: "rgba(9, 9, 9, 0.842)" };

  const formInputStyle =
    themeMode === "light"
      ? {}
      : themeMode === "dark"
      ? {
          color: "white",
          background: "none",
        }
      : {};

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
        <h4
          className="text-center"
          style={{ color: "#a87fff", fontWeight: "600" }}
          data-aos="fade-up"
        >
          WANT TO CONNECT?
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
          data-aos="fade-up"
        >
          Let's customize your digital <br /> journey together
        </h2>

        <div className="container w-100 p-0">
          <form action="" autoComplete="off">
            <div className="services-form row d-flex align-items-center justify-content-center">
              <div className="col-md-9 col-sm-12 p-0 d-flex flex-column gap-4">
                <div className="row flex-wrap">
                  <div className="input-name service-page-input d-flex flex-column col-md-6">
                    <label htmlFor="name" style={formLabelStyle}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={formInputStyle}
                    />
                  </div>

                  <div className="input-email service-page-input d-flex flex-column col-md-6">
                    <label htmlFor="email" style={formLabelStyle}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={formInputStyle}
                    />
                  </div>
                </div>

                <div className="row flex-wrap">
                  <div className="input-place service-page-input d-flex flex-column col-md-6">
                    <label htmlFor="place" style={formLabelStyle}>
                      Place
                    </label>
                    <input
                      type="text"
                      id="place"
                      autoComplete="off"
                      value={place}
                      onChange={(e) => setPlace(e.target.value)}
                      style={formInputStyle}
                    />
                  </div>

                  <div className="input-phone service-page-input d-flex flex-column col-md-6">
                    <label htmlFor="phone" style={formLabelStyle}>
                      Mobile No.
                    </label>
                    <input
                      type="text"
                      id="phone"
                      autoComplete="off"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={formInputStyle}
                    />
                  </div>
                </div>

                <div className="row flex-wrap">
                  <div className="input-services service-page-input d-flex flex-column col-md-12">
                    <label htmlFor="services" style={formLabelStyle}>
                      Services
                    </label>
                    <Select
                      defaultValue={selectedServices}
                      onChange={handleSelectChange}
                      options={options}
                      isMulti
                      isSearchable
                      className="services-select"
                      styles={
                        themeMode === "light"
                          ? {
                              control: (baseStyles, state) => ({
                                ...baseStyles,
                                border: 0,
                                borderBottom: "2px solid darkviolet",
                                borderRadius: 0,
                                boxShadow: "none",
                                ":hover": {
                                  borderBottomColor: "darkviolet",
                                },
                                background: "none",
                              }),
                            }
                          : themeMode === "dark"
                          ? {
                              control: (baseStyles, state) => ({
                                ...baseStyles,
                                background: "none",
                                border: "none",
                                borderBottom: "2px solid darkviolet",
                                borderRadius: 0,
                                boxShadow: "none",
                                ":hover": {
                                  borderBottomColor: "darkviolet",
                                },
                              }),
                              option: (provided, state) => ({
                                ...provided,
                                backgroundColor: "black",
                              }),
                            }
                          : {
                              control: (baseStyles, state) => ({
                                ...baseStyles,
                                border: 0,
                                borderBottom: "2px solid darkviolet",
                                borderRadius: 0,
                                boxShadow: "none",
                                ":hover": {
                                  borderBottomColor: "darkviolet",
                                },
                                background: "none",
                              }),
                            }
                      }
                      placeholder="Select Services"
                      value={selectedServices}
                    />
                  </div>
                </div>

                <div className="row flex-wrap">
                  <div className="input-message service-page-input d-flex flex-column col-md-6">
                    <label htmlFor="message" style={formLabelStyle}>
                      Message
                    </label>
                    <input
                      type="text"
                      id="message"
                      autoComplete="off"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={formInputStyle}
                    />
                  </div>

                  <div className="input-pincode service-page-input d-flex flex-column col-md-6">
                    <label htmlFor="pincode" style={formLabelStyle}>
                      Pincode
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      autoComplete="off"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      style={formInputStyle}
                    />
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
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForServices;
