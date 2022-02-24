import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        totalAmount: updatedTotalAmount,
      };
    }
    case 'REMOVE': {
      return { totalAmount: 0 };
    }
  }
};
