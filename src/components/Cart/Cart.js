import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import classes from './Cart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { imageArr } from './../Images';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const productImage = imageArr[0].picture.thumbnail;

  const hasItems = cartCtx.amount > 0;
  const clearCart = () => {
    cartCtx.clearCart();
  };

  return (
    <aside className={classes.basket}>
      <div className={classes.cart}>
        <h3>Cart</h3>
        {!hasItems && <p className={classes.empty}>Your cart is empty!</p>}
        {hasItems && (
          <>
            <div>
              <div className={classes['cart-content']}>
                <figure>
                  <img src={productImage} alt="shoes thumbnail" />
                </figure>
                <div className={classes['cart-detail']}>
                  <p>{props.product.name}</p>
                  <p>
                    {`$${props.product.sellPrice} x ${cartCtx.amount}`}{' '}
                    <span>{`$${cartCtx.totalPrice}`}</span>
                  </p>
                </div>
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={faTrashCan}
                  onClick={clearCart}
                />
              </div>
            </div>
            <button>Checkout</button>
          </>
        )}
      </div>
    </aside>
  );
};

export default Cart;
