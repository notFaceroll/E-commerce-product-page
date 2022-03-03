import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import classes from './NewSlider.module.css';
import { imageArr as data } from '../Images';

class NewSlider extends React.Component {
  render() {
    return (
      <div className={classes.card}>
        <Carousel
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          transitionTime="500"
        >
          {data.map((item, index) => (
            <div>
              <img src={item.picture.original} />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default NewSlider;
