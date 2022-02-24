import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import Cart from '../Cart/Cart';
import userPicture from '../../images/image-avatar.png';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>sneakers</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Collections</a>
          </li>
          <li>
            <a href="/">Men</a>
          </li>
          <li>
            <a href="/">Women</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      {props.cartActive && <Cart onClose={props.onClose} />}
      <HeaderCartButton onShowCart={props.onShowCart}/>
      <div className={classes['user-photo']}>
        <img src={userPicture} alt="profile picture" />
      </div>
    </header>
  );
};

export default Header;
