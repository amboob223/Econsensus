
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import econsensusLogo from './Econsensus.png'; // Adjust the path
import "./App.css"

const About = () => {
  return (
    <>
    
      <section>
  <h2>Revolutionizing Businesses at Econsensus</h2>

  <p>
    At Econsensus, we pride ourselves on being revolutionary. We employ proven methodologies while seamlessly integrating them with the future, ensuring that businesses stay at the forefront of new technology. Our approach is a harmonious blend of time-tested practices and cutting-edge innovation that consistently delivers results.
  </p>

<p>
    Led by seasoned economists with specialized proficiency in model formulation and empirical studies, our Econometrics division is dedicated to leveraging these studies. We align them with current trends to develop a comprehensive understanding of businesses and their respective environments. This strategic insight equips our clients with the ability to make optimal decisions consistently. Our models adhere to the fundamental econometric assumptions of homoscedasticity, linearity, independence of errors, and normality of errors.
</p>
<p>
    The integration of blockchain technology constitutes a central tenet of our organizational mission. We steadfastly affirm that blockchain stands as a transformative instrument for businesses, presenting solutions to diminish transaction costs, verification expenses, and cultivating trust within communities. Econsensus is committed to realizing the complete potential of blockchain, positioning it as a competitive advantage for our clients across diverse scenarios.
</p>
  <p>
    The blockchain holds numerous underutilized use cases, and Econsensus is your guide to exploit all the synergies it offers for your business. This strategic utilization of blockchain becomes a distinctive advantage in most business scenarios, positioning you ahead of the curve.
  </p>

  <p>
    Complementing our services is a robust digital marketing team that excels in SEO, content marketing, SMM, and mobile development. We assist businesses in expanding their reach, boosting sales, and efficiently engaging with both existing customers and potential clients.
  </p>
</section>

    </>
  );
};


const Help = () => {
  const [formData,setFormData] = useState({
    name:"",
    phone:"",
    email:"",
    industry:"",
    bproblem:""
  });

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }; // this is makeing an function called handle input change that takes an
     // event parameter and puts it target in a variaobject hat takes and then
     // in the setformdata we give it an object it uses the spread operatorto 
     //repeat the value of the formdata and we erapolate from the varible the name as the key 
     // 



  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/help",{
        method:"POST",
        headers:{"Content-type":"Application/json"},
        body:JSON.stringify(formData)
      })
        if (response.ok) {
      // Handle success, e.g., show a success message or redirect
      console.log('Form submitted successfully');
      alert("we will get back with you shortly")
    } else {
      // Handle errors, e.g., show an error message
      console.error('Form submission failed');
    }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setFormData({
      name:"",
    phone:"",
    email:"",
    industry:"",
    bproblem:""
    })
    
    
  };

  return <>
  
  <div className="help-container">

  
  
    <section>
  <h2>Unlocking Growth and Innovation with Econsensus Services</h2>
 
  <p>
    In the rapidly evolving landscape of modern business, partnering with Econsensus can provide your company with a competitive edge and unlock various growth opportunities. Our tailored services at the intersection of blockchain and econometrics offer unique advantages:
  </p>

  <h3>Elevated Decision-Making through Data-Driven Insights</h3>
  <p>
    Harness the power of advanced econometric models, including regression, multivariate regression, cross-section, and time series analysis. Our adept team tailors micro and macro reports, providing your management with data-driven insights for informed decision-making.
  </p>

  <h3>Blockchain Solutions Tailored for Your Business</h3>
  <p>
    Explore the potential of blockchain with our feasibility and use case studies. Identify specific applications for your business, and let our experts develop custom DAOs, DApps, tokens, or NFTs. Leverage the transformative capabilities of smart contracts and blockchain technology to enhance operational efficiency and security.
  </p>

  <h3>Holistic Business Development Services</h3>
  <p>
    Propel your business forward with our comprehensive web development, SEO, social media management (SMM), and content marketing solutions. From building a strong online presence to executing successful marketing campaigns, our business development offerings are designed to enhance your brand visibility and drive growth.
  </p>

  <p>
    At Econsensus, we pride ourselves on bridging the gap between traditional business practices and cutting-edge technologies. Our services are designed to empower your company, fostering innovation, efficiency, and sustained success in today's dynamic market.
  </p>
</section>

    
       <form action="http://localhost:5000:/help" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            id="phone"
             className="form-control"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
             className="form-control"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="industry">Industry:</label>
          <input
            type="text"
            name="industry"
            id="industry"
             className="form-control"
            value={formData.industry}
            onChange={handleInputChange}
            placeholder="Industry"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bproblem">Business Problem:</label>
          <textarea
            type="text"
            name="bproblem"
            id="bproblem"
            value={formData.bproblem}
             className="form-control"
            onChange={handleInputChange}
            placeholder="Business Problem"
            rows={4}
          />
        </div>
        <button type="submit" id="btn">
          Submit
        </button>
      </form>
      </div>
    </>

};

const Contacts = () => {
  return <><ul>
        <li>Twitter</li>
        <li>Linkedin</li>
        <li>Tiktok</li>
    </ul></>;
};

//im about to make a component for the scorller that will show some stock phitos and they 
//will describe some of the services and things we have done 

const Scroller = () => {
  const photos = [
  
    // Add more image URLs as needed
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
      <img src={photos[currentIndex]} alt={"hh"} />

      <div>
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};




 

const Home = () => {
  return (
    <div className="home-content">
      <img src={econsensusLogo} alt="osh"/>
      <table>
        <tr>
          <td>
            <p style={{ fontSize: '3em' }}>
             Your in-house econometrician and software developer.
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
const Nav = () => {
  return (
    <nav>
     <Link to="/"><img   src={econsensusLogo} alt="smasg" className="logo"/> </Link> 
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/help">How we can help</Link>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <div>

      <header>
          <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        
        </Routes>
      </Router>
      </header>
      <footer>
        <Contacts/>
      </footer>
    
    </div>
  );
}

export default App;