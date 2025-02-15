import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartState } = useCart();
  const navigate = useNavigate();

  // State for form inputs
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const totalPrice = cartState.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert("Payment Successful! 🎉");
    navigate("/"); // Redirect to home or order success page
  };

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold mb-6">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
          <form onSubmit={handleCheckout} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={form.zip}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <select
              name="country"
              value={form.country}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="IN">India</option>
              <option value="CA">Canada</option>
            </select>

            {/* Payment Details */}
            <h3 className="text-xl font-semibold mt-6">Payment Details</h3>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={form.cardNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="expDate"
                placeholder="MM/YY"
                value={form.expDate}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={form.cvv}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
            >
              Complete Purchase
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold border-b pb-2">Order Summary</h3>
          <div className="flex justify-between mt-3">
            <span>Items {cartState.cartItems.length}</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
         
          

          {/* Shipping */}
          <div className="flex justify-between mt-3">
            <span>Shipping</span>
            <span>$5.00</span>
          </div>

          {/* Total Cost */}
          <div className="flex justify-between font-semibold mt-4 text-lg">
            <span>Total Cost</span>
            <span>${(totalPrice + 5.00).toFixed(2)}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
