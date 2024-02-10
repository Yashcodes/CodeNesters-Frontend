import React from "react";
import Layout from "../components/Layout/Layout";

import AppointForm from "../components/Forms/AppointForm";
import ContactBanner from "../components/Layout/ContactBanner";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us - CodeNesters</title>
        <meta
          name="keywords"
          content="Contact, contact us, codenesters, contact codenesters, contact for website development, premium solutions, budget-friendly, top-notch services, best web development services, support and guidance, experienced staff, experienced, digital success, digital services, contact to codenesters, website development, web agency, web developer, codenesters web services, codenesters website agency"
        />
        <meta
          name="description"
          content="Contact us for the best web and app development services | CodeNesters is the best software company which provides budget-friendly development services."
        />
        <link rel="canonical" href="https://www.codenesters.in/contact" />
      </Helmet>
      {/*//! Contact Page Banner */}
      <ContactBanner />

      {/*//! Appointment Form */}
      <AppointForm />
    </Layout>
  );
};

export default Contact;
