import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  try {
    const { email, amount, paymentMethodId } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, error: "Invalid amount" });
    }

    // Create a payment intent dynamically
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // 💰 Dynamic amount received from frontend
      currency: "usd",
      description: `Order Payment for ${email}`,
      payment_method: paymentMethodId,
      confirm: true, // Auto-confirm the payment
    });

    res.json({ success: true, clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
