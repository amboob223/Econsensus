import React from "react";
import econsensusLogo from '../images/Econsensus.png';
import CarouselFadeExample from "./ExampleCarouselImage";

const Home = () => {
  return (
    <div className="home-content">
      <img src={econsensusLogo} alt="Econsensus Logo" className="logo" />
      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <td>
                <div className="content">
                  <p style={{ fontSize: '3em' }}>
                    Your in-house economist and software developer.
                  </p>
                  <p>
                    Specializing in Econometric services, blockchain-enhanced processes, and comprehensive web development, Econsensus is where innovation meets expertise.
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="carousel-container">
                  <CarouselFadeExample />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
