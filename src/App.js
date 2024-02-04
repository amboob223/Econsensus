import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Help from "./components/Help";
import Home from "./components/Home";
import Blogpage from "./components/Blogpage";
import Workpage from "./components/Workpage";

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
            <Route path="/blogpage" element={<Blogpage />} />
            <Route path="/workpage" element={<Workpage />} />
          </Routes>
        </Router>
      </header>

      
        <Contacts />
      
    </div>
  );
}

export default App;