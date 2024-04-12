import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./Auth";
import axios from "axios";
import toast from "react-hot-toast";

const UserProfileContext = createContext();

export const UserProfileProvider = (props) => {
  const [profileUrl, setProfileUrl] = useState("");

  const auth = JSON.parse(localStorage.getItem("auth"));

  const getProfileUrl = useCallback(async () => {
    try {
      const { data } = await axios.post(
        "http://code-nesters-backend.vercel.app/api/v1/user/getObjectUrl",
        {
          key: "image.jpg",
        },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: auth?.authToken,
          },
        }
      );

      setProfileUrl(data?.url);
    } catch (error) {
      toast.error("Error getting profile");
    }
  }, [auth?.authToken]);

  useEffect(() => {
    getProfileUrl();
  }, [getProfileUrl]);

  return (
    <UserProfileContext.Provider value={{ profileUrl }}>
      {props.children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => useContext(UserProfileContext);
