
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import econsensusLogo from './Econsensus.png'; // Adjust the path
import "./App.css"

const About = () => {
  return (
    <>
    <section>
  <h1>Abdul Mboob - CEO and Senior Blockchain Developer</h1>

  <h2>About Me</h2>
  <p>
    Hello, I'm Abdul Mboob, the CEO and Senior Blockchain Developer at Econsensus. I hold a Master's in Economics from Georgia State University and bring over 10 years of experience in R and econometrics. Additionally, I have over 3 years of expertise in web development and blockchain solutions, working with technologies like React, Node.js, JavaScript, and Solidity.
  </p>

  <h2>Econsensus</h2>
  <p>
    Welcome to Econsensus, where we are on a mission to revolutionize businesses by merging the old science of economics with the new science of blockchain. Our approach is rooted in proven methodologies while seamlessly integrating cutting-edge innovation, ensuring that businesses stay at the forefront of technology.
  </p>

  <p>
    At Econsensus, we leverage econometrics, led by seasoned economists, to formulate models and conduct empirical studies. This strategic insight empowers our clients to make optimal choices in an ever-evolving business landscape.
  </p>

  <p>
    Embracing blockchain technology is at the core of our mission. We believe that blockchain is a transformative tool, offering solutions to reduce transaction and verification costs while fostering trust within communities. Econsensus is dedicated to unlocking the full potential of blockchain, turning it into a competitive advantage for our clients.
  </p>

  <p>
    Our goal is to bridge the gap between traditional and modern approaches, using the insights from econometrics and the innovative power of blockchain to arrive at sound consensuses. We aim to guide businesses in making the best decisions by combining the wisdom of the old with the efficiency of the new.
  </p>

  <p>
    Complementing our services is a robust digital marketing team excelling in SEO, content marketing, SMM, and mobile development. We assist businesses in expanding their reach, boosting sales, and efficiently engaging with both existing customers and potential clients.
  </p>
</section>


    </>
  );
};

const Service = () => {
  return <> <h1>
    this is the what we can do
    </h1>
  <section>
  Elevate Decision-Making with Econometric Analysis: Harness the power of
  econometric models, including regression, multivariate regression,
  cross-section, and time series analysis, to address critical business
  queries and forecast potential risks. Our adept team also tailors micro
  and macro reports, providing data-driven insights customized for
  effective management decision-making.
</section>
<br />
<section>
  Blockchain Solutions Tailored for Your Business: Explore the potential
  of blockchain with our feasibility and use case studies, identifying
  specific applications for your business. Following the study, our
  experts can develop custom DAOs, DApps, tokens, or NFTs, enabling your
  business to leverage the transformative capabilities of smart contracts
  and blockchain technology.
</section>
<br />
<section>
  Holistic Business Development Services: Propel your business forward
  with our comprehensive web development, SEO, social media management
  (SMM), and content marketing solutions. From building a strong online
  presence to executing successful marketing campaigns, our business
  development offerings are designed to enhance your brand visibility and
  drive growth.
</section>
  </>;
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
  <h1>
      Econsensus helps by ...
    </h1>
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
        <li>twitter</li>
        <li>linkedin</li>
        <li>Tiktok</li>
    </ul></>;
};

const Home = () => {
  return (
    <>
      <h1>Econsensus</h1>
      <p>
        Welcome to Econsensus, your boutique consultancy bridging blockchain and
        econometrics. Our unique approach combines these realms to deliver
        tailored solutions. Specializing in Econometric services,
        blockchain-enhanced business processes, DApp development, and
        comprehensive content marketing, Econsensus is where innovation meets
        expertise.
      </p>
    </>
  );
};

const Nav = () => {
  return (
    <nav>
      <img   src={econsensusLogo} alt="smasg" className="logo"/>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/services">What we do</Link>
        </li>
        <li>
          <Link to="/help">How we can help</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;