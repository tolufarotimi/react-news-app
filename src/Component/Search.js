// SearchComponent.js
import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery); // Send the search query to the parent component
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
    </div>
    </div>
  );
}

export default Search;
