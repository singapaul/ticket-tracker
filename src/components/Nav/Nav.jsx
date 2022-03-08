import React from "react";
import "./Nav.scss";


const Nav = () => {
  return (
    <div className="nav">
      <a href="www.google.com" className="nav__icon">
        Tracker
      </a>
      <ul className="nav__links">
        <a className="nav__links-link" href="">
          tickets
        </a>
        <a className="nav__links-link" href="">
          Analytics
        </a>
      </ul>
    </div>
  );
};

export default Nav;

