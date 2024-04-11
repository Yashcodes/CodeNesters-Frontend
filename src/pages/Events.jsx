import React from "react";
import Layout from "../components/Layout/Layout";
import GitAndGitHub from "../components/Events/GitAndGitHub";

const Events = () => {
  const data = [
    {
      data: {
        id: 1,
        eventName: "Git and GitHub",
      },
    },
    {
      data: {
        id: 2,
        eventName: "Git and GitHub",
      },
    },
    {
      data: {
        id: 3,
        eventName: "Git and GitHub",
      },
    },
    {
      data: {
        id: 4,
        eventName: "Git and GitHub",
      },
    },
  ];

  return (
    <Layout>
      <div className="container p-5">
        <div className="row">
          {data.map((event) => (
            <div className="col-md-6">
              <GitAndGitHub
                key={event?.data?.id}
                eventName={event?.data?.eventName}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Events;
