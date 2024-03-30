import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth";

const UserMenu = () => {
  const [auth] = useAuth();

  return (
    <div>
      <ul>
        <li>
          <Link
            to={
              auth?.user?.email === "ashish@gmail.com"
                ? `/dashboard/admin/settings`
                : `/dashboard/user/settings`
            }
          >
            Edit Profile
          </Link>
        </li>

        <li>
          <Link
            to={
              auth?.user?.email === "ashish@gmail.com"
                ? `/dashboard/admin/profile/${auth?.user?._id}/change-password`
                : `/dashboard/user/profile/${auth?.user?._id}/change-password`
            }
          >
            Password
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
