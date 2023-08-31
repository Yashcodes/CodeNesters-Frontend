import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <section class="top-nav container-fluid">
            <div className="container nav-container">
              <div className="navbar-brand">
                <img src="" className="brand-logo" alt="" />
                <span className="fs-2 brand-text">CodeNesters</span>
              </div>

              <input id="menu-toggle" type="checkbox" />
              <label class="menu-button-container" for="menu-toggle">
                <div class="menu-button"></div>
              </label>

              <ul class="menu fs-5">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </section>
        </nav>
      </header>
    </>
  );
};

export default Header;
