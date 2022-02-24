import classes from './HeaderCartButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const HeaderCartButton = (props) => {
    return <button className={classes.btn} onClick={props.onShowCart}>
        <FontAwesomeIcon icon={faCartShopping} />
    </button>
}

export default HeaderCartButton;