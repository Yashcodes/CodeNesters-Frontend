import React from "react";
import Layout from "../components/Layout/Layout";
import event from "../assets/images/events/git-event.jpg";
import "../styles/Event.css";
import { useTheme } from "../context/ThemeContext";
import EventRegistrationForm from "../components/Forms/EventRegistrationForm";
import Gallery from "../components/PhotoGallery/Gallery";

const Event = () => {
  const { themeMode } = useTheme();

  return (
    <Layout>
      <div
        className="p-3"
        style={
          themeMode === "light"
            ? {
                color: "rgba(9, 9, 9, 0.842)",
                backgroundImage:
                  "linear-gradient(198deg, #bba9e2aa 0%, #ffffff 100%)",
              }
            : themeMode === "dark"
            ? {
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgb(25 1 33) 0%, rgb(12, 3, 17) 115%)",
                color: "white",
              }
            : {
                color: "rgba(9, 9, 9, 0.842)",
                backgroundImage:
                  "linear-gradient(198deg, #bba9e2aa 0%, #ffffff 100%)",
              }
        }
      >
        <div className="container event-page">
          <div className="event-page-content">
            <div
              className="left rounded shadow p-3"
              style={
                themeMode === "light"
                  ? {
                      border: "1px solid rgb(221 206 255)",
                    }
                  : themeMode === "dark"
                  ? {
                      border: "1px solid rgb(25 1 33)",
                    }
                  : {
                      border: "1px solid rgb(221 206 255)",
                    }
              }
            >
              <img
                src={event}
                className="rounded"
                alt="git and github event"
                width={"100%"}
                height="auto"
              />
            </div>
            <div
              className="right"
              style={
                themeMode === "light"
                  ? {
                      color: "rgba(9, 9, 9, 0.842)",
                    }
                  : themeMode === "dark"
                  ? {
                      color: "white",
                    }
                  : { color: "white" }
              }
            >
              <h1 className="m-0">Session on Version Controlling</h1>
              <p className="fs-3">Git and GitHub</p>

              <span className="fs-4 fw-bold">
                What we are delivering to you?
              </span>
              <ul type="disc" style={{ fontSize: "17px" }}>
                <li>Basic of Version Controlling</li>
                <li>Covering tools like Git and GitHub</li>
                <li>Rich Content and Experience</li>
                <li>Valuable Certification and QnA</li>
              </ul>

              <span className="fs-4 fw-bold">Event insights</span>
              <ul style={{ fontSize: "17px" }}>
                <li>Rating: 4.5 / 5</li>
                <li>A nominal registration fees of Rs. 49</li>
                <li>Hands-on Practice</li>
                <li>Talking about Core Concepts</li>
              </ul>
            </div>
          </div>

          <div className="event-page-description mt-3">
            <h2>About Version Controlling</h2>

            <ul
              style={{
                fontSize: "17px",
                letterSpacing: "1px",
                marginBottom: "0px",
              }}
            >
              <li style={{ marginBottom: "4px" }}>
                Version control is a system that records changes to a file or
                set of files over time, enabling recall of specific versions
                later.
              </li>
              <li style={{ marginBottom: "4px" }}>
                Git is a distributed version control system that helps
                developers manage and track changes in their code. It’s like a
                time machine for your code, allowing you to revisit previous
                versions and collaborate seamlessly.
              </li>
              <li style={{ marginBottom: "4px" }}>
                GitHub is a web-based platform designed for version control and
                collaborative software development. It serves as a central hub
                for managing and hosting Git repositories, enabling teams and
                individuals to work together efficiently.​
              </li>
            </ul>
          </div>

          <div className="event-page-form-register">
            {/* <h2 className="mb-4">Register for Event</h2> */}

            <EventRegistrationForm />
          </div>
          <Gallery />
        </div>
      </div>
    </Layout>
  );
};

export default Event;
