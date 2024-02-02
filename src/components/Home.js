import {React,useState} from "react";
import photo1 from "../images/econmetrics.jpg";
import photo2 from "../images/bitcoin.jpg";
import photo3 from "../images/dev.jpg";
import {  Link } from "react-router-dom";
import econsensusLogo from '../images/Econsensus.png'; // Adjust the path





const Scroller = () => {

  const photos = [
    photo1,photo2,photo3
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    console.log(currentIndex)
    console.log(photos)
  };
  return (
    <div>
      <Link to="/help"> <img src={photos[currentIndex]} alt={"hh"} style={{ width: "310px", height: "310px" }} /></Link>
      <div>
        <button className="btn btn-warning" onClick={handlePrevClick}>Previous</button>
        <button  className="btn btn-warning" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};




 

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
           <Scroller/>
          </td>
        </tr>
      </table>
    </div>
  );
};




export default Home;