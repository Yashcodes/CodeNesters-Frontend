import React from "react";
import contactImg from "../../assets/images/contact/contact-image.jpg";

const ContactForm = () => {
  return (
    <>
      <section className="" id="contact-form">
        <p className="section-heading">Still Have Any Doubt? Contact Us</p>

        <div className="d-flex">
          <div className="contact-left">
            <img src={contactImg} alt="" style={{ maxWidth: "400px" }} />
          </div>
          <div className="contact-right">
            <div className="contact-form">
              <form>
                <div className="name">
                  <label>
                    Name
                    <input type="text" name="name" required />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
