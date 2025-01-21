import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Apple, Fish, Cookie, Dog, SprayCanIcon as Spray, Milk, Coffee, Croissant, Beer, Heart } from 'lucide-react';

const categories = [
  {
    id: 'fruits-vegetables',
    name: 'Fruits & Vegetables',
    icon: Apple,
    subcategories: ['Fruits', 'Vegetables']
  },
  {
    id: 'meat-fish',
    name: 'Meat & Fish',
    icon: Fish,
    subcategories: ['Fresh Meat', 'Fish']
  },
  {
    id: 'snacks',
    name: 'Snacks',
    icon: Cookie,
    subcategories: ['Chips', 'Chocolates']
  },
  {
    id: 'pet-care',
    name: 'Pet Care',
    icon: Dog,
    subcategories: ['Cat Food', 'Dog Food']
  },
  {
    id: 'home-cleaning',
    name: 'Home & Cleaning',
    icon: Spray
  },
  {
    id: 'dairy',
    name: 'Dairy',
    icon: Milk
  },
  {
    id: 'cooking',
    name: 'Cooking',
    icon: Coffee
  },
  {
    id: 'breakfast',
    name: 'Breakfast',
    icon: Croissant
  },
  {
    id: 'beverage',
    name: 'Beverage',
    icon: Beer
  },
  {
    id: 'health-beauty',
    name: 'Health & Beauty',
    icon: Heart
  }
];

function Sidebar({ activeCategory, onCategoryChange }) {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <aside className="sidebar">
      <div className="category-list">
        {categories.map(category => (
          <div key={category.id}>
            <div 
              className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => {
                onCategoryChange(category.id);
                if (category.subcategories) {
                  toggleCategory(category.id);
                }
              }}
            >
              <category.icon className="category-icon" />
              <span>{category.name}</span>
              {category.subcategories && (
                expandedCategories.includes(category.id) ? 
                  <ChevronUp className="ml-auto" size={16} /> : 
                  <ChevronDown className="ml-auto" size={16} />
              )}
            </div>
            
            {category.subcategories && expandedCategories.includes(category.id) && (
              <div className="subcategory-list">
                {category.subcategories.map(sub => (
                  <div 
                    key={sub}
                    className="category-item"
                    onClick={() => onCategoryChange(`${category.id}-${sub.toLowerCase()}`)}
                  >
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;

