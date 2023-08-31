import React from "react";

const Header = () => {
  return (
    <div>
      <section class="top-nav container-fluid">
        <div className="container nav-container">
          <div>CodeNesters</div>
          <input id="menu-toggle" type="checkbox" />
          <label class="menu-button-container" for="menu-toggle">
            <div class="menu-button"></div>
          </label>
          <ul class="menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Header;
