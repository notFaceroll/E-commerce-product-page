import React, { useState } from 'react';
import { imageArr as data } from './Images';

import classes from './Gallery.module.css';

import nextIcon from '../images/icon-next.svg';
import previusIcon from '../images/icon-previous.svg';

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const pictureHandler = (event) => {
    const pictureId = parseInt(event.target.id);
    setCurrent(pictureId);
  };

  const previusHandler = () => {
    if (current <= 0) {
      return;
    }
    setCurrent(current - 1);
  };

  const nextHandler = () => {
    if (current >= 3) {
      return;
    }
    setCurrent(current + 1);
  };

  const Backdrop = (props) => {
    return <div onClick={props.onClose} className={classes.backdrop}></div>;
  };

  const leftBtnClasses = `${classes['side-btn']} ${classes.left}`;
  const rightBtnClasses = `${classes['side-btn']} ${classes.right}`;

  return (
    <>
      <div className={classes.gallery}>
        <button className={leftBtnClasses} onClick={previusHandler}>
          <img src={previusIcon} alt="" />
        </button>
        {data.map((item, index) => (
          <div key={index}>
            <img
              onClick={toggleModal}
              src={item.picture.original}
              className={`${classes.hidden} ${
                current == index ? classes.shown : ''
              }`}
            />
          </div>
        ))}
        <button className={rightBtnClasses} onClick={nextHandler}>
          <img src={nextIcon} alt="" />
        </button>

        <div>
          <ul className={classes.pager}>
            {data.map((pic, index) => (
              <li
                key={index}
                onClick={pictureHandler}
                className={current == index ? classes.active : ''}
              >
                <img id={pic.id} src={pic.picture.thumbnail} />
              </li>
            ))}
          </ul>
        </div>
        {modal && (
          <>
            <Backdrop onClose={toggleModal} />
            <div className={classes.lightbox}>
              <button className={classes.close} onClick={toggleModal}>
                X
              </button>
              <button className={leftBtnClasses} onClick={previusHandler}>
                <img src={previusIcon} alt="" />
              </button>
              {data.map((item, index) => (
                <div key={index}>
                  <img
                    onClick={toggleModal}
                    src={item.picture.original}
                    className={`${classes.hidden} ${
                      current == index ? classes.shown : ''
                    }`}
                  />
                </div>
              ))}
              <button className={rightBtnClasses} onClick={nextHandler}>
                <img src={nextIcon} alt="" />
              </button>

              <div>
                <ul className={classes.pager}>
                  {data.map((pic, index) => (
                    <li
                      key={index}
                      onClick={pictureHandler}
                      className={current == index ? classes.active : ''}
                    >
                      <img id={pic.id} src={pic.picture.thumbnail} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
