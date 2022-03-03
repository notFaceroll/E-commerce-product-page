import React, { useCallback, useState } from 'react';
import { imageArr as data } from './Images';

import classes from './Gallery.module.css';

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const pictureHandler = (event) => {
    const pictureId = event.target.id;
    setCurrent(pictureId);
  };

  return (
    <div className={classes.gallery}>
      {data.map((item, index) => (
        <div key={index}>
          <img
            src={item.picture.original}
            className={`${classes.hidden} ${
              current == index ? classes.shown : ''
            }`}
          />
        </div>
      ))}

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
  );
}
