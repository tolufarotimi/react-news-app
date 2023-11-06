import React, { useState } from 'react';

function UserDashboard() {
  const [selectedSources, setSelectedSources] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  const handleSourceChange = (e) => {
    const source = e.target.value;
    setSelectedSources((prevSources) =>
      prevSources.includes(source)
        ? prevSources.filter((item) => item !== source)
        : [...prevSources, source]
    );
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((item) => item !== category)
        : [...prevCategories, category]
    );
  };

  const handleAuthorChange = (e) => {
    const author = e.target.value;
    setSelectedAuthors((prevAuthors) =>
      prevAuthors.includes(author)
        ? prevAuthors.filter((item) => item !== author)
        : [...prevAuthors, author]
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
      <h2>User Dashboard</h2>
      <h3>Preferred Sources</h3>
      <div>
        <label>
          <input
            type="checkbox"
            value="Source 1"
            checked={selectedSources.includes('Source 1')}
            onChange={handleSourceChange}
          />{' '}
          Source 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Source 2"
            checked={selectedSources.includes('Source 2')}
            onChange={handleSourceChange}
          />{' '}
          Source 2
        </label>
      </div>

      <h3>Preferred Categories</h3>
      <div>
        <label>
          <input
            type="checkbox"
            value="Category A"
            checked={selectedCategories.includes('Category A')}
            onChange={handleCategoryChange}
          />{' '}
          Category A
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Category B"
            checked={selectedCategories.includes('Category B')}
            onChange={handleCategoryChange}
          />{' '}
          Category B
        </label>
      </div>

      <h3>Preferred Authors</h3>
      <div>
        <label>
          <input
            type="checkbox"
            value="Author X"
            checked={selectedAuthors.includes('Author X')}
            onChange={handleAuthorChange}
          />{' '}
          Author X
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Author Y"
            checked={selectedAuthors.includes('Author Y')}
            onChange={handleAuthorChange}
          />{' '}
          Author Y
        </label>
      </div>
      </div>
      </div>
    </div>
  );
}

export default UserDashboard;
