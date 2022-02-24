import Gallery from "./Gallery";
import Product from "./Product";
import classes from './MainContent.module.css'
import SliderGallery from "./SliderGallery";

const MainContent = () => {
   return <main className={classes.main}>
       {/* <Gallery /> */}
       <SliderGallery />
       <Product />
   </main>
};

export default MainContent;
