const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// CORS settings
const corsOptions = {
  origin: ['https://econsensus.app', 'https://econsensus.onrender.com'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors());
app.use(express.json());
app.use('/help', cors(corsOptions));

// Route for inserting help data
app.post("/help", async (req, res) => {
  try {
    const { name, phone, email, industry, bproblem } = req.body;
    const data = await pool.query(
      "INSERT INTO help(name, phone, email, industry, bproblem) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [name, phone, email, industry, bproblem]
    );
    res.json(data.rows[0]);
  } catch (error) {
    console.error("Error inserting help data:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("hello");
});

// Map for store items
const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Econometrics" }],
  [2, { priceInCents: 10000, name: "Blockchain Dev" }],
  [3, { priceInCents: 10000, name: "Business Dev" }]
]);

// Route for creating checkout session
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { items } = req.body;
    const stripe = require('stripe')("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");

    const lineItems = items.map(item => {
      const storeItem = storeItems.get(item.id);
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: storeItem.name,
            // Add more details to product_data if needed
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
      success_url: "/success",
      cancel_url: "/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
