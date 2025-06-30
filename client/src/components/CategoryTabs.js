import React from 'react';

function CategoryTabs({ onSelectCategory }) {
  const categories = ['Business', 'Technology', 'Sports', 'Health'];

  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className="category-button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;