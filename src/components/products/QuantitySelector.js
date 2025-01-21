import React from 'react';
import { Minus, Plus } from 'lucide-react';

function QuantitySelector({ quantity, onQuantityChange, max }) {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (!max || quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button
        onClick={handleDecrease}
        className="quantity-btn"
        disabled={quantity <= 1}
      >
        <Minus size={16} />
      </button>
      <span className="quantity-display">{quantity}</span>
      <button
        onClick={handleIncrease}
        className="quantity-btn"
        disabled={max && quantity >= max}
      >
        <Plus size={16} />
      </button>
    </div>
  );
}

export default QuantitySelector;

