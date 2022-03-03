import React, { Component } from 'react';
import Slider from 'react-slick';

import { imageArr as data } from '../Images';
import classes from './SecondSlider.module.css';

export default class SecondSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className={classes.card}>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          {data.map((item) => (
            <div className={classes.product}>
              <img src={item.picture.original} />
            </div>
          ))}
        </Slider>

        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          className={classes.list}
        >
          {data.map((item) => (
            <div className={classes.thumb}>
              <img src={item.picture.thumbnail} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
