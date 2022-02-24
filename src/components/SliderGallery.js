import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './SliderGallery.module.css';

import { imageArr } from './Images';

const SliderGallery = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={classes.card}>
      <Slider {...settings}>
        {imageArr.map((item) => (
          <div className={classes.pager}>
            <img src={item.picture.original} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderGallery;
