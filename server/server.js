const express = require("express");
const app = express();

const pool = require("./db");
require('dotenv').config();
const functions = require("firebase-functions");
var coinbase = require('coinbase-commerce-node');
var Client = coinbase.Client;
 var resources = coinbase.resources
Client.init('d4d1dc55-213a-4f1a-8b59-5fcf9c33cef4');

const {Charge} = resources;
const cors= require("cors")({origin:"*"})
exports.createCharge = functions.https.onRequest((req,res)=>{
        cors(req,res,async()=>{
            const chargeData = {
                name:"Widget",
                description:"useless Widget",
                local_price:{
                    amount:9.99,
                    currency:"USD"
                },
                pricing_type:"fixed_price",
                metadata:{
                    user:"jeffd23"
                }
            }

            const charge = await Charge.create(chargeData);
            console.log(charge)
            res.send(charge)
        })
})

app.post("/checkout",async(req,res)=>{
    const {amount,currency} = req.body
    try {
        const charge = await resources.Charge.create({
            name: 'Customer Name',
        email: 'customer@example.com',
        pricing_type: 'fixed_price',
        local_price: {
          amount: '100.00', // Replace with the actual amount
          currency: 'USD',
    }})

    res.status(200).json({
        charge:charge
    })
    } catch (error) {
        res.status(500).json({error:error})
        console.error(error)
    }
})

//middleware

app.use(express.json());

app.post("/help",async(req,res)=>{
    const {name,phone,email,industry,bproblem} = req.body;
    const data = await pool.query(
    "INSERT INTO help( name,phone,email,industry,bproblem) VALUES($1,$2,$3,$4,$5) RETURNING *",
    [name,phone,email,industry,bproblem]
        ) 
    res.json(data.rows[0]);
 
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
      success_url: "http://localhost:3000/success.html",
      cancel_url: "http://localhost:3000/cancel.html",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.listen("5000",()=>{
    console.log("server Works")
})

