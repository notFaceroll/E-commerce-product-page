import { useState, useContext } from 'react';
import CartContext from '../store/cart-context';

import classes from './Product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const objData = {
  id: 'o1',
  name: 'Fall Limited Edition Sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.',
  fullPrice: 250.0,
  discount: 50,
  sellPrice: 125,
};

const Product = (props) => {
  const [quantity, setQuantity] = useState(0);
  const cartCtx = useContext(CartContext);

  const addToCart = () => {
    const { sellPrice } = objData;
    cartCtx.addItem({ price: sellPrice, amount: quantity });
  };

  const addQuantityHandler = () => {
    setQuantity(quantity + 1);
  };

  const removeQuantityHandler = () => {
    if (quantity <= 0) {
      return;
    }
    setQuantity(quantity - 1);
  };

  return (
    <section className={classes.product}>
      <div className="product__text">
        <span className={classes.logo}>sneaker company</span>
        <h2 className={classes.name}>{props.product.name}</h2>
        <p className={classes.description}>{props.product.description}</p>
      </div>
      <div className={classes.price}>
        <div className={classes['discount-box']}>
          <span
            className={classes['current-price']}
          >{`$${props.product.sellPrice}`}</span>
          <span
            className={classes.discount}
          >{`${props.product.discount}%`}</span>
        </div>
        <span
          className={classes['old-price']}
        >{`$${props.product.fullPrice}`}</span>
      </div>
      <div className={classes.actions}>
        <div className={classes.quantity}>
          <button onClick={removeQuantityHandler}>-</button>
          <div>{quantity}</div>
          <button onClick={addQuantityHandler}>+</button>
        </div>
        <button onClick={addToCart} className={classes.add}>
        <FontAwesomeIcon icon={faCartShopping} className={classes.cartIcon}/> &nbsp;Add to cart
        </button>
      </div>
    </section>
  );
};

export default Product;
