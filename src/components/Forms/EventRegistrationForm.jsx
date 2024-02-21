import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useTheme } from "../../context/ThemeContext";

const EventRegistrationForm = () => {
  const { themeMode } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [event, setEvent] = useState("Git and GitHub");
  const [pincode, setPincode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://code-nesters-backend.vercel.app/api/v1/event/register-event",
        {
          headers: {
            "Content-Type": "application/json",
          },

          name,
          email,
          place,
          phone,
          event,
          pincode,
        }
      );

      toast.success("Form submitted Successfully");
      setName("");
      setEmail("");
      setPhone("");
      setPlace("");
      setPincode("");
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
      ? {
          background: "none",
        }
      : themeMode === "dark"
      ? {
          color: "white",
          background: "none",
        }
      : {
          background: "none",
        };

  return (
    <div>
      <div className="container p-5">
        <h4
          className="text-center"
          style={{ color: "#a87fff", fontWeight: "600" }}
        >
          Wait is over? Register Now
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
          Let's embark your knowledge <br /> and skills
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
                  <div className="input-services service-page-input d-flex flex-column col-md-6">
                    <label htmlFor="event" style={formLabelStyle}>
                      Event
                    </label>
                    <input
                      type="text"
                      id="message"
                      autoComplete="off"
                      value={event}
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

export default EventRegistrationForm;
