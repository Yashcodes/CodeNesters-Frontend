import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../../context/Auth";
import toast from "react-hot-toast";

const EventRegistrations = () => {
  const [auth] = useAuth();
  const [registrations, setRegistrations] = useState([]);

  const getRegistrations = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/event/get-event-registrations",
        {
          method: "GET",
          headers: {
            Authorization: auth?.authToken,
          },
        }
      );

      setRegistrations(data?.registrations);
    } catch (error) {
      toast.error("Error while getting registration");
    }
  }, [auth?.authToken]);

  useEffect(() => {
    if (auth?.user) getRegistrations();
  }, [auth?.user, getRegistrations]);

  return (
    <div>
      <h1>Event Registrations</h1>

      {registrations.map((registration) => (
        <p key={registration?._id}>{registration?.name}</p>
      ))}
    </div>
  );
};

export default EventRegistrations;
