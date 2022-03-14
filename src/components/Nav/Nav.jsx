import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      {/* space */}
      <a href="www.google.com" className="nav__icon">
        <span class="split-text" data-text="Tracker">
          Tracker
        </span>
      </a>

      <ul className="nav__links">
        <a className="nav__links-link" href="www">
          <span class="split-text" data-text="tickets">
            tickets
          </span>
        </a>
        <a className="nav__links-link" href="www">
          <span class="split-text" data-text="analytics">
            analytics
          </span>
        </a>
      </ul>
    </div>
  );
};

export default Nav;
