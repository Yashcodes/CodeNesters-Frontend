import React from "react";
import Layout from "../components/Layout/Layout";

import AppointForm from "../components/Forms/AppointForm";
import ContactForm from "../components/Forms/ContactForm";
import ContactBanner from "../components/Layout/ContactBanner";

const Contact = () => {
  return (
    <Layout>
      {/*//! Contact Page Banner */}
      <ContactBanner />

      {/*//! Appointment Form */}
      <AppointForm />

      {/*//! Contact Form */}
      <ContactForm />
    </Layout>
  );
};

export default Contact;
