import React, { useState, useEffect } from 'react';

const SideFilter = ({ categories, onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Update the filter based on selected categories
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const applyFilter = () => {
    onFilterChange(selectedCategories);
  };

  useEffect(() => {
    // Reset filter to show all posts when no categories are selected
    if (selectedCategories.length === 0) {
      onFilterChange([]);
    }
  }, [selectedCategories, onFilterChange]);

  return (
    <div  className="w-full mt-8 sm:w-64 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-lexend underline decoration-2 underline-offset-8">Categories</h2>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category} className="flex items-center">
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={handleCategoryChange}
              className="mr-2 h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
            />
            <label className="text-lg text-gray-700">{category}</label>
          </div>
        ))}
      </div>
      <button
        onClick={applyFilter}
        className="mt-6 px-5 py-3 bg-green-500 text-white rounded-md w-full"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default SideFilter;
