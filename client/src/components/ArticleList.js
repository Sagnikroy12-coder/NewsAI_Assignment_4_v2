import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArticleList({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError('');

      try {
        // Check if data is cached in sessionStorage
        const cached = sessionStorage.getItem(`articles-${category}`);
        if (cached) {
          setArticles(JSON.parse(cached));
          setLoading(false);
          return;
        }

        // Fetch from API
        const response = await axios.get(`http://localhost:5000/api/news?category=${category}`);


        if (!response.data.articles || response.data.articles.length === 0) {
          setError('No articles found.');
        } else {
          setArticles(response.data.articles);
          sessionStorage.setItem(`articles-${category}`, JSON.stringify(response.data.articles));
        }

      } catch (error) {
        console.error('Error fetching articles:', error);
        setError('Error fetching articles.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {articles.map((article) => (
  <div key={article.url} className="article-card">
    <h2>{article.title}</h2>
    {article.urlToImage && (
      <img
        src={article.urlToImage}
        alt={article.title}
        style={{
          width: '100%',
          maxHeight: '200px',
          objectFit: 'cover',
          borderRadius: '8px'
        }}
      />
    )}
    <p>{article.description}</p>
    <a href={article.url} target="_blank" rel="noreferrer">
      Read More
    </a>
  </div>
))}
        </div>
      )}
    </div>
  );
}

export default ArticleList;
