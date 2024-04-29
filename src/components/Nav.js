import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import econsensusLogo from "../images/Econsensus.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Set initial state to false

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMenuOpen(true); // Close the menu if screen size is small
      } else {
        setIsMenuOpen(false); // Open the menu if screen size is large
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <nav
        id="whoop"
        style={{ marginRight: '10px', justifyContent: "space-between" }}
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <Link to="/">
          <img src={econsensusLogo} alt="econsensus" className="logo" />
        </Link>

        {/* Show or hide the menu icon based on the state */}
        {isMenuOpen ? null : (
          <div  id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Our Work
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/workpage" className="dropdown-item">
                    Works
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/blogpage" className="dropdown-item">
                    Blog
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/help" className="nav-link">
                  How we can help
                </Link>
              </li>
            </ul>
          </div>
        )}
        
        {/* Font Awesome icon to toggle menu, visible only during media query */}
        <FontAwesomeIcon icon={faBars} className="navbar-toggler" onClick={toggleMenu} />
      </nav>
    </div>
  );
};

export default Nav;
