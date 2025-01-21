import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';
import QuantitySelector from '../components/products/QuantitySelector';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  console.log('Product ID:', id); // Log the id for now
  const [quantity, setQuantity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const { addToCart } = useCart();

  // In a real app, fetch product data based on id
  const product = {
    id: 1,
    name: 'Attitude Bubble Bath',
    price: 16.0,
    originalPrice: 20.0,
    discount: 20,
    description:
      'Bath gel is a specialized liquid product used for cleaning the body during baths. Not to be confused with liquid soaps, bath gels, in fact, do not contain any soap. They are more gentle on the skin and create a luxurious bathing experience...',
    size: '200ml',
    stock: 50,
    image: '/placeholder.svg?height=600&width=600',
    categories: ['health & beauty', 'bath'],
    seller: 'Grocery Shop',
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const styles = `
    .product-detail {
      padding: 2rem;
    }
    .product-detail-container {
      max-width: 1280px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
    .product-image-section {
      position: relative;
    }
    .product-detail-image {
      width: 100%;
      border-radius: 0.5rem;
      object-fit: cover;
    }
    .product-info-section {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .product-detail-title {
      font-size: 1.875rem;
      font-weight: 600;
      color: var(--text-heading);
    }
    .product-detail-size {
      color: var(--text-base);
      font-size: 0.875rem;
    }
    .product-rating {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .stars {
      display: flex;
      gap: 0.25rem;
    }
    .star-filled {
      fill: var(--primary);
      stroke: var(--primary);
    }
    .star-empty {
      fill: none;
      stroke: var(--text-base);
    }
    .rating-count {
      color: var(--text-base);
      font-size: 0.875rem;
    }
    .product-description {
      color: var(--text-base);
      line-height: 1.6;
    }
    .read-more {
      color: var(--primary);
      background: none;
      border: none;
      padding: 0;
      margin-left: 0.5rem;
      cursor: pointer;
    }
    .product-price {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .current-price {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--primary);
    }
    .original-price {
      color: var(--text-base);
      text-decoration: line-through;
    }
    .add-to-cart-section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .add-to-cart-button {
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 0.375rem;
      padding: 0.75rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .add-to-cart-button:hover {
      background: var(--primary-hover);
    }
    .product-meta {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-top: 1px solid var(--border);
      padding-top: 1rem;
    }
    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .meta-tags {
      display: flex;
      gap: 0.5rem;
    }
    .category-tag {
      background: var(--border);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.875rem;
    }
    .seller-link {
      color: var(--primary);
      cursor: pointer;
    }
    .seller-link:hover {
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      .product-detail-container {
        grid-template-columns: 1fr;
      }
    }
  `;

  return (
    <>
      {/* Inject internal styles */}
      <style>{styles}</style>
      <div className="product-detail">
        <div className="product-detail-container">
          <div className="product-image-section">
            {product.discount > 0 && <span className="discount-badge">{product.discount}% OFF</span>}
            <img src={product.image} alt={product.name} className="product-detail-image" />
          </div>

          <div className="product-info-section">
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-size">{product.size}</p>
            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={i < 0 ? 'star-filled' : 'star-empty'} size={16} />
                ))}
              </div>
              <span className="rating-count">0 reviews</span>
            </div>
            <p className="product-description">
              {isExpanded ? product.description : `${product.description.slice(0, 100)}...`}
              <button className="read-more" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? 'Read less' : 'Read more'}
              </button>
            </p>
            <div className="product-price">
              <span className="current-price">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="original-price">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            <div className="add-to-cart-section">
              <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} max={product.stock} />
              <span className="stock-info">{product.stock} pieces available</span>
            </div>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add To Shopping Cart
            </button>
            <div className="product-meta">
              <div className="meta-item">
                <span className="meta-label">Categories:</span>
                <div className="meta-tags">
                  {product.categories.map((category) => (
                    <span key={category} className="category-tag">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <div className="meta-item">
                <span className="meta-label">Sellers:</span>
                <span className="seller-link">{product.seller}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
