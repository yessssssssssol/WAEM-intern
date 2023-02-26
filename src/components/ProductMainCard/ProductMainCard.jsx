import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductMainCard = ({ productMainCard }) => {
  const { thumbnail, title, category, price, region, city, address } =
    productMainCard;

  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/productdetail/1`);
  };

  return (
    <div className='font-sans relative w-64 flex min-h-80 flex-col justify-center m-5'>
      <div
        onClick={goToDetail}
        className='mx-auto flex w-64 h-80 flex-col justify-center bg-white shadow-xl rounded-lg'
      >
        <img
          alt='productIMG'
          className='aspect-video w-64 h-64 rounded-t-lg object-cover object-center'
          src={thumbnail}
        />
        <div className='p-4'>
          <small className='text-[#333333] font-semibold'>{category}</small>
          <h1 className='text-base font-medium text-slate-900 pb-2'>{title}</h1>
          <p className='text-sm tracking-tight text-bold  font-bold leading-6'>
            {parseInt(price).toLocaleString()}원
          </p>
          <p className='text-sm text-gray-400 tracking-tight text-bold  font-normal leading-6'>
            {region} {city} {address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductMainCard;
