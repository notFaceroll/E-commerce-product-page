import React from 'react';

const CartContext = React.createContext({
  // a template for autocomplete
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: () => {},
});

export default CartContext;
