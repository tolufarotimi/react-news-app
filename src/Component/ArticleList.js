import React, { useState, useEffect } from 'react';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Sample mock data for articles
    const mockArticles = [
      {
        id: 1,
        title: 'Sample Article 1',
        content: 'This is the content of sample article 1.',
      },
      {
        id: 2,
        title: 'Sample Article 2',
        content: 'This is the content of sample article 2.',
      },
      // Add more sample articles as needed
    ];

    // Simulate fetching articles (replace with actual API call later)
    setArticles(mockArticles);
  }, []);

  return (
    
    <div className="container">
      <h2>Latest Articles</h2>
      {articles.map((article) => (
        <div key={article.id} className="article">
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
