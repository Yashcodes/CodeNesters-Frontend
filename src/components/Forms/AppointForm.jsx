import React, { useState } from "react";
import "../../styles/Contact.css";
import axios from "axios";
import { toast } from "react-hot-toast";

const AppointForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [message, setMessage] = useState("");

  // eslint-disable-next-line
  const [userData, setUserData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://code-nesters-backend.vercel.app/api/v1/contact/form-submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          name,
          email,
          phone,
          address,
          pincode,
          message,
        }
      );

      setUserData(data);

      toast.success("Form submitted Successfully");
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setPincode("");
      setMessage("");
    } catch (error) {
      toast.error("Error in submitting form");
    }
  };

  return (
    <>
      <section className="appointment" id="appointment">
        <h2
          className="section-heading appoint-head"
          style={{ color: "#a87fff" }}
        >
          Get an Appointment
        </h2>
        <div className="container mb-4">
          <div className="row">
            <div className="col-md-6" data-aos="fade-right">
              <form id="ft-form" acceptCharset="UTF-8">
                <fieldset>
                  <legend className="appoint-form-head">For person</legend>
                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </label>

                  <label>
                    Email address
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>

                  <label>
                    Address
                    <input
                      type="text"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </label>

                  <div className="two-cols">
                    <label>
                      Pincode
                      <input
                        type="text"
                        name="pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required
                      />
                    </label>

                    <label>
                      Phone number
                      <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </label>
                  </div>

                  <label>
                    Message
                    <input
                      type="text"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </label>
                </fieldset>

                <div className="btns">
                  <button
                    className="btn btn-primary appoint-submit-btn"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <h3 className="why-appoint-head">Why Connect With Us</h3>
              <div className="why-appoint-cont my-4">
                <h4 className="fs-5" style={{ color: "rgb(65 64 64)" }}>24/7 Hours Available</h4>
                <p className="para-color why-appoint-text">
                  Need assistance at any time? We're here for you 24/7, ensuring
                  support and guidance whenever you require it.
                </p>
              </div>
              <div className="why-appoint-cont">
                <h5 style={{ color: "rgb(65 64 64)" }}>
                  Experienced Staff Available
                </h5>
                <p className="para-color why-appoint-text">
                  Our team brings years of expertise to the table, assuring
                  top-notch service and reliable solutions for your needs.
                </p>
              </div>
              <div className="why-appoint-cont my-4">
                <h5 style={{ color: "rgb(65 64 64)" }}>Low Fees &amp; Price</h5>
                <p className="para-color why-appoint-text">
                  Get premium solutions without the premium price tag. We
                  believe in making excellence accessible through
                  budget-friendly services at CodeNesters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointForm;
