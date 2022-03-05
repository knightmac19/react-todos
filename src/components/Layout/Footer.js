import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-layout">
        <div className="footer-content">
          <span>
            &copy; Patrick Dunn 2022{" "}
            <a
              href="https://github.com/knightmac19/react-todos"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Github</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
