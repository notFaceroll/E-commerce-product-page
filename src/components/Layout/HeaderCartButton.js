import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  let hasItems = cartCtx.amount > 0;

  return (
    <button className={classes.btn} onClick={props.onShowCart}>
      <FontAwesomeIcon icon={faCartShopping} />
      {hasItems && <span className={classes.cartItems}>{cartCtx.amount}</span>}
    </button>
  );
};

export default HeaderCartButton;
