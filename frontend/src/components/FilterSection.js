import React from "react";

const FilterSection = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value, type } = e.target;

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "range" ? Number(value) : value, // Convert range input to number
    }));
  };

  return (
    <div className="w-64 p-4 bg-white shadow-md rounded-lg sticky top-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Filter Paintings</h2>

      {/* Size Filter */}
      <div className="mb-3">
        <label className="block text-gray-700 font-medium mb-1">Size:</label>
        <select
          name="size"
          value={filters.size}
          onChange={handleFilterChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
        >
          <option value="">All Sizes</option>
          <option value="Small">Small (Under 20x20 inches)</option>
          <option value="Medium">Medium (20x40 inches)</option>
          <option value="Large">Large (40x40 inches)</option>
        </select>
      </div>

      {/* Style Filter */}
      <div className="mb-3">
        <label className="block text-gray-700 font-medium mb-1">Style:</label>
        <select
          name="style"
          value={filters.style}
          onChange={handleFilterChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
        >
          <option value="">All Styles</option>
          <option value="Abstract">Abstract</option>
          <option value="Portrait">Portrait</option>
          <option value="Landscape">Landscape</option>
        </select>
      </div>

      {/* Medium Filter */}
      <div className="mb-3">
        <label className="block text-gray-700 font-medium mb-1">Medium:</label>
        <select
          name="medium"
          value={filters.medium}
          onChange={handleFilterChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
        >
          <option value="">All Mediums</option>
          <option value="Oil">Oil</option>
          <option value="Acrylic">Acrylic</option>
          <option value="Watercolor">Watercolor</option>
        </select>
      </div>

      {/* Frame Type Filter */}
      <div className="mb-3">
        <label className="block text-gray-700 font-medium mb-1">Frame Type:</label>
        <select
          name="frameType"
          value={filters.frameType}
          onChange={handleFilterChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
        >
          <option value="">All</option>
          <option value="Framed">Framed</option>
          <option value="Unframed">Unframed</option>
        </select>
      </div>

      {/* Price Filter */}
      <div className="mb-3">
        <label className="block text-gray-700 font-medium mb-1">Price Range:</label>
        <input
          type="range"
          name="priceRange"
          min="100"
          max="1000"
          step="50"
          value={filters.priceRange[1]}
          onChange={(e) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              priceRange: [prevFilters.priceRange[0], Number(e.target.value)],
            }))
          }
          className="w-full cursor-pointer"
        />
        <span className="text-gray-800 font-medium">${filters.priceRange[1]}</span>
      </div>
    </div>
  );
};

export default FilterSection;
