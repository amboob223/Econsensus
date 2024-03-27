import {React} from "react";

import econsensusLogo from '../images/Econsensus.png'; // Adjust the path
import CarouselFadeExample from "./ExampleCarouselImage"



 

const Home = () => {
  return (
    <div  style={{"margin-top":"4%", "margin-bottom":"4%"}} className="home-content">
      <img src={econsensusLogo} alt="osh"/>
      <table>
        <tr>
          <td>
            <p style={{ fontSize: '3em' }}>
             Your in-house economist and software developer.
            </p>
             <p>
              Specializing in Econometric services, blockchain-enhanced processes, and comprehensive web development, Econsensus is where innovation meets expertise.
            </p>
          </td>
          <td>
           
            <CarouselFadeExample/>
          </td>
        </tr>
      </table>
    </div>
  );
};




export default Home;