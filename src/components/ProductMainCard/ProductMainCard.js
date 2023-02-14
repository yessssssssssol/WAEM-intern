import React from 'react';

const ProductMainCard = ({ productMainCard }) => {
  const { img, title, size, price } = productMainCard;

  return (
    <div className='font-mono relative w-64 flex min-h-80 flex-col justify-center m-5'>
      <div className='mx-auto flex w-64 h-80 flex-col justify-center bg-white rounded-xl shadow-lg'>
        <img
          alt='productIMG'
          className='aspect-video w-64 h-64 rounded-t-xl object-cover object-center'
          src={img}
        />
        <div className='p-4'>
          <small className='text-[#333333] font-semibold'>{size}</small>
          <h1 className='text-xl font-medium text-slate-900 pb-2'>{title}</h1>
          <p className='text-sm tracking-tight text-bold  font-bold leading-6'>
            {price}
          </p>
          <p className='text-sm tracking-tight text-bold  font-normal leading-6'>
            Like 3 | Chat 5
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductMainCard;
