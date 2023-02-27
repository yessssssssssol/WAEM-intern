import React from 'react';
import { useNavigate } from 'react-router-dom';
import rabbit from '../../assets/images/rabbit.jpeg';
import ProductImage from './ProductImage';

const ProductDetailInfo = ({ product }) => {
  const {
    title,
    price,
    content,
    category,
    nickname,
    region,
    city,
    address,
    product_image,
  } = product;
  const navigate = useNavigate();
  const goToUser = () => {
    navigate('/userdetail');
  };

  return (
    <div className='mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-stretch justify-center lg:space-x-8'>
      <div className='lg:w-1/2 flex justify-between items-stretch  px-2 py-20 md:py-6 md:px-6 lg:py-24'>
        <div className='flex items-center w-full h-full]'>
          {/* <ProductImage image={product_image} /> */}
        </div>
      </div>
      <div className='lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0'>
        <p className='flex justify-end text-sm leading-normal text-gray-900 dark:text-white mt-2'>
          {region} {city} {address}
        </p>
        <div className='flex flex-row justify-end w-full h-8 mt-4 mb-8'>
          <div
            onClick={goToUser}
            className='flex flex-row justify-center items-center shadow hover:bg-gray-400/10 h-[35px] w-[85px] border-solid cursor-pointer'
          >
            <p className='flex flex-col justify-center mr-2 text-sm font-semibold'>
              {nickname}
            </p>
            <img
              src={rabbit}
              alt='profile'
              className='shadow-xl rounded-full align-middle border-none lg: w-8 h-8'
            />
          </div>
        </div>
        <p className='text-base leading-normal text-gray-600 dark:text-white mt-2'>
          {category}
        </p>
        <h1 className='text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white'>
          {title}
        </h1>
        <p className='text-base leading-normal text-gray-600 dark:text-white mt-2'>
          {content}
        </p>
        <p className='text-base leading-normal text-gray-600 dark:text-white mt-2'>
          {parseInt(price).toLocaleString()}원
        </p>
        <p className='text-3xl font-medium text-gray-600 dark:text-white mt-8 md:mt-10'></p>
        <div className='flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16'>
          <button className='w-full md:w-3/5 border border-gray-800 text-base font-medium leading-none  uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-[#333333] text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200'>
            Contact me
          </button>
          <button className='w-full md:w-2/5 border border-gray-800 text-base font-medium leading-none text-gray-800 dark:text-white uppercase py-6 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-transparent dark:border-white  focus:ring-gray-800 hover:bg-[#333333] hover:text-white dark:hover:bg-gray-800 '>
            like
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
