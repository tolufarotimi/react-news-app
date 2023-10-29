// HomePage.js
import React, { useEffect, useState } from 'react';
//import { fetchNewsFromNewsApi, fetchNewsFromNewscred, fetchNewsFromOpenNews } from './newsService';
import { fetchNewsFromNewsApi } from './newsService';


function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newsApiArticles = await fetchNewsFromNewsApi();
      // const newscredArticles = await fetchNewsFromNewscred();
      // const openNewsArticles = await fetchNewsFromOpenNews();

      //const allArticles = [...newsApiArticles, ...newscredArticles, ...openNewsArticles];
      const allArticles = [...newsApiArticles];

      // You can further process and sort the articles as needed
      setArticles(allArticles);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Personalized News Feed</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
