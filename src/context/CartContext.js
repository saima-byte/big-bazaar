import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );

      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: newItems };
      }
      
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (product, quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity }
    });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: productId, quantity }
    });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: productId
    });
  };

  return (
    <CartContext.Provider value={{ 
      cart: state, 
      addToCart, 
      updateQuantity, 
      removeFromCart 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

