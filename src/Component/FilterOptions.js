import React, { useState } from 'react';

function FilterOptions({ onFilter }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSource, setSelectedSource] = useState('');

  const handleFilter = () => {
    // Simulate filtering (replace with actual filter functionality later)
    onFilter({ category: selectedCategory, source: selectedSource });
  };

  return (
    <div>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
        {/* Add more categories as needed */}
      </select>

      <select
        value={selectedSource}
        onChange={(e) => setSelectedSource(e.target.value)}
      >
        <option value="">Select Source</option>
        <option value="Source 1">Source 1</option>
        <option value="Source 2">Source 2</option>
        {/* Add more sources as needed */}
      </select>

      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
}

export default FilterOptions;
