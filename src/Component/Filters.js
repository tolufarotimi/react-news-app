// FiltersComponent.js
import React, { useState } from 'react';

function Filters({ onFilter }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSource, setSelectedSource] = useState('');

  const handleFilter = () => {
    onFilter({
      date: selectedDate,
      category: selectedCategory,
      source: selectedSource,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
      <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
        <option value="">All Dates</option>
        {/* Add date options */}
      </select>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {/* Add category options */}
      </select>
      <select value={selectedSource} onChange={(e) => setSelectedSource(e.target.value)}>
        <option value="">All Sources</option>
        {/* Add source options */}
      </select>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
    </div>
    </div>
  );
}

export default Filters;
