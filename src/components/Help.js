import React, { useState } from "react";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51Od38iLYxzXgDlcw7O1YAHla6vvYavDll3IWvVlR2afP7RtD2MQ4TiZ1CTT1P6ZWfHFOLdelqHK1GQvLbyEkrD0j00aczd4JTs");

const URL = "https://econsensus.onrender.com";
const Help = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    industry: "",
    bproblem: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckoutClick = async (id) => {
    try {
      const stripe = await stripePromise;

      const response = await fetch(`https://econsensus.onrender.com/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          items: [
            { id, quantity: 1 },
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
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        alert("We will get back to you shortly");
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }

    setFormData({
      name: "",
      phone: "",
      email: "",
      industry: "",
      bproblem: "",
    });
  };

  return (
    <>
      <div className="help-container">
        <section>
          <h2>Econsensus helps with..</h2>
          <br />

          <h3>Elevated Decision-Making through Data-Driven Insights</h3>
          <p>
            Harness the power of advanced data collection, survey creation, econometric models, and comprehensive economic reports to help you make the most informed decision every time.
          </p>
          <button className="btn btn-success" onClick={() => handleCheckoutClick(1)}>
            Checkout for Econometrics
          </button>
          <button className="btn btn-warning">
            <a className="buy-with-crypto" href="https://commerce.coinbase.com/checkout/0c0d43cb-056c-45a9-9783-1dae8d8e2686">
              Buy with Crypto
            </a>
          </button>

          {/* Repeat similar sections for other services */}

          <div>
            <p>
              Our services are designed to empower your company, fostering innovation, efficiency, and sustained success in today's dynamic market.
              Please feel free to complete the form, and a representative will be with you shortly.
            </p>
          </div>
        </section>

        <div className="form-group">
          <form onSubmit={handleSubmit}>
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
            <button className="btn btn-warning" type="submit" id="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Help;
