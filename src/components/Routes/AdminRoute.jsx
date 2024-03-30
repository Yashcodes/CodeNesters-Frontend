import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/Auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import { toast } from "react-hot-toast";

const AdminRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const response = await axios.get(
          "https://code-nesters-backend.vercel.app/api/v1/auth/admin-auth",
          {
            headers: {
              Authorization: auth?.authToken,
            },
          }
        );

        if (response.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        toast.error("Unauthorized Access");
      }
    };

    if (auth?.authToken) authCheck();
  }, [auth?.authToken]);

  return ok ? <Outlet /> : <Spinner />;
};

export default AdminRoute;
