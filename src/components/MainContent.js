import Gallery from './Gallery';
import Product from './Product';

import classes from './MainContent.module.css';
import './MainContent.module.css';

const MainContent = (props) => {
  return (
    <main className={classes.main}>
      <Gallery />
      <Product product={props.product} />
    </main>
  );
};

export default MainContent;
