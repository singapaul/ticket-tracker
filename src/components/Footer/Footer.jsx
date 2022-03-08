import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__Greeting">Made by Paul Hardman 2022</p>
      <ul className="footer__links">
        <a className="footer__links-link" href="">
          Github
        </a>
        <a className="footer__links-link" href="">
          LinkedIn
        </a>
      </ul>
    </div>
  );
};

export default Footer;
