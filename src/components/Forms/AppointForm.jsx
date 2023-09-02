import React, { useState } from "react";
import "../../styles/Contact.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const AppointForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [message, setMessage] = useState("");

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

      console.log(userData);
    } catch (error) {
      toast.error("Error in submitting form");
    }
  };

  return (
    <>
      <section className="appointment" id="appointment">
        <p className="section-heading appoint-head">Get an Appointment</p>
        <div className="container mb-4">
          <div className="row">
            <div className="col-md-6">
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
                  <input
                    type="text"
                    name="_gotcha"
                    defaultValue
                    style={{ display: "none" }}
                    className="nav-button"
                  />
                  <input
                    type="submit"
                    defaultValue="Submit request"
                    className="nav-button"
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>

            <div className="col-md-6">
              <h3 className="why-appoint-head">Why Connect With Us</h3>
              <div className="why-appoint-cont my-4">
                <h5>24/7 Hours Available</h5>
                <p className="para-color why-appoint-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas expedita eligendi est aspernatur eum.
                </p>
              </div>
              <div className="why-appoint-cont">
                <h5>Experienced Staff Available</h5>
                <p className="para-color why-appoint-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas expedita eligendi est.
                </p>
              </div>
              <div className="why-appoint-cont my-4">
                <h5>Low Fees &amp; Price</h5>
                <p className="para-color why-appoint-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas expedita eligendi est aspernatur eum.
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
