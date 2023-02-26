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
    return (
      <div className='w-full h-full'>
        <Slider {...settings}>
          <div className='w-[300px] h-[400px]'>
            <h3 className='w-full h-full bg-yellow-400'>1</h3>
          </div>
          <div className='w-[300px] h-[400px]'>
            <h3 className='w-full h-full bg-blue-400'>2</h3>
          </div>
          <div className='w-[300px] h-[400px]'>
            <h3 className='w-full h-full bg-green-400'>3</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
