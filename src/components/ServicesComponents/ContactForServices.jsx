import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { toast } from "react-hot-toast";

const ContactForServices = () => {
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
      const response = await axios.post(
        "http://localhost:5000/api/v1/service/submit",
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
                  <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="input-email service-page-input d-flex flex-column col-md-6">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="row flex-wrap">
                <div className="input-place service-page-input d-flex flex-column col-md-6">
                  <label htmlFor="place">Place</label>
                  <input
                    type="text"
                    id="place"
                    autoComplete="off"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                  />
                </div>

                <div className="input-phone service-page-input d-flex flex-column col-md-6">
                  <label htmlFor="phone">Mobile No.</label>
                  <input
                    type="text"
                    id="phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="row flex-wrap">
                <div className="input-services service-page-input d-flex flex-column col-md-12">
                  <label htmlFor="services">Services</label>
                  <Select
                    defaultValue={selectedServices}
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
                    value={selectedServices}
                  />
                </div>
              </div>

              <div className="row flex-wrap">
                <div className="input-message service-page-input d-flex flex-column col-md-6">
                  <label htmlFor="message">Message</label>
                  <input
                    type="text"
                    id="message"
                    autoComplete="off"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="input-pincode service-page-input d-flex flex-column col-md-6">
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    type="text"
                    id="pincode"
                    autoComplete="off"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
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
  );
};

export default ContactForServices;
