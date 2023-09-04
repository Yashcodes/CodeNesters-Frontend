import React from "react";
import brandLogo from "../../assets/images/brandLogo.png";
import { Link, useNavigate } from "react-router-dom";

import "../../components/Layout/styles/Header.css";
import "../../scripts/HeroSection.js";

const Header = () => {
  const navigate = useNavigate();

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
              <div className="navbar-brand" onClick={() => navigate("/")}>
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
