import React, { useState } from 'react';
import classes from './Gallery.module.css';
import { imageArr } from './Images';

export default function Gallery() {
  const initialPicture = imageArr[0].picture.original;
  const [picture, setPicture] = useState(initialPicture);

  const focusedPictureHandler = (event) => {
    const selectedImageId = event.target.id;
    const selectedImg = imageArr.find((img) => img.id == selectedImageId);
    setPicture(selectedImg.picture.original);
  };

  return (
    <div className={classes.gallery}>
      <div className={classes.focused}>
        <img src={picture} />
      </div>
      <div>
        <ul className={classes.pager}>
          {imageArr.map((pic) => (
            <li key={pic.id} onClick={focusedPictureHandler}>
              <img id={pic.id} src={pic.picture.thumbnail} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
