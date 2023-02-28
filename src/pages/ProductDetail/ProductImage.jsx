import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const { image } = this.props;

    return (
      <div className='w-full h-full'>
        <Slider {...settings}>
          {image.map((item) => (
            <div className='w-[300px] h-[400px]'>
              <img
                className='w-full h-full'
                key={item.id}
                src={item}
                alt='image_slide'
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
