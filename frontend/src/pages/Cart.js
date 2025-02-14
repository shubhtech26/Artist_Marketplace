import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((product) => (
            <div key={product.id} className="flex justify-between p-4 border rounded-lg shadow">
              <div>
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
                <button onClick={() => removeFromCart(product.id)} className="text-red-600 hover:underline">
                  Remove
                </button>
              </div>
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
            </div>
          ))}

          <button onClick={clearCart} className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md mt-4 w-full">
            Clear Cart
          </button>
        </div>
      )}

      <Link to="/shop" className="block mt-4 text-blue-600 hover:underline">Continue Shopping</Link>
    </div>
  );
};

export default Cart;
