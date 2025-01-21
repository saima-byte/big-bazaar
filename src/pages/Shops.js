import React from 'react';
import { Building2 } from 'lucide-react';

const shops = [
  {
    id: 1,
    name: 'Fresh Mart',
    description: 'Your local grocery store for fresh produce and daily essentials',
    address: '123 Grocery St, Market District',
    phone: '(555) 123-4567',
  },
  {
    id: 2,
    name: 'Organic Valley',
    description: 'Specialized in organic and natural food products',
    address: '456 Health Ave, Green Zone',
    phone: '(555) 234-5678',
  },
  {
    id: 3,
    name: 'Super Foods',
    description: 'One-stop shop for all your grocery needs',
    address: '789 Super St, Shopping Center',
    phone: '(555) 345-6789',
  },
];

function Shops() {
  const styles = `
    .shops-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
    .shops-header {
      margin-bottom: 2rem;
    }
    .shops-title {
      font-size: 1.875rem;
      font-weight: 600;
      color: var(--text-heading);
    }
    .shops-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    .shop-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      padding: 1.5rem;
      transition: all 0.2s;
      cursor: pointer;
    }
    .shop-card:hover {
      border-color: var(--primary);
      transform: translateY(-2px);
    }
    .shop-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .shop-logo {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    .shop-name {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text-heading);
    }
    .shop-address {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      color: var(--text-base);
      font-size: 0.875rem;
      line-height: 1.4;
    }
    @media (max-width: 768px) {
      .shops-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  return (
    <>
      {/* Inject internal styles */}
      <style>{styles}</style>
      <main className="shops-container">
        <header className="shops-header">
          <h1 className="shops-title">Our Shops</h1>
        </header>
        <div className="shops-grid">
          {shops.map((shop) => (
            <div key={shop.id} className="shop-card">
              <div className="shop-header">
                <div className="shop-logo">
                  <Building2 size={24} />
                </div>
                <h2 className="shop-name">{shop.name}</h2>
              </div>
              <p>{shop.description}</p>
              <div className="shop-address">
                <span>Address:</span> {shop.address}
              </div>
              <div className="shop-address">
                <span>Phone:</span> {shop.phone}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Shops;
