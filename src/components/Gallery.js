import React from 'react';
import classes from './Gallery.module.css';
import { imageData } from './Images';

export default function Gallery() {
  return (
    <div className={classes.gallery}>
      <img src={imageData.Image1} />
    </div>
  );
}
