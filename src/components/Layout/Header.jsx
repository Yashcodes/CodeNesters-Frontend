import React, { useState } from "react";
import brandLogo from "../../assets/images/brandLogo.png";
import { Link } from "react-router-dom";
import "../../components/Layout/styles/Header.css";
import { useAuth } from "../../context/Auth";
import Offcanvas from "react-bootstrap/Offcanvas";

import profile from "../../assets/images/Profile/profile_photo.jpg";
import { MDBIcon } from "mdb-react-ui-kit";
import toast from "react-hot-toast";
// import { useFirebase } from "../../context/Firebase";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [show, setShow] = useState(false);

  // const firebase = useFirebase();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = async () => {
    setAuth({
      ...auth,
      user: null,
      authToken: "",
    });

    localStorage.removeItem("auth");

    toast.success("Logged Out Successfully");
  };

  return (
    <>
      {/* <header>
        <nav>
          <section className="top-nav container-fluid">
            <div
              className={`${
                window.innerWidth >= 325
                  ? "container nav-container"
                  : "container-fluid nav-container"
              }`}
            >
              <div className="navbar-brand">
                <img src={brandLogo} className="brand-logo img-fluid" alt="" />
                <span className="fs-2 brand-text">CodeNesters</span>
              </div>

              <input id="menu-toggle" type="checkbox" />
              <label className="menu-button-container" htmlFor="menu-toggle">
                <div className="menu-button"></div>
              </label>

              <ul className="menu fs-5">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>

                <li>
                  <Link to={"/about"}>About</Link>
                </li>

                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>

                <li>
                  {auth?.user ? (
                    <img
                      src={profile}
                      alt=""
                      className="user-profile"
                      onClick={handleShow}
                    />
                  ) : (
                    <button className={`btn register-btn text-white fs-6`}>
                      <Link to={"/register"} className="text-white">
                        Register
                      </Link>
                    </button>
                  )}
                </li>
              </ul>
            </div>

            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <div className="sidebar-profile d-flex align-items-center gap-2">
                    <img src={profile} alt="" className="user-profile" />

                    <div className="profile-info p-0">
                      <p className="profile-name m-0"> {auth?.user?.name} </p>
                      <p className="profile-email m-0"> {auth?.user?.email} </p>
                    </div>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="offCanvasBody">
                  <ul>
                    <li className="sidebar-list">
                      <MDBIcon fas icon="user" />
                      <Link to={"/dashboard/user/profile"}>Profile</Link>
                    </li>
                    <li className="sidebar-list">
                      <MDBIcon fas icon="book" />
                      <Link to={"/dashboard/user/courses"}>My Courses</Link>
                    </li>
                    <li className="sidebar-list">
                      <MDBIcon fas icon="cog" />
                      <Link to={"/dashboard/user/settings"}>Settings</Link>
                    </li>
                    <hr />
                    <li>
                      <button className="btn sidebar-btn fs-6">
                        <Link
                          to={"/login"}
                          className="text-white d-flex flex-row align-items-center gap-2"
                          onClick={handleLogout}
                        >
                          Sign Out <MDBIcon fas icon="sign-out-alt" />
                        </Link>
                      </button>
                    </li>
                  </ul>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </section>
        </nav>
      </header> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid m-1">
          <Link className="navbar-brand fs-2 fw-bold text-white" to={"/"}>
            <img src={brandLogo} alt="" />
            CodeNesters
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-1">
                <Link to={"/"} className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  to={"/about"}
                  className="nav-link active"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  to={"/contact"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Careers
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item">Courses</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Blogs</Link>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item">Something else here</Link>
                  </li> */}
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

            {auth?.user ? (
              <img
                src={profile}
                alt=""
                className="user-profile"
                onClick={handleShow}
              />
            ) : (
              <button className={`btn register-btn text-white fs-6`}>
                <Link to={"/register"} className="text-white">
                  Register
                </Link>
              </button>
            )}

            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <div className="sidebar-profile d-flex align-items-center gap-2">
                    <img src={profile} alt="" className="user-profile" />

                    <div className="profile-info p-0">
                      <p className="profile-name m-0"> {auth?.user?.name} </p>
                      <p className="profile-email m-0"> {auth?.user?.email} </p>
                    </div>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="offCanvasBody">
                  <ul>
                    <li className="sidebar-list">
                      <MDBIcon fas icon="user" />
                      <Link to={"/dashboard/user/profile"}>Profile</Link>
                    </li>
                    <li className="sidebar-list">
                      <MDBIcon fas icon="book" />
                      <Link to={"/dashboard/user/courses"}>My Courses</Link>
                    </li>
                    <li className="sidebar-list">
                      <MDBIcon fas icon="cog" />
                      <Link to={"/dashboard/user/settings"}>Settings</Link>
                    </li>
                    <hr />
                    <li>
                      <button className="btn sidebar-btn fs-6">
                        <Link
                          to={"/login"}
                          className="text-white d-flex flex-row align-items-center gap-2"
                          onClick={handleLogout}
                        >
                          Sign Out <MDBIcon fas icon="sign-out-alt" />
                        </Link>
                      </button>
                    </li>
                  </ul>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
