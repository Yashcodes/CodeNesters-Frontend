import React from "react";
import Layout from "../components/Layout/Layout";

import AppointForm from "../components/Forms/AppointForm";
import ContactBanner from "../components/Layout/ContactBanner";

const Contact = () => {
  return (
    <Layout>
      {/*//! Contact Page Banner */}
      <ContactBanner />

      {/*//! Appointment Form */}
      <AppointForm />
    </Layout>
  );
};

export default Contact;
