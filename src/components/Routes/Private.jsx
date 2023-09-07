import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/Auth";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";

const Private = () => {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const { data } = await axios.get(
        "https://code-nesters-backend.vercel.app/api/v1/auth/user-auth",
        {
          headers: {
            Authorization: auth?.authToken,
          },
        }
      );

      if (data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

    if (auth?.authToken) authCheck();
  }, [auth?.authToken]);

  return ok ? <Outlet /> : <Spinner />;
};

export default Private;
