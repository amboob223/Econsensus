const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());

app.post("/help",async(req,res)=>{
    const {name,phone,email,industry,bproblem} = req.body;
    const data = await pool.query(
    "INSERT INTO help(name,phone,email,industry,bproblem) VALUES($1,$2,$3,$4,$5) RETURNING *",
    [name,phone,email,industry,bproblem]
        ) 
    res.json(data.rows[0]);
 
})


app.get("/", (req, res) => {
    res.send("hello")
})

const storeItems = new Map([
    [ 1, {priceInCents:10000, name:"Econometrics"}],
    [2,{priceInCents:10000, name:"Blockchain Dev"}],
      [3,{priceInCents:10000, name:"Business Dev"}]
])


app.post("/create-checkout-session", async (req, res) => {
  const { items } = req.body;

  try {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    const lineItems = items.map(item => {
      const storeItem = storeItems.get(item.id);
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: storeItem.name,
            // You can add more details to the product_data if needed
          },
          unit_amount: storeItem.priceInCents,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://econsensus.onrender.com/success.html",
      cancel_url: "https://econsensus.onrender.com/cancel.html",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
        console.log("class")
    })

