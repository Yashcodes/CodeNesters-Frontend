import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth";

const UserMenu = () => {
  const [auth] = useAuth();

  return (
    <div>
      <ul>
        <li>
          <Link to={`/dashboard/user/settings`}>Edit Profile</Link>
        </li>

        <li>
          <Link
            to={`/dashboard/user/profile/${auth?.user?._id}/change-password`}
          >
            Password
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
