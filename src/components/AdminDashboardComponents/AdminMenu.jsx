import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { MDBIcon } from "mdb-react-ui-kit";
import { BiSolidContact } from "react-icons/bi";

const AdminMenu = () => {
  const [currentHovered, setCurrentHovered] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  const handleMouseEnter = (id) => {
    setCurrentHovered(id);
  };

  const handleMouseLeave = () => {
    setCurrentHovered(null);
  };

  const isHovered = (id) => {
    return id === currentHovered;
  };

  const getStyle = (id) => {
    return {
      backgroundColor: isHovered(id) ? "#8d41ac" : "#9b50ba",
    };
  };

  //! Handling the sidebar collapsed state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1393) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Sidebar
      width="300px"
      collapsed={collapsed}
      collapsedWidth="110px"
      backgroundColor="#9b50ba"
      style={{ border: "none", color: "white" }}
      className="adminSidebar p-3 col-md-3"
    >
      <Menu
        menuItemStyles={{
          subMenuContent: {
            backgroundColor: "#9b50ba",
          },
        }}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: "22px 0px",
        }}
      >
        {/* //! Menu for Events */}
        <SubMenu
          className="subMenu"
          label="Events"
          icon={<BsFillCalendar2EventFill />}
          style={getStyle(1)}
          onMouseEnter={() => handleMouseEnter(1)}
        >
          <MenuItem
            component={
              <Link to={"/dashboard/admin/events/get-event-registrations"} />
            }
            style={getStyle(2)}
            onMouseEnter={() => handleMouseEnter(2)}
          >
            Get Event Registrations
          </MenuItem>

          <MenuItem
            style={getStyle(3)}
            onMouseEnter={() => handleMouseEnter(3)}
          >
            Create Event
          </MenuItem>

          <MenuItem
            style={getStyle(4)}
            onMouseEnter={() => handleMouseEnter(4)}
          >
            Get All Events
          </MenuItem>
        </SubMenu>

        {/* //! Menu for Services */}
        <SubMenu
          className="subMenu"
          label="Services"
          icon={<MdMiscellaneousServices size={"24px"} />}
          style={getStyle(5)}
          onMouseEnter={() => handleMouseEnter(5)}
        >
          <MenuItem
            style={getStyle(6)}
            onMouseEnter={() => handleMouseEnter(6)}
          >
            Get Service Enquiries
          </MenuItem>

          <MenuItem
            style={getStyle(7)}
            onMouseEnter={() => handleMouseEnter(7)}
          >
            Create Services
          </MenuItem>

          <MenuItem
            style={getStyle(8)}
            onMouseEnter={() => handleMouseEnter(8)}
          >
            Get All Services
          </MenuItem>
        </SubMenu>

        {/* //! Menu for Courses */}
        <SubMenu
          className="subMenu"
          label="Courses"
          icon={<MDBIcon fas icon="book" />}
          style={getStyle(9)}
          onMouseEnter={() => handleMouseEnter(9)}
        >
          <MenuItem
            style={getStyle(10)}
            onMouseEnter={() => handleMouseEnter(10)}
          >
            Get Course Registrations
          </MenuItem>

          <MenuItem
            style={getStyle(11)}
            onMouseEnter={() => handleMouseEnter(11)}
          >
            Create Courses
          </MenuItem>

          <MenuItem
            style={getStyle(12)}
            onMouseEnter={() => handleMouseEnter(12)}
          >
            Get All Courses
          </MenuItem>
        </SubMenu>

        {/* //! Menu for Users */}
        <SubMenu
          className="subMenu"
          label="Users"
          icon={<MDBIcon fas icon="user" />}
          style={getStyle(13)}
          onMouseEnter={() => handleMouseEnter(13)}
        >
          <MenuItem
            style={getStyle(14)}
            onMouseEnter={() => handleMouseEnter(14)}
          >
            Get All Users
          </MenuItem>
        </SubMenu>

        {/* //! Menu for Contact Enquiry */}
        <MenuItem
          component={<Link to="" />}
          style={getStyle(15)}
          onMouseEnter={() => handleMouseEnter(15)}
          icon={<BiSolidContact size={"20px"} />}
        >
          Contacts
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default AdminMenu;
