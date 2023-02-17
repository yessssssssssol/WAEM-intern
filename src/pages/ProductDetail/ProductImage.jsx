import React from 'react';
import Slider from 'react-slick';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className='w-full flex'>
        <h3 className='flex justify-center bg-gray-100 w-full h-80'>1</h3>
      </div>
      <div>
        <h3 className='flex justify-center bg-gray-200 w-full h-80'>2</h3>
      </div>
      <div>
        <h3 className='flex justify-center bg-gray-300 w-full h-80'>3</h3>
      </div>
      <div>
        <h3 className='flex justify-center bg-gray-400 w-full h-80'>4</h3>
      </div>
      <div>
        <h3 className='flex justify-center bg-slate-500 w-full h-80'>5</h3>
      </div>
    </Slider>
  );
}
