import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryTabs from './components/CategoryTabs';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';

function App() {
  return (
    <div>
      <Navbar />
      <CategoryTabs />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;