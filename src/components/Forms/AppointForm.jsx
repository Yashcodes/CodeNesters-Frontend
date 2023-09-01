import React from "react";
import "../../styles/Contact.css";

const AppointForm = () => {
  return (
    <>
      <section className="appointment" id="appointment">
        <p className="section-heading appoint-head">Get an Appointment</p>
        <div className="container mb-4">
          <div className="row">
            <div className="col-md-6">
              <form
                action="SEND ADDRESS"
                id="ft-form"
                method="POST"
                acceptCharset="UTF-8"
              >
                <fieldset>
                  <legend className="appoint-form-head">For person</legend>
                  <label>
                    Name
                    <input type="text" name="name" required />
                  </label>
                  <div className="two-cols">
                    <label>
                      Email address
                      <input type="email" name="email" required />
                    </label>
                    <label>
                      Phone number
                      <input type="tel" name="phone" />
                    </label>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Appointment request</legend>
                  <div className="two-cols">
                    <label>
                      Date
                      <input type="date" name="Appointment request" required />
                    </label>
                    <div className="inline">
                      <label>
                        <input
                          type="hidden"
                          name="Morning desired"
                          defaultValue="no"
                        />
                        <input
                          type="checkbox"
                          name="Morning desired"
                          defaultValue="yes"
                        />
                        Morning
                      </label>
                      <label>
                        <input
                          type="hidden"
                          name="Afternoon desired"
                          defaultValue="no"
                        />
                        <input
                          type="checkbox"
                          name="Afternoon desired"
                          defaultValue="yes"
                        />
                        Afternoon
                      </label>
                    </div>
                  </div>
                  <p className="appoint-form-head">Confirmation requested by</p>
                  <div className="inline">
                    <label>
                      <input
                        type="radio"
                        name="Confirmation requested by"
                        defaultValue="email"
                        defaultChecked
                        className="input-border"
                      />
                      Email
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="Confirmation requested by"
                        defaultValue="phone"
                        className="input-border"
                      />
                      Phone call
                    </label>
                  </div>
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
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <h3 className="why-appoint-head">Why Appointment With Us</h3>
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
