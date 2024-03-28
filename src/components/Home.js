import {React} from "react";

import econsensusLogo from '../images/Econsensus.png'; // Adjust the path
import CarouselFadeExample from "./ExampleCarouselImage"



 

const Home = () => {
  return (
    <div style={{ marginTop: "4%", marginBottom: "4%" }} className="home-content">
      <img src={econsensusLogo} alt="osh"/>
      <table>
        <tbody>
          <tr>
            <td style={{ width: "50%" }}>
              <p style={{ fontSize: '3em' }}>
                Your in-house economist and software developer.
              </p>
              <p>
                Specializing in Econometric services, blockchain-enhanced processes, and comprehensive web development, Econsensus is where innovation meets expertise.
              </p>
            </td>
            <td style={{ width: "50%", verticalAlign: "top" }}>
              <CarouselFadeExample/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};





export default Home;