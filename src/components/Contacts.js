import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Contacts = () => {
  return (
    <div>
      <ul className="mog">
        <div>©Econsensus 2024</div>
        <li>
          <Link to="https://twitter.com/Econsensus1">
            Twitter
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/amboob223/">
            Linkedin
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </li>
        <li>
          <Link to="https://www.tiktok.com/@econsensus">
            Tiktok
            <i className="fa-brands fa-tiktok"></i>
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/econsensus1/">
            Instagram
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
