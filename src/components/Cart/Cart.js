import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.amount > 0;
  const clearCart = () => {
      cartCtx.clearCart();
  }

  return (
    <aside className={classes.basket}>
      <div className={classes.cart}>
        <h3>Cart</h3>
        <div>
          {!hasItems && <p>Your cart is empty!</p>}
          {hasItems && (
            <div>
              <img />
              <div>
                <p>{props.name}</p>
                <span>{`$${props.product.sellPrice} x ${cartCtx.amount}`}</span>{' '}
                <span>{`$${cartCtx.totalPrice}`}</span>
              </div>
              <i onClick={clearCart} >Trash Icon</i>
            </div>
          )}
        </div>
        <button>Checkout</button>
      </div>
    </aside>
  );
};

export default Cart;
