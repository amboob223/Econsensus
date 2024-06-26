import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Help from "./components/Help";
import Home from "./components/Home";
import Blogpage from "./components/Blogpage";
import Workpage from "./components/Workpage";
import data from "./data/blogData"
import Blog from "./components/Blog"

import Success from "./components/Success"
import Cancel from "./components/Cancel"

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





const App = () => {
  return (
    <div>
      <header>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/blog" element={<Blog data ={data[0]}/>}/>
            <Route path="/blogpage" element={<Blogpage />} />
            <Route path="/workpage" element={<Workpage />} />
             <Route path="/success" element={<Success/>}/>
            <Route path="/cancel" element={<Cancel/>}/>
        
          </Routes>
        </Router>
      </header>

      <footer>
          <Contacts />
      </footer>
      
      
    </div>
  );
}

export default App;
