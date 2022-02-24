import classes from './Product.module.css';

const Product = (props) => {
  return (
    <section className="product">
      <div className="product__text">
        <span className={classes.logo}>sneaker company</span>
        <h2>{props.product.name}</h2>
        <p className={classes.description}>{props.product.description}</p>
      </div>
      <div className="product__price">
        <div className={classes['discount-box']}>
          <span className={classes['current-price']}>{`$${props.product.sellPrice}`}</span>
          <span className={classes.discount}>{`${props.product.discount}%`}</span>
        </div>
        <span className={classes['old-price']}>{`$${props.product.fullPrice}`}</span>
      </div>
      <div className={classes.actions}>
        <div className={classes.quantity}>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <button className={classes.add}>Add to cart</button>
      </div>
    </section>
  );
};

export default Product;
