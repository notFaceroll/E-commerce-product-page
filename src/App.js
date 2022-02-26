import { useState } from 'react';
import Header from './components/Layout/Header';
import MainContent from './components/MainContent';
import CartProvider from './store/CartProvider';


const objData = {
  id: 'o1',
  name: 'Fall Limited Edition Sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.',
  fullPrice: 250.0,
  discount: 50,
  sellPrice: 125.0,
};

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCart = () => {
    setCartIsVisible(true);
  };

  const hideCart = () => {
    setCartIsVisible(false);
  };

  const cartWindow = () => {
    setCartIsVisible(!cartIsVisible);
  }

  return (
    <CartProvider>
      <Header
        cartActive={cartIsVisible}
        onShowCart={cartWindow}
        onClose={hideCart}
        product={objData}
      />
      <MainContent product={objData}/>
    </CartProvider>
  );
}

export default App;
