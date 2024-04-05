import Bone from "./Bone";
import mogData from "../data/mogData";
import React from "react";
const Blogpage = () => {
  return (
    < div style={{"margin-top":"3%",  "min-height": "80vh"}}>
<h1>Blogs</h1> 
    <div style={{"margin-top":"3%"}}>
       <Bone procs={mogData[0]} />
     
    </div>
     
    </div>
  );
}

export default Blogpage;