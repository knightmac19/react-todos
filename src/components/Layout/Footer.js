import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer-layout">
        <div className="footer-content ">
          <p>
            &copy; Patrick Dunn 2022{" "}
            <a
              href="https://github.com/knightmac19/react-todos"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="fa-lg icon" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
