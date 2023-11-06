import React, { useState, useEffect } from 'react';
import {
  fetchNewsFromNewsAPI,
  fetchNewsFromOpenNews,
  fetchNewsFromNewsCred,
} from './newsService'; // Import the functions
import SourceSelection from './SourceSelection'; // Import your source selection component

function Home() {
  const [selectedSources, setSelectedSources] = useState(['newsapi']); // Default to NewsAPI
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Fetch news from selected sources
    async function fetchNewsFromSelectedSources() {
      const selectedNewsPromises = [];

      if (selectedSources.includes('newsapi')) {
        selectedNewsPromises.push(fetchNewsFromNewsAPI());
      }
      if (selectedSources.includes('opennews')) {
        selectedNewsPromises.push(fetchNewsFromOpenNews());
      }
      if (selectedSources.includes('newscred')) {
        selectedNewsPromises.push(fetchNewsFromNewsCred());
      }

      try {
        const results = await Promise.all(selectedNewsPromises);
        const allNews = results.flat();
        setNewsArticles(allNews);
      } catch (error) {
        console.error('Error fetching news from selected sources:', error);
      }

      setLoading(false);
    }

    fetchNewsFromSelectedSources();
  }, [selectedSources]); // Trigger the effect when selectedSources change

  // Function to handle source selection
  const handleSourceSelect = (selected) => {
    setSelectedSources(selected);
  };

  return (
    <div>
      <h1>Customize Your News Feed</h1>
      <SourceSelection selectedSources={selectedSources} onSourceSelect={handleSourceSelect} />

      {loading && <p>Loading news...</p>}
      {newsArticles.length > 0 && (
        <ul>
          {newsArticles.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
