// src/components/ProductCard.js
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="relative border rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="h-80 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
        <p className="text-gray-700 font-semibold mt-2">${product.price}</p>
        <button className="mt-4 bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
      {product.outOfStock && (
        <div className="absolute top-0 left-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded-bl">
          Out of Stock
        </div>
      )}
    </div>
  );
};

export default ProductCard;
