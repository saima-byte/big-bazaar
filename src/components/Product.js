import React, { useState, useEffect } from 'react';
import Sidebar from './products/Sidebar';
import ProductCard from './products/ProductCard';
import Loading from './common/Loading';

const products = {
  'home-cleaning': [
    {
      id: 1,
      name: 'Ozmo Air Fabric Freshener',
      price: 20.00,
      discount: 25,
      quantity: 1,
      unit: 'pc',
      image: '/placeholder.svg?height=200&width=200',
    },
    {
      id: 2,
      name: 'Air Wick Essential Oils',
      price: 20.00,
      discount: 0,
      quantity: 1,
      unit: 'pc',
      image: '/placeholder.svg?height=200&width=200',
    },
  ],
  'dairy': [
    {
      id: 3,
      name: 'Organic Whole Milk',
      price: 4.99,
      discount: 0,
      quantity: 1,
      unit: 'gallon',
      image: '/placeholder.svg?height=200&width=200',
    },
  ],
  'cooking': [
    {
      id: 4,
      name: 'Extra Virgin Olive Oil',
      price: 15.99,
      discount: 20,
      quantity: 1,
      unit: 'bottle',
      image: '/placeholder.svg?height=200&width=200',
    },
  ],
  'breakfast': [
    {
      id: 5,
      name: 'Organic Oatmeal',
      price: 6.99,
      discount: 0,
      quantity: 1,
      unit: 'box',
      image: '/placeholder.svg?height=200&width=200',
    },
  ],
  'beverage': [
    {
      id: 6,
      name: 'Fresh Orange Juice',
      price: 5.99,
      discount: 10,
      quantity: 1,
      unit: 'bottle',
      image: '/placeholder.svg?height=200&width=200',
    },
  ],
  'health-beauty': [
    {
      id: 7,
      name: 'Natural Face Cream',
      price: 24.99,
      discount: 15,
      quantity: 1,
      unit: 'jar',
      image: '/placeholder.svg?height=200&width=200',
    },
  ]
};

function Products() {
  const [activeCategory, setActiveCategory] = useState('home-cleaning');
  const [loading, setLoading] = useState(true);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setCategoryProducts(products[activeCategory] || []);
      setLoading(false);
    }, 1000);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      {/* Inject internal styles */}
      <style>
        {`
          .products-container {
            display: flex;
            max-width: 1280px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }

          .sidebar {
            width: 250px;
            margin-right: 2rem;
          }

          .category-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .category-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            cursor: pointer;
            border-radius: 0.25rem;
            transition: background-color 0.2s;
          }

          .category-item:hover,
          .category-item.active {
            background-color: var(--primary-light);
            color: var(--primary);
          }

          .category-icon {
            width: 20px;
            height: 20px;
          }

          .subcategory-list {
            margin-left: 1.5rem;
          }

          .main-content {
            flex: 1;
          }

          .products-header {
            margin-bottom: 2rem;
          }

          .products-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text-heading);
          }

          .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1.5rem;
          }

          .product-card {
            background: white;
            border: 1px solid var(--border);
            border-radius: 0.5rem;
            overflow: hidden;
            transition: box-shadow 0.2s;
          }

          .product-card:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          .product-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }

          .product-content {
            padding: 1rem;
          }

          .product-unit {
            font-size: 0.75rem;
            color: var(--text-base);
            margin-bottom: 0.25rem;
          }

          .product-title {
            font-size: 1rem;
            font-weight: 500;
            color: var(--text-heading);
            margin-bottom: 0.5rem;
          }

          .price-container {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .product-price {
            font-weight: 600;
            color: var(--primary);
          }

          .original-price {
            font-size: 0.875rem;
            color: var(--text-base);
            text-decoration: line-through;
          }

          .add-to-cart {
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 0.25rem;
            padding: 0.25rem;
            cursor: pointer;
            transition: background-color 0.2s;
          }

          .add-to-cart:hover {
            background: var(--primary-hover);
          }

          .loading-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 200px;
          }

          .loading-spinner {
            border: 4px solid var(--border);
            border-top: 4px solid var(--primary);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div className="products-container">
        <Sidebar 
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        <main className="main-content">
          <div className="products-header">
            <h1 className="products-title">
              {activeCategory.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </h1>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <div className="products-grid">
              {categoryProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default Products;
