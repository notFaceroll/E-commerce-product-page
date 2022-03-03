import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './SliderGallery.module.css';

import { imageArr } from './Images';

const baseUrl = '../images/image-product-'

const SliderGallery = () => {
  var settings = {
    // customPaging: function(i) {
    //   return (
    //     <a>
    //       <img src={imageArr[i].picture.thumbnail} />
    //     </a>
    //   );
    // },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={classes.card}>
      <Slider {...settings}>
        {imageArr.map((item) => (
          <div className={classes.product}>
            <img src={item.picture.original} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderGallery;
