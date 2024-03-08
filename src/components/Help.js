import {React,useState} from "react";
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe("pk_test_51Od38iLYxzXgDlcw7O1YAHla6vvYavDll3IWvVlR2afP7RtD2MQ4TiZ1CTT1P6ZWfHFOLdelqHK1GQvLbyEkrD0j00aczd4JTs");

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

     //stripe
     const ECheckoutClick = async () => {
    try {
      const stripe = await stripePromise;

      const response = await fetch(`https://econsensus.onrender.com/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          items: [
            { id: 1, quantity: 1 }, // Replace with the correct item IDs and quantities
          ],
        }),
      });

      if (response.ok) {
        const session = await response.json();
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          console.error(result.error.message);
        }
      } else {
        console.error('Failed to create checkout session');
      }
    } catch (error) {
      console.error('Error handling checkout:', error);
    }
  };

  const BCheckoutClick = async () => {
    try {
      const stripe = await stripePromise;

      const response = await fetch(`https://econsensus.onrender.com/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          items: [
            { id: 2, quantity: 1 }, // Replace with the correct item IDs and quantities
          ],
        }),
      });

      if (response.ok) {
        const session = await response.json();
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          console.error(result.error.message);
        }
      } else {
        console.error('Failed to create checkout session');
      }
    } catch (error) {
      console.error('Error handling checkout:', error);
    }
  };

  const BBCheckoutClick = async () => {
    try {
      const stripe = await stripePromise;

      const response = await fetch(`https://econsensus.onrender.com/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          items: [
            { id: 3, quantity: 1 }, // Replace with the correct item IDs and quantities
          ],
        }),
      });

      if (response.ok) {
        const session = await response.json();
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          console.error(result.error.message);
        }
      } else {
        console.error('Failed to create checkout session');
      }
    } catch (error) {
      console.error('Error handling checkout:', error);
    }
  };




  const handleSubmit = async (e) => {
  try {
    e.preventDefault();
    const response = await fetch(`https://econsensus.onrender.com/help`, {
      method: "POST",

      body: JSON.stringify(formData),
    });
//
    if (response.ok) {
      // Handle success, e.g., show a success message or redirect
      console.log('Form submitted successfully');
      alert("We will get back to you shortly");
    } else {
      // Handle errors, e.g., show an error message
      console.error('Form submission failed:', response.statusText);
    }
  } catch (error) {
    console.error('Error submitting form:', error.message);
  }

  // Reset the form data regardless of success or failure
  setFormData({
    name: "",
    phone: "",
    email: "",
    industry: "",
    bproblem: "",
  });
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
<button className="btn btn-success" onClick={ECheckoutClick}>
          Checkout for Econometrics
        </button>
        <button className="btn btn-warning">

    
      <a className="buy-with-crypto"
        href="https://commerce.coinbase.com/checkout/0c0d43cb-056c-45a9-9783-1dae8d8e2686">
        Buy with Crypto
      </a>
      <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
      </script>
    

        </button>
  <h3>Blockchain Solutions Tailored for Your Business</h3>
  <p>
    Explore the potential of blockchain with our feasibility and use case studies. Identify specific applications for your business, and let our experts develop custom DAOs, DApps, custom tokens, or NFTs. Leverage the transformative capabilities of smart contracts and blockchain technology to enhance operational efficiency and security.
  </p>
  <button className="btn btn-success" onClick={BCheckoutClick}>
          Checkout for Blockchain Solutions
        </button>
        <button className="btn btn-warning">

   
      <a className="buy-with-crypto"
        href="https://commerce.coinbase.com/checkout/79ae64ac-73e6-41ce-852f-8f9f612ce0ee">
        Buy with Crypto
      </a>
      <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
      </script>
 

        </button>
  <h3>Holistic Business Development Services</h3>
  <p>
    Propel your business forward with our comprehensive web development, SEO, social media management (SMM), and content marketing solutions. From building a strong online presence to executing successful marketing campaigns, our business development offerings are designed to enhance your brand visibility and drive growth.
  </p>
    <button className="btn btn-success" onClick={BBCheckoutClick}>
          Checkout for Business Development Services
        </button>
        <button className="btn btn-warning">

    
      <a className="buy-with-crypto"
        href="https://commerce.coinbase.com/checkout/5fdd83e6-315d-4847-910c-3b2f3e75ba19">
        Buy with Crypto
      </a>
      <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
      </script>
  

        </button>
<br>
</br>
<div>
   <p>
Our services are designed to empower your company, fostering innovation, efficiency, and sustained success in today's dynamic market.
    Please feel free to complete the form and a representative will be with you shortly.
  </p>
</div>
 
  
      
      
</section>

    
       <form action="https://econsensus.onrender.com/help" onSubmit={handleSubmit}>
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
        <button  className = "btn btn-warning" type="submit">
          Submit
        </button>
      </form>
      </div>
    </>

};
 export default Help;