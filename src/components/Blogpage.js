import Bone from "./Bone";
import mogData from "../data/mogData";

const Blogpage = () => {
  return (
    < div style={{"margin-top":"3%"}}>
<h1>Blogs</h1> 
    <div style={{"margin-top":"3%"}}>
       <Bone procs={mogData[0]} />
       //this is where we make blogs here 
    </div>
     
    </div>
  );
}

export default Blogpage;