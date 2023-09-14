import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import AWS from "aws-sdk";
import { useAuth } from "../../context/Auth";
import { useUserProfile } from "../../context/UserProfile";

const Profile = () => {
  const [file, setFile] = useState();
  const [auth] = useAuth();
  const [profileUrl] = useUserProfile();

  const handleFileChange = async (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    //* S3 Bucket Name
    const S3_BUCKET = "codenesters";

    //* S3 Region
    const REGION = process.env.REACT_APP_AWS_REGION || "ap-south-1";

    //* S3 Credentials
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_ACCESSKEY,
      secretAccessKey: process.env.REACT_APP_AWS_SECRETKEY,
    });

    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    //* Files Parameters
    const params = {
      Bucket: S3_BUCKET,
      Key: `uploads/user-profile/profile-${auth?.user?._id}`,
      Body: file,
    };

    //* Uploading file to s3
    const upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        //* File uploading progress
        console.log(
          "Uploading" + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

    await upload.then((err, data) => {
      console.log(err);

      //* File successfully uploaded
      alert("File uploaded successfully");
    });
  };

  // const client = new S3Client({
  //   region: "ap-south-1",
  //   credentials: {
  //     accessKeyId: process.env.REACT_APP_AWS_ACCESSKEY,
  //     secretAccessKey: process.env.REACT_APP_AWS_SECRETKEY,
  //   },
  // });

  // //! GetObject URL from S3 bucket
  // const getObjectURL = async () => {
  //   const command = new GetObjectCommand({
  //     Bucket: "codenesters",
  //     Key: `uploads/user-profile/profile-${auth?.user?._id}`,
  //   });

  //   const url = await getSignedUrl(client, command);
  //   setUrl(url);
  // };

  // useEffect(() => {
  //   getObjectURL();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <Layout>
      <h1>User Profile</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      <img src={profileUrl} alt="" width={"100px"} height={"100px"} />
    </Layout>
  );
};

export default Profile;
