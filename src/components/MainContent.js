import Gallery from './Gallery';
import Product from './Product';
import classes from './MainContent.module.css';
import SliderGallery from './SliderGallery';
import SecondSlider from './Slider/SecondSlider';
import ThirdSlider from './Slider/ThirdSlider';
import Swiper from './Slider/Swiper';

import './MainContent.module.css';
import NewSlider from './Slider/NewSlider';

const MainContent = (props) => {
  return (
    <main className={classes.main}>
      <Gallery />
      {/* <SliderGallery /> */}
      {/* <SecondSlider /> */}
      {/* <ThirdSlider /> */}
      {/* <div className={classes.gallery}>
        <Swiper />
      </div> */}
      {/* <NewSlider /> */}
      <Product product={props.product} />
    </main>
  );
};

export default MainContent;
