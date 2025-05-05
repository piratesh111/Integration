"use client"


const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <aside className="category-filter">
      <div className="header">
        <h2>Categories</h2>
      </div>
      <div className="categories-list">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  )
}

export default CategoryFilter
