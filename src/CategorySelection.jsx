import React, { useState } from 'react';

const CategorySelection = () => {
  // Initialize state to manage selected categories
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Function to handle category selection
  const handleCategorySelection = (category) => {
    // Check if the category is already selected
    const isCategorySelected = selectedCategories.includes(category);
    if (isCategorySelected) {
      // If already selected, remove it from the array
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      // If not selected, add it to the array
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div>
      <h2>Select categories:</h2>
      <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 justify-center items-center">
        {/* List of categories */}
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategorySelection(category)}
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
};

// List of categories
const categories = [
  'Jwellery',
  'Home Decor',
  'Kitchen and Dining',
  'Beauty and Grooming',
  'HandBags and Totes',
  'Stationary and Parties Supply',
  'Clothing',
  'Toys and Games',
];

export default CategorySelection;
