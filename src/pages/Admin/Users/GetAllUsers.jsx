import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../../context/Auth";
import toast from "react-hot-toast";
import Layout from "../../../components/Layout/Layout";
import AdminMenu from "../../../components/AdminDashboardComponents/AdminMenu";
import "../../../styles/AdminStyles/EventRegistrations.css";

const GetAllUsers = () => {
  const [auth] = useAuth();
  const [users, setUsers] = useState([]);

  const getAllUsers = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/auth/get-all-users",
        {
          method: "GET",
          headers: {
            Authorization: auth?.authToken,
          },
        }
      );

      setUsers(data?.users);
    } catch (error) {
      toast.error("Error while getting registration");
    }
  }, [auth?.authToken]);

//   const handleDeleteEnquiry = async (id) => {
//     try {
//       const { data } = await axios.delete(
//         `http://localhost:5000/api/v1/service/delete-services-enquiry/${id}`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: auth?.authToken,
//           },
//         }
//       );

//       getAllUsers();
//       toast.success("Enquiry deleted successfully");
//     } catch (error) {
//       toast.error("Error while deleting enquiry");
//     }
//   };

  useEffect(() => {
    if (auth?.user) getAllUsers();
  }, [auth?.user, getAllUsers]);

  return (
    <Layout>
      <div className="bg-gray-gradient">
        <div className="container-fluid">
          <div className="row gap-5 d-flex flex-wrap">
            <AdminMenu />

            <div
              className="col-md-9 p-3"
              style={{
                maxHeight: "80vh",
                overflowY: "auto",
              }}
            >
              <h1>All Registered Users</h1>

              <div className="eventRegistrationCards">
                {users.map((user) => (
                  <div className="eventRegistrationCard" key={user?._id}>
                    <p className="mt-0">Name : {user?.name}</p>
                    <p>Email : {user?.email}</p>
                    <p>Phone : {user?.phone}</p>
                    <p>Place : {user?.place}</p>
                    <p>Message : {user?.message}</p>
                    <p>Pincode : {user?.pincode}</p>

                    {/* <button onClick={() => handleDeleteEnquiry(enquiry._id)}>
                      Delete
                    </button> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetAllUsers;
