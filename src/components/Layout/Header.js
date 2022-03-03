import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import Cart from '../Cart/Cart';
import userPicture from '../../images/image-avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SideNav from './SideNav';

const Header = (props) => {
  const [sideNav, setSideNav] = useState(false);

  const sideNavHandler = () => {
    setSideNav(!sideNav);
  };


  return (
    <header className={classes.header}>
      {sideNav && <SideNav onClose={sideNavHandler}/>}
      <FontAwesomeIcon
        icon={faBars}
        className={classes.icon}
        onClick={sideNavHandler}
      />
      <h1>sneakers</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      {props.cartActive && (
        <Cart onClose={props.onClose} product={props.product} />
      )}
      <HeaderCartButton onShowCart={props.onShowCart} />
      <div className={classes.user}>
        <img src={userPicture} alt="profile picture" />
      </div>
    </header>
  );
};

export default Header;
