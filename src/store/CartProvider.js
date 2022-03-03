import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  totalPrice: 0,
  amount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const updatedTotalPrice =
        state.totalPrice + action.payload.price * action.payload.amount;
      return {
        totalPrice: updatedTotalPrice,
        amount: state.amount + action.payload.amount,
      };
    }
    case 'CLEAR': {
      return defaultCartState;
    }
  }
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, defaultCartState);
  const AddItemToCart = (product) => {
    dispatch({ type: 'ADD', payload: product });
  };

  const clearCartHandler = () => {
    dispatch({ type: 'CLEAR' });
  };

  const cartContext = {
    amount: state.amount,
    totalPrice: state.totalPrice,
    addItem: AddItemToCart,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
