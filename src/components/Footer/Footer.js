import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://milansharma.site" target="__blank">
          Milan Sharma
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://www.instagram.com/milansharma_449/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/milan-sharma-3b9985166/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/milan.sharma.980315/" target="__blank">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://twitter.com/milansharma449" target="__blank">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="https://stackoverflow.com/users/20611664/milan-sharma" target="__blank">
          <i className="fab fa-stack-overflow fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
