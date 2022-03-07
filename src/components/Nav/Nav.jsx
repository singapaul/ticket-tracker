import React from "react";
import "./Nav.scss";


const Nav = () => {
  return (
    <div className="nav bass bass-1 concrete-wall">
      <a href="www.google.com" className="nav__icon">
        TRCKR
      </a>
      <ul className="nav__links">
        <a className="nav__links-link" href="">
          tckts
        </a>
        <a className="nav__links-link" href="">
          nlytics
        </a>
      </ul>
    </div>
  );
};

export default Nav;

