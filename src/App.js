
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav.js";
import blogImage from './images/stock.png'; // Replace with the actual path to your image
import wocktanImage from './images/wocktan.jpg'; // Replace with the actual path to your image
import Contacts from "./components/Contacts";
import About from "./components/About";
import Help from "./components/Help";
import Home from "./components/Home";








//im about to make a component for the scorller that will show some stock phitos and they 
//will describe some of the services and things we have done 


const blogData = [{
  title: "Unveiling Market Dynamics: Predictive Insights from Financial Regression Analysis",
  subtitle: "Navigating Trading Strategies with Statistical Precision",
  content: [
    "In the fast-paced world of financial markets, every tick and fluctuation in prices can have a profound impact on trading decisions. Traders and investors are constantly on the lookout for tools that can provide meaningful insights into market dynamics, allowing them to make informed decisions.",
    "In this blog post, we delve into the results of a comprehensive regression analysis conducted on financial data, exploring the relationships between various market indicators and the closing price. The study aims to unlock predictive insights that could guide trading strategies and risk management.",
    // ... (Rest of your content)
    "Armed with these insights, traders can develop and fine-tune their strategies:",
    "Contrarian Approach to Opening Prices: The negative impact of the opening price invites a contrarian approach. Traders might explore opportunities to act against the initial market sentiment, strategically leveraging the observed negative relationship.",
    // ... (Additional sections)
    "By scrutinizing both the coefficients and the homoskedasticity check, we ensure that our model doesn't succumb to biases stemming from unequal variances. This step enhances the robustness of our predictions and fortifies the foundation of informed trading strategies.",
    "Incorporating the homoskedasticity check into our model validation process adds an additional layer of confidence in the reliability of our predictive insights. Traders are encouraged to not only leverage the statistical prowess of the model but also to critically assess its diagnostic results to make well-informed decisions in the dynamic realm of financial markets.",
    "Happy trading!"
  ],
  image: blogImage,
}];

const Blog = ({ data }) => {
  return (
    <div className="blog-container">
      <img
        src={data.image}
        alt="Blog Cover"
        className="blog-cover-image"
        style={{ height: "200px", width: "auto", float: "left", marginRight: "20px" }}
      />
      <div className="blog-content">
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>

        {data.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))} 
      </div>
    </div>
  );
};


export const  mogData = [
  {
    img:blogImage,
    date:"01-27-2024",
    author:"Abdul mboob",
    title:"Navigating Trading Strategies with Statistical Precision",
    path:"/blog"


}
]
const Bone = ({ procs }) => {
  return (
    <>
      <div style={{  display: "flex", flexDirection: "column", border: "1px solid #ccc", padding: "10px", borderRadius: "8px", marginBottom: "20px" }}>
        <div>
          <img src={procs.img} alt="logo" style={{ height: "200px", width: "auto" }} />
        </div>
        <div>
          <div>{procs.date}</div>
          <div>{procs.author}</div>
          <h1 style={{ fontSize: "1.5em", fontWeight: "bold", margin: "10px 0" }}>{procs.title}</h1>
          
          <p>
            <Link to={procs.path}>
              Read more
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

const Blogpage = () => {
  return (
    < div style={{"margin-top":"3%"}}>
<h1>Blogs</h1> 
    <div style={{"margin-top":"3%"}}>
       <Bone procs={mogData[0]} />
    </div>
     
    </div>
  );
}








export const workData = [
  {
    img: wocktanImage,
    title: "Wocktan: Empowering Language Learning",
    content: [
      "Welcome to Wocktan, a cutting-edge platform designed to revolutionize language learning! At Wocktan, we believe in making language acquisition an immersive, engaging, and personalized experience for learners worldwide.",
      // ... (Additional content)
    ],
    features: [
      "Interactive Lessons: Dive into dynamic and interactive lessons crafted to enhance language skills.",
      "Video Content: Immerse yourself in authentic language experiences through our rich library of video content.",
      "SEO Optimization: We've implemented robust SEO strategies to ensure Wocktan is easily discoverable by language enthusiasts worldwide.",
      "Code Mastery: Behind the scenes, our team of skilled developers has meticulously coded and developed Wocktan to deliver a seamless learning experience.",
      // ... (Additional features)
    ],
    videoProduction: [
      "Our dedicated team has produced high-quality video content, ranging from instructional materials to captivating language immersion experiences. Every video is thoughtfully curated to provide learners with an authentic and enjoyable learning journey.",
      // ... (Additional video production content)
    ],
    getStarted: "Ready to embark on your language-learning adventure? Visit wocktan.com and start exploring the diverse world of languages with Wocktan!",
    description:"This App was a request by A person who wanted to expand there textile business in Africa but could not speak the language.Its also inspired by the desire to preserve historic languages."
                
  },
  // ... (Additional work items)
];

// ... (Other imports)

const Wocktan = ({ data }) => {
  return (
    <div>
      <img
        src={data.img}
        alt="Work Cover"
        className="work-cover-image"
        style={{ height: "200px", width: "auto", float: "left", marginRight: "20px" }}
      />
      <div className="work-content">
        <h1>{data.title}</h1>

        {data.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <h3>Key Features:</h3>
        <ul>
          {data.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h3>Video Production:</h3>
        {data.videoProduction.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <h3>Get Started:</h3>
        <p>{data.getStarted}</p>
      </div>
    </div>
  );
};

const WorkPlacard = ({ procs, onSelectReadMore }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", border: "1px solid #ccc", padding: "10px", borderRadius: "8px", marginBottom: "20px" }}>
      <div>
        <img src={procs.img} alt="logo" style={{ height: "200px", width: "auto" }} />
      </div>
      <div>
        <span>{procs.date}</span>
        <span>{procs.author}</span>
        <h1 style={{ fontSize: "1.5em", fontWeight: "bold", margin: "10px 0" }}>{procs.title}</h1>
        <p>{procs.description}</p>
        <p>
          <button onClick={onSelectReadMore}>
            Read more
          </button>
        </p>
      </div>
    </div>
  );
}

const Workpage = () => {
  const [selectedWork, setSelectedWork] = React.useState(null);

  const handleReadMoreClick = (work) => {
    setSelectedWork(work);
  };

  const handleGoBackClick = () => {
    setSelectedWork(null);
  };

  return (
    <div style={{"margin-top":"3%"}}>
      <h1>Works</h1>
      {selectedWork ? (
        <>
          <Wocktan data={selectedWork} />
          <button onClick={handleGoBackClick}>Go Back</button>
        </>
      ) : (
        <div style={{ marginTop: "3%" }}>
          {workData.map((work, index) => (
            <WorkPlacard key={index} procs={work} onSelectReadMore={() => handleReadMoreClick(work)} />
          ))}
        </div>
      )}
    </div>
  );
}

// ... (Other routes)


// ... (Other components)




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
          <Route path="/blog" element={<Blog data={blogData[0]}/>}/>
          <Route path="/blogpage" element={<Blogpage/>}/>
        <Route path="/workpage" element={<Workpage />} />

        
        </Routes>
      </Router>
      </header>
      <footer>
        <div>
          ©Econsensus 2024
        </div>
        <Contacts/>

      </footer>
    
    </div>
  );
}

export default App;