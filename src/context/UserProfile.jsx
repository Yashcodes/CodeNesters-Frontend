import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { createContext, useContext, useEffect, useState } from "react";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const UserProfileContext = createContext();

const UserProfileProvider = (props) => {
  const [profileUrl, setProfileUrl] = useState("");
  // const [auth] = useAuth();
  // const [id, setId] = useState("");

  // console.log(process.env.REACT_APP_AWS_REGION)

  // console.log(process.env.REACT_APP_AWS_ACCESSKEY)
  const client = new S3Client({
    region: "ap-south-1",
    credentials: {
      accessKeyId: process.env.REACT_APP_AWS_ACCESSKEY,
      secretAccessKey: process.env.REACT_APP_AWS_SECRETKEY,
    },
  });

  //! GetObject URL from S3 bucket
  const getObjectURL = async () => {
    const userId = JSON.parse(localStorage.getItem("auth")).user._id;
    // setId(userId);
    // console.log("userid", userId);

    const command = new GetObjectCommand({
      Bucket: "codenesters",
      Key: `uploads/user-profile/profile-${userId}`,
    });

    const url = await getSignedUrl(client, command);
    setProfileUrl(url);
  };

  useEffect(() => {
    if (localStorage.getItem("auth")) getObjectURL();
    //eslint-disable-next-line
  }, []);

  // console.log(auth?.user?._id);

  return (
    <UserProfileContext.Provider
      value={[profileUrl, setProfileUrl, getObjectURL]}
    >
      {props.children}
    </UserProfileContext.Provider>
  );
};

const useUserProfile = () => useContext(UserProfileContext);

export { useUserProfile, UserProfileProvider };
