import Gallery from './Gallery';
import Product from './Product';
import classes from './MainContent.module.css';
import { useState } from 'react';

import './MainContent.module.css';
import Lightbox from './Lightbox';

const MainContent = (props) => {

  // const [lightbox, setLightbox] = useState(false);

  // const hideLightboxHandler = () => {
  //   setLightbox(false);
  // };

  // const showLightboxHandler = () => {
  //   setLightbox(true);
  // };

  return (
    <main className={classes.main}>
      {/* {lightbox && <Lightbox onClose={hideLightboxHandler}/>} */}
      <Gallery />
      <Product product={props.product} />
    </main>
  );
};

export default MainContent;
