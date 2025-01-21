import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight } from 'lucide-react';

function Footer() {
  const styles = `
    .footer {
      background: white;
      border-top: 1px solid var(--border);
      padding: 3rem 0;
    }
    
    .footer-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }
    
    .footer-logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-heading);
      margin-bottom: 1rem;
    }
    
    .footer-address {
      color: var(--text-base);
      margin-bottom: 0.5rem;
    }
    
    .footer-contact {
      color: var(--text-base);
    }
    
    .footer-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .footer-title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-heading);
    }
    
    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    
    .footer-link {
      color: var(--text-base);
      transition: color 0.2s;
    }
    
    .footer-link:hover {
      color: var(--primary);
    }
    
    .newsletter-form {
      display: flex;
      gap: 0.5rem;
    }
    
    .newsletter-input {
      flex: 1;
      padding: 0.75rem;
      border: 1px solid var(--border);
      border-radius: 0.375rem;
      font-size: 0.875rem;
    }
    
    .newsletter-button {
      padding: 0.75rem;
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 0.375rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    
    .newsletter-button:hover {
      background: var(--primary-hover);
    }
  `;

  return (
    <footer className="footer">
      {/* Inject internal CSS */}
      <style>{styles}</style>

      <div className="footer-container">
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <Leaf className="h-6 w-6" />
            PickBazar
          </Link>
          <p className="footer-address">NY State Thruway, New York, USA</p>
          <p className="footer-contact">
            demo@demo.com<br />
            +12929012122
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Explore</h3>
          <div className="footer-links">
            <Link to="/shops" className="footer-link">Shops</Link>
            <Link to="#" className="footer-link">Authors</Link>
            <Link to="#" className="footer-link">Flash Deals</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Customer Service</h3>
          <div className="footer-links">
            <Link to="#" className="footer-link">FAQ & Helps</Link>
            <Link to="#" className="footer-link">Vendor Refund Policies</Link>
            <Link to="#" className="footer-link">Customer Refund Policies</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Our Information</h3>
          <div className="footer-links">
            <Link to="#" className="footer-link">Manufacturers</Link>
            <Link to="#" className="footer-link">Privacy policies</Link>
            <Link to="#" className="footer-link">Terms & conditions</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Subscribe Now</h3>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe your email for newsletter and featured news based on your interest
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Write your email here"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
