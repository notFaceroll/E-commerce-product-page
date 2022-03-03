import React from 'react';
import classes from './SideNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const SideNav = (props) => {
  return (
    <>
      <Backdrop onClose={props.onClose} />
      <div className={classes.nav}>
        <nav>
          <ul>
            <li>
            <FontAwesomeIcon icon={faXmark} onClick={props.onClose}/>
            </li>
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
      </div>
    </>
  );
};

export default SideNav;
