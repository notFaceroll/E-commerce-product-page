import classes from './Product.module.css';

const Product = () => {
  return (
    <section className="product">
      <div className="product__text">
        <span>sneaker company</span>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="product__price">
        <div>
          <span>$125.00</span> <span>50%</span>
        </div>
        <span>$250.00</span>
      </div>
      <div className={classes.actions}>
        <div className={classes.quantity}>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <button className={classes.add} >Add to cart</button>
      </div>
    </section>
  );
};

export default Product;
