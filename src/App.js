
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import econsensusLogo from './images/Econsensus.png'; // Adjust the path
import "./App.css"
import photo1 from "./images/econmetrics.jpg";
import photo2 from "./images/bitcoin.jpg";
import photo3 from "./images/dev.jpg";
import blogImage from './images/stock.png'; // Replace with the actual path to your image
import wocktanImage from './images/wocktan.jpg'; // Replace with the actual path to your image

const About = () => {
  return (
    <>
    
      <section>
  <h2>Empowering Decisions</h2>

<p>
    Our Econometrics department is led by seasoned economists who specialize in model formulation and empirical studies.
    Our models adhere to the fundamental econometric assumptions of homoscedasticity, linearity, independence of errors, and normality of errors.
</p>
<p>
Econsensus integrates blockchain for transformative business solutions, reducing costs and fostering trust. We guide businesses to exploit blockchain synergies, gaining a distinctive edge in diverse scenarios. </p>

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
  <h2>Econsensus helps with..</h2>
  <br/>
 

  <h3>Elevated Decision-Making through Data-Driven Insights</h3>
  <p>
    Harness the power of advanced data collection, survey creation,econometric models, and comprehensive economic reports to help you make the most informed decison everytime.
  </p>

  <h3>Blockchain Solutions Tailored for Your Business</h3>
  <p>
    Explore the potential of blockchain with our feasibility and use case studies. Identify specific applications for your business, and let our experts develop custom DAOs, DApps, custom tokens, or NFTs. Leverage the transformative capabilities of smart contracts and blockchain technology to enhance operational efficiency and security.
  </p>

  <h3>Holistic Business Development Services</h3>
  <p>
    Propel your business forward with our comprehensive web development, SEO, social media management (SMM), and content marketing solutions. From building a strong online presence to executing successful marketing campaigns, our business development offerings are designed to enhance your brand visibility and drive growth.
  </p>

  <p>
Our services are designed to empower your company, fostering innovation, efficiency, and sustained success in today's dynamic market.
    Please feel free to complete the form and a representative will be with you shortly.
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
        <button  className = "btn btn-warning" type="submit" id="btn">
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
    <div className="home-content">
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




const Blog = () => {
  return (
    <>
    <img src={blogImage} alt="Blog Cover" className="blog-cover-image" style={{ height: "200px", width: "auto" }}  />
      <h1>Unveiling Market Dynamics: Predictive Insights from Financial Regression Analysis</h1>
      <h2>Navigating Trading Strategies with Statistical Precision</h2>

      <p>In the fast-paced world of financial markets, every tick and fluctuation in prices can have a profound impact on trading decisions. Traders and investors are constantly on the lookout for tools that can provide meaningful insights into market dynamics, allowing them to make informed decisions.</p>

      <p>In this blog post, we delve into the results of a comprehensive regression analysis conducted on financial data, exploring the relationships between various market indicators and the closing price. The study aims to unlock predictive insights that could guide trading strategies and risk management.</p>

      <h3>Understanding the Coefficients: Keys to Market Behavior</h3>

      <p>The regression analysis focused on four key variables: Open, High, Low, and Volume. The coefficients associated with these variables shed light on how changes in each can influence the closing price. Let's unravel the findings:</p>

      <pre>
        {`Call:
lm(formula = Close ~ Open + High + Low + Volume, data = facebook)

Residuals:
     Min       1Q   Median       3Q      Max 
-10.6174  -0.3279  -0.0317   0.3014   7.5888 

Coefficients:
              Estimate Std. Error t value Pr(>|t|)    
(Intercept) -7.026e-02  5.669e-02  -1.239    0.215    
Open        -4.052e-01  2.299e-02 -17.622   <2e-16 ***
High         6.522e-01  2.057e-02  31.705   <2e-16 ***
Low          7.551e-01  1.954e-02  38.634   <2e-16 ***
Volume       9.695e-10  7.129e-10   1.360    0.174    
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 0.7163 on 1467 degrees of freedom
Multiple R-squared:  0.9998,	Adjusted R-squared:  0.9998 
F-statistic: 1.688e+06 on 4 and 1467 DF,  p-value: < 2.2e-16`}
      </pre>

      <h3>Open Price (Negative Impact):</h3>
      <p>The negative coefficient for the Open price suggests that an increase in the opening price is associated with a decrease in the closing price. This intriguing dynamic invites further exploration. Traders may need to carefully evaluate the implications of early market movements on the day's close.</p>

      <h3>High and Low Prices (Positive Impact):</h3>
      <p>The coefficients for High and Low prices indicate a positive impact on the closing price. A rise in either the highest or lowest observed price during a trading session corresponds to an increase in the closing price. Traders may find potential opportunities in understanding and capitalizing on these positive correlations.</p>

      <h3>Volume (Minimal Impact):</h3>
      <p>Interestingly, the Volume variable shows a coefficient with a very small magnitude. This implies that changes in trading volume have a minimal impact on the closing price. While not a significant driver in this model, volume remains a crucial metric for other aspects of market analysis.</p>

      {/* Additional sections... */}

      <h3>Trading Strategies and Risk Management: A Statistical Compass</h3>
      <p>Armed with these insights, traders can develop and fine-tune their strategies:</p>

      <p><strong>Contrarian Approach to Opening Prices:</strong> The negative impact of the opening price invites a contrarian approach. Traders might explore opportunities to act against the initial market sentiment, strategically leveraging the observed negative relationship.</p>

      <p><strong>High-Low Range Trading:</strong> The positive impact of both high and low prices suggests potential for range-based trading strategies. Traders could consider strategies that take advantage of price movements within the high-low range during a trading session.</p>

      <p><strong>Volume as a Secondary Indicator:</strong> While volume may not be a primary driver of closing prices in this model, it remains a vital secondary indicator. Traders can use volume to assess market participation, liquidity, and potential volatility.</p>

      <h3>Model Validation and Cautionary Notes</h3>
      <p>By scrutinizing both the coefficients and the homoskedasticity check, we ensure that our model doesn't succumb to biases stemming from unequal variances. This step enhances the robustness of our predictions and fortifies the foundation of informed trading strategies.</p>

      <h3>Conclusion: A Holistic Approach to Market Insight</h3>
      <p>Incorporating the homoskedasticity check into our model validation process adds an additional layer of confidence in the reliability of our predictive insights. Traders are encouraged to not only leverage the statistical prowess of the model but also to critically assess its diagnostic results to make well-informed decisions in the dynamic realm of financial markets.</p>

      <p>Happy trading!</p>
    </>
  );
};

const Work = () => {
  return (
    <div className="work-container">
      <img src={wocktanImage} alt="Blog Cover" className="blog-cover-image" />
      <h1>Wocktan: Empowering Language Learning</h1>

      <p>
        Welcome to Wocktan, a cutting-edge platform designed to revolutionize language learning! At Wocktan, we believe in making language acquisition an immersive, engaging, and personalized experience for learners worldwide.
      </p>

      <h3>Platform Overview:</h3>
      <p>
        Wocktan, available at <a href="https://wocktan.com" target="_blank" rel="noopener noreferrer">wocktan.com</a>, provides a comprehensive solution for individuals eager to learn new languages. Our platform is built on the principles of interactivity, accessibility, and effective learning methodologies.
      </p>

      <h3>Key Features:</h3>
      <ul>
        <li><strong>Interactive Lessons:</strong> Dive into dynamic and interactive lessons crafted to enhance language skills.</li>
        <li><strong>Video Content:</strong> Immerse yourself in authentic language experiences through our rich library of video content.</li>
        <li><strong>SEO Optimization:</strong> We've implemented robust SEO strategies to ensure Wocktan is easily discoverable by language enthusiasts worldwide.</li>
        <li><strong>Code Mastery:</strong> Behind the scenes, our team of skilled developers has meticulously coded and developed Wocktan to deliver a seamless learning experience.</li>
      </ul>

      <h3>Video Production:</h3>
      <p>
        Our dedicated team has produced high-quality video content, ranging from instructional materials to captivating language immersion experiences. Every video is thoughtfully curated to provide learners with an authentic and enjoyable learning journey.
      </p>

      <h3>Get Started:</h3>
      <p>
        Ready to embark on your language-learning adventure? Visit <a href="https://wocktan.com" target="_blank" rel="noopener noreferrer">wocktan.com</a> and start exploring the diverse world of languages with Wocktan!
      </p>
    </div>
  );
};




const Nav = () => {
  return (<div >

 
    <nav  style={{ marginRight: '10px', justifyContent:"space-between" }} className="navbar navbar-expand-lg navbar-light bg-light">
     
         <Link to="/">
        <img src={econsensusLogo} alt="smasg" className="logo" />
      </Link>
     
    
     <div>

    

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About us
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
             OurWork
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/work" className="dropdown-item">
                Works
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/blog" className="dropdown-item">
                Blog
              </Link>
              
            
            </div>
          </li>
          <li className="nav-item">
            <Link to="/help" className="nav-link">
              How we can help
            </Link>
          </li>
        </ul>
      </div>
       </div>
    </nav> 
    </div>
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
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/work" element={<Work/>}/>
        
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
