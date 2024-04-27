import wocktanImage from "../images/wocktan.jpg"
import cuttrapLogo from "../images/CutTrap copy.png"
import Daap from "../images/block.jpeg"



const worksData = [
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
  {img: cuttrapLogo,
  title: "Cutrap: Simplifying Barber Booth Booking",
  content: [
    "Welcome to Cutrap, your go-to platform for simplifying barber booth booking! With Cutrap, barbers can effortlessly book booth spaces in thirty-minute increments, allowing for flexible scheduling and efficient management of their time.",
    "Our platform integrates seamlessly with Stripe payments and Coinbase Commerce, enabling secure and hassle-free transactions for booth bookings. Say goodbye to traditional booking hassles and embrace the convenience of Cutrap!",
    "We've deployed Cutrap using Render and Netlify, ensuring high performance and reliability. Our database is powered by Postgres, and we send requests through Express and a Node server for optimal speed and efficiency.",
    "To ensure security and privacy, we've implemented robust authentication mechanisms, safeguarding user data and providing peace of mind to barbers using our platform.",
    "Our sleek and professional brand logo sets us apart, while Bootstrap styling enhances the user experience with a clean and intuitive interface.",
  ],
  features: [
    "Flexible Booking: Barbers can book booth spaces by thirty-minute increments, allowing for precise scheduling and maximizing productivity.",
    "Integrated Payments: Seamless integration with Stripe payments and Coinbase Commerce ensures secure and convenient transactions for booth bookings.",
    "Deployment Excellence: Cutrap is deployed using Render and Netlify for high performance and reliability, providing users with a seamless experience.",
    "Database Power: Our database is built with Postgres, ensuring efficient data management and scalability as the platform grows.",
    "Fast Requests: We send requests through Express and a Node server, optimizing speed and responsiveness for a smooth user experience.",
    "Authentication Security: Robust authentication mechanisms protect user data, ensuring privacy and security for all users.",
    "Professional Branding: Our sleek and professional brand logo enhances brand recognition and sets the tone for a premium user experience.",
    "Bootstrap Styling: Bootstrap styling ensures a clean and intuitive interface, enhancing usability and user satisfaction.",
  ],
  description: "Cutrap was developed to simplify the booking process for barbers, empowering them to manage their time effectively and focus on what they do best. Inspired by the need for streamlined scheduling solutions in the barber industry, Cutrap aims to revolutionize the way barbers book booth spaces.",
  getStarted: "Ready to streamline your booth booking process? Visit cutrap.com and start optimizing your scheduling with Cutrap!",
  },
  {
  img: Daap,
  title: "Your Blockchain Review Template",
  content: [
    "Welcome to your Review Chain Template! This is where you can introduce your application and provide an overview of its features.",
    "This system uses a smart contract we created and auidited",
    "The purpose of this template is so that whatever site you are using can have a review system that uses the blockchain",
    "The beauty of this template is with this system the economics of the blockchain is used to make an immutable review that users can trust and because a review is a part of the tranasction so there is incentive not to leave a bad review ",
    "This system uses Ethers,Pinata,Solididty,Infura,Node,React,postgres",
    "The vison for this template ist that those who need a review system try this one as its easy to use and make good use of the security and reliablity of the blockcgain ",
  ],
  features: [
    "Feature 1: This app lets you write to the blockchain and pay to leave a review for tranasctions",
    "Feature 2: This app uses Pinata to allow useres to put there profile picture ",
    "Feature 3:The address that is selected is also able to reviewve ether",
  ],
  description: "Block Review lets you use the blockchain to leave an immutable review.",
  getStarted: "You BlockReview in you website today",
  } 
];


// ... (Other imports)
export default worksData;