import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SummarizeButton from './SummarizeButton';
import './ArticleDetail.css';

function ArticleDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return (
      <div className="article-detail">
        <p>No article data available.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="article-detail">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      <h2>{article.title}</h2>
      <img src={article.urlToImage || 'https://via.placeholder.com/400'} alt="" />
      <p><strong>Source:</strong> {article.source.name}</p>
      <p><strong>Author:</strong> {article.author || 'Unknown'}</p>
      <p><strong>Published:</strong> {article.publishedAt}</p>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read Full Article</a>
      <SummarizeButton content={article.content || article.description || article.title} />
    </div>
  );
}

export default ArticleDetail;