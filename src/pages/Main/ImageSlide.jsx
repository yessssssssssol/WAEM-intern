import React, { Component } from 'react';
import Slider from 'react-slick';
import book from '../../assets/images/book.jpeg';
import book2 from '../../assets/images/book2.jpeg';
import book3 from '../../assets/images/book3.avif';
import book4 from '../../assets/images/book4.avif';

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
            <img className='w-full h-full' src={book4} alt='image_slide' />
          </div>
          <div className='w-[300px] h-[400px]'>
            <img className='w-full h-full' src={book3} alt='image_slide' />
          </div>
          <div className='w-[300px] h-[400px]'>
            <img className='w-full h-full' src={book} alt='image_slide' />
          </div>
          <div className='w-[300px] h-[400px]'>
            <img className='w-full h-full' src={book2} alt='image_slide' />
          </div>
        </Slider>
      </div>
    );
  }
}
