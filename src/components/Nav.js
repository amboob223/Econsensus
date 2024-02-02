import React from "react";
import {Link} from "react-router-dom";
import econsensusLogo from "../images/Econsensus.png"

const Nav = () => {
  return (<div >

 
    <nav  style={{ marginRight: '10px', justifyContent:"space-between" }} className="navbar navbar-expand-lg navbar-light bg-light">
     
         <Link to="/">
        <img src={econsensusLogo} alt="smasg" className="logo" />
      </Link>
     
    
     <div>

    

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
             OurWork
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
       </div>
    </nav> 
    </div>
  );
};

export default Nav;