import React from 'react';
import chair from '../../assets/images/chair.jpeg';

const ProductMainCard = () => {
  return (
    <div className='relative flex min-h-screen flex-col justify-center m-5 flex-wrap'>
      <div className='mx-auto flex w-64 h-80 flex-col justify-center bg-white rounded-xl shadow-xl shadow-slate-300/60'>
        <img
          alt='productIMG'
          className='aspect-video w-96 h-80 rounded-t-xl object-cover object-center'
          src={chair}
        />
        <div className='p-4'>
          <small className='text-amber-400 font-semibold'>송파구 문정동</small>
          <h1 className='text-xl font-medium text-slate-900 pb-2'>
            의자 새거 팔아요
          </h1>
          <p className='text-sm tracking-tight text-slate-600  font-bold leading-6'>
            4,000원
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductMainCard;
