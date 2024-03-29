import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import toast from "react-hot-toast";
import axios from "axios";
import Loading from "../../Utils/Loading";

const EditProfile = () => {
  const [auth] = useAuth();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(auth?.user?.email);
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(true);

  //! Getting the user details
  const getUser = useCallback(async () => {
    const { data } = await axios.get(
      "https://code-nesters-backend.vercel.app/api/v1/auth/get-user",
      {
        method: "GET",
        headers: {
          Authorization: auth?.authToken,
        },
      }
    );

    setLoading(false);
    setName(data?.user?.name);
    setEmail(data?.user?.email);
    setDescription(data?.user?.description);
    setUsername(data?.user?.username);
    setPhone(data?.user?.phone);
  }, [auth]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const updateProfileHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        "https://code-nesters-backend.vercel.app/api/v1/auth/update-user-profile",
        { name, email, username, description, phone },
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: auth?.authToken,
          },
        }
      );

      getUser();
      toast.success(data?.message);
    } catch (error) {
      toast.error("Error while updating profile");
    }
  };

  //! Adding editable input functionality
  const handleInputChange = (e) => {
    const id = e.target.getAttribute("id");
    const inputElem = document.getElementById(id);
    inputElem.readOnly = false;
  };

  return (
    <div className="edit-profile-container">
      <h1>My Profile</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="profile-content">
          <div className="edit-profile-name">
            <label htmlFor="editName">Name</label>
            <input
              type="text"
              id="editName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onClick={handleInputChange}
              readOnly
            />
          </div>

          <div className="edit-profile-username mt-3">
            <label htmlFor="editUserName">UserName</label>
            <input
              type="text"
              id="editUserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onClick={handleInputChange}
              readOnly
              className="inputChange"
            />
          </div>

          <div className="edit-profile-email mt-3">
            <label htmlFor="editEmail">Email</label>
            <input
              type="email"
              id="editEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly
            />
          </div>

          <div className="edit-profile-phone mt-3">
            <label htmlFor="editPhone">Phone number</label>
            <input
              type="text"
              id="editPhone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onClick={handleInputChange}
              readOnly
            />
          </div>

          <div className="edit-profile-description mt-3">
            <label htmlFor="editDesc">Description</label>
            <textarea
              type="textarea"
              rows={"3"}
              cols={"12"}
              id="editDesc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onClick={handleInputChange}
              readOnly
            />
          </div>

          <div className="update-profile">
            <div className="">
              <button
                className="update-profile-btn"
                onClick={updateProfileHandler}
              >
                Update Profile
              </button>
            </div>

            <div className="edit-profile-password">
              <Link
                to={`/dashboard/user/profile/${auth?.user?._id}/change-password`}
              >
                <span>Change your password ?</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
