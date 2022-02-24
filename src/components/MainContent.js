import Gallery from "./Gallery";
import Product from "./Product";
import classes from './MainContent.module.css'
import SliderGallery from "./SliderGallery";

const MainContent = (props) => {
   return <main className={classes.main}>
       {/* <Gallery /> */}
       <SliderGallery />
       <Product product={props.product}/>
   </main>
};

export default MainContent;
