import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import mockProducts from "../assets/mockProduct";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = mockProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-red-500 text-xl">Product Not Found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart"); // Redirect to cart after adding an item
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8 bg-white shadow-lg rounded-xl mt-10">
      <div className="md:w-1/2">
        <img src={product.image || "https://via.placeholder.com/600"} alt={product.name} className="w-full rounded-lg shadow-md" />
      </div>

      <div className="md:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
        <p className="text-lg text-gray-600">{product.category} - {product.style}</p>
        <p className="text-gray-500">Size: {product.size} | Medium: {product.medium} | Frame: {product.frameType}</p>

        <div className="flex items-center gap-4 text-lg font-semibold">
          <span className="text-green-600">${product.price}</span>
          {product.inStock ? (
            <span className="bg-green-200 text-green-700 px-3 py-1 rounded-md">In Stock</span>
          ) : (
            <span className="bg-red-200 text-red-700 px-3 py-1 rounded-md">Out of Stock</span>
          )}
        </div>

        <p className="text-gray-700 text-sm leading-relaxed">{product.description || "Beautiful artwork to enhance your space."}</p>

        <div className="flex gap-4 mt-4">
          <button onClick={handleAddToCart} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition-all">
            Add to Cart
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
