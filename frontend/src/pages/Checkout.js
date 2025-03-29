import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51PyJwwJKmwzAoFqfQAJfCXsunTcJhVP4bD1tlA1BEzazmTuX4gkERbhQ2y7aCy81DQI5Hw71G5yUTdku4hlhmzWU00CeZtFJKV");

const CheckoutForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          amount: totalAmount, // 💰 Send dynamic cart total amount
          paymentMethodId: paymentMethod.id,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Payment Successful!");
        navigate("/");
      } else {
        alert("Payment Failed!");
      }
    } else {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="email" type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border" />
      <CardElement className="p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white px-5 py-2 w-full rounded-lg" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

const Checkout = () => {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    // 🛒 Fetch total amount from the cart state (assuming you store it in localStorage)
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setCartTotal(total);
  }, []);

  return (
    <Elements stripe={stripePromise}>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <h3 className="text-lg font-semibold mb-4">Total: ${cartTotal.toFixed(2)}</h3>
        <CheckoutForm totalAmount={cartTotal * 100} /> {/* Convert to cents for Stripe */}
      </div>
    </Elements>
  );
};

export default Checkout;
