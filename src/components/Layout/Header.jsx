import React from "react";
import brandLogo from "../../assets/images/brandLogo.png";
import { Link } from "react-router-dom";

import "../../components/Layout/styles/Header.css";

const Header = () => {
  return (
    <>
      <header>
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
              </ul>
            </div>
          </section>
        </nav>
      </header>
    </>
  );
};

export default Header;
