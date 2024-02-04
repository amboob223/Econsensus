import React from "react";
import "../App.css";

const Contacts = () => {
  return (
    <div>
      <ul className="mog">
        <div>©Econsensus 2024</div>
        <a href="https://twitter.com/Econsensus1">
          <li>
            Twitter <i className="fa-brands fa-instagram"></i>
          </li>
        </a>
        <a href="https://www.linkedin.com/in/amboob223/">
          <li>
            LinkedIn <i className="fa-brands fa-linkedin"></i>
          </li>
        </a>
        <a href="https://www.tiktok.com/@econsensus">
          <li>
            Tiktok <i className="fa-brands fa-tiktok"></i>
          </li>
        </a>
        <a href="https://www.instagram.com/econsensus1/">
          <li>
            Instagram <i className="fa-brands fa-instagram"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Contacts;
