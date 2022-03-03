import React, { Component } from 'react';
import Slider from 'react-slick';
import { imageArr as data } from '../Images';
import classes from './ThirdSlider.module.css';

const baseUrl = '../../images/image-product-';

export default class CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function (i) {
        return (
          <a className={classes.card}>
            <img src={data[i].picture.original} />
          </a>
        );
      },
      dots: true,
      dotsClass: `slick-dots slick-thumb ${classes.list}`,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={classes.vessel}>
        <Slider {...settings}>
          {/* <div>
            <img src={data[0].picture.thumbnail} />
          </div>
          <div>
            <img src={data[1].picture.thumbnail} />
          </div>
          <div>
            <img src={data[2].picture.thumbnail} />
          </div>
          <div>
            <img src={data[3].picture.thumbnail} />
          </div> */}
          {data.map((item) => (
            <div >
              <img src={item.picture.thumbnail} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
