import React from 'react';

const CartContext = React.createContext({
  // a template for autocomplete
  totalPrice: 0,
  quantity: 0,
  addItem: (item) => {},
  removeItem: () => {},
});

export default CartContext;
