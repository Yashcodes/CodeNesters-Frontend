import React from "react";
import Layout from "../../components/Layout/Layout";

const Profile = () => {
  return (
    <Layout>
      <h1>User Profile</h1>
      <input type="file" onChange={""} />
      <button onClick={""}>Upload</button>

      <img src={""} alt="" width={"100px"} height={"100px"} />
    </Layout>
  );
};

export default Profile;
