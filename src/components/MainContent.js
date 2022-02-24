import Gallery from "./Gallery";
import Product from "./Product";
import classes from './MainContent.module.css'

const MainContent = () => {
   return <main className={classes.main} >
       <Gallery />
       <Product />
   </main>
};

export default MainContent;
