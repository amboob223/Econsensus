import {React} from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../images/Econsensus.png"

function Success(){
    
    return(
            <div>
<div>   
  
     </div>

                <img src={logo} alt="whoop" style={{width:"300px"}}/>
            <div>
                <Link to="/">Home</Link>
                <h1>
                    You have sucessfully paid.
                    all you have to  do now is show up at the Time on Time
                </h1>
            </div>
    </div>)
}

export default Success;
