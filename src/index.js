import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/Testimonial.css";
import "./components/Layout/styles/Footer.css";
import "./styles/HeroSection.css";
import "./styles/WhyUsSectionHome.css";
import "./styles/TestimonialCarousel.css";
import './styles/BusinessProblemHome.css'
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "./scripts/Testimonial";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
