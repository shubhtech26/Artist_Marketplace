import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartState.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold mb-6">Shopping Cart</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section: Cart Items */}
        <div className="md:col-span-2">
          <div className="border-b pb-4 flex justify-between font-semibold text-lg">
            <span>Product Details</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>

          {cartState.cartItems.length === 0 ? (
            <p className="text-gray-500 mt-4 text-lg">Your cart is empty.</p>
          ) : (
            cartState.cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                {/* Product Info */}
                <div className="flex items-center gap-4 w-2/5">
                  <img src={item.image || "https://via.placeholder.com/100"} alt={item.name} className="w-16 h-16 rounded-md" />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-red-500 text-sm">PS4</p>
                    <button
                      onClick={() => cartDispatch({ type: "REMOVE_ITEM", payload: { id: item.id } })}
                      className="text-gray-500 text-sm mt-1 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center border rounded-lg px-2">
                  <button
                    onClick={() =>
                      cartDispatch({
                        type: "UPDATE_QUANTITY",
                        payload: { id: item.id, quantity: item.quantity - 1 },
                      })
                    }
                    disabled={item.quantity <= 1}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    className="w-10 text-center border-none"
                    readOnly
                  />
                  <button
                    onClick={() =>
                      cartDispatch({
                        type: "UPDATE_QUANTITY",
                        payload: { id: item.id, quantity: item.quantity + 1 },
                      })
                    }
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>

                {/* Price & Total */}
                <span className="w-1/5 text-center">${item.price.toFixed(2)}</span>
                <span className="w-1/5 text-center">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))
          )}

          <button
            onClick={() => navigate("/shop")}
            className="text-purple-600 text-sm mt-4 flex items-center gap-1 hover:underline"
          >
            ← Continue Shopping
          </button>
        </div>

        {/* Right Section: Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold border-b pb-2">Order Summary</h3>
          <div className="flex justify-between mt-3">
            <span>Items {cartState.cartItems.length}</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          {/* Shipping */}
          <div className="mt-4">
            <label className="text-gray-600 text-sm">Shipping</label>
            <select className="w-full mt-1 p-2 border rounded">
              <option>Standard Delivery - $5.00</option>
              <option>Express Delivery - $10.00</option>
            </select>
          </div>

          {/* Promo Code */}
          <div className="mt-4">
            <label className="text-gray-600 text-sm">Promo Code</label>
            <div className="flex mt-1">
              <input
                type="text"
                placeholder="Enter your code"
                className="w-full p-2 border rounded-l"
              />
              <button className="bg-red-500 text-white px-4 rounded-r">APPLY</button>
            </div>
          </div>

          {/* Total Cost */}
          <div className="flex justify-between font-semibold mt-4 text-lg">
            <span>Total Cost</span>
            <span>${(totalPrice + 5.00).toFixed(2)}</span>
          </div>

          {/* Checkout Button */}
          <button
            onClick={() => navigate("/checkout")}
            className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
