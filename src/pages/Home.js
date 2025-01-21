import React from 'react';
import '../styles/hero.css';

function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Groceries Delivered in 90 Minute</h1>
        <p className="hero-subtitle">
          Get your healthy foods & snacks delivered at your doorsteps all day everyday
        </p>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search your products from here"
          />
          <button className="search-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

