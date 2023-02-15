import React from 'react';

const ProductDetailInfo = ({ product }) => {
  const { title, price, img, size } = product;
  console.log(product);

  return (
    <div
      id='viewerBox'
      className='lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900 shadow-xl rounded-lg'
    >
      <div className='mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8'>
        <div className='lg:w-1/2 flex justify-between items-strech bg-gray-50  px-2 py-20 md:py-6 md:px-6 lg:py-24'>
          <div className='flex items-center'>
            <button
              onclick='goPrev()'
              aria-label='slide back'
              className='focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100'
            >
              <svg
                className='w-10 h-10 lg:w-16 lg:h-16'
                viewBox='0 0 64 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M40 16L24 32L40 48'
                  stroke='#1F2937'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </button>
          </div>
          <div className='slider'>
            <div className='slide-ana lg:relative'>
              <div className='flex'>
                <img
                  src={img}
                  alt='A black chair with wooden legs'
                  className='w-full h-full'
                />
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            <button
              onclick='goNext()'
              aria-label='slide forward'
              className='focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100'
            >
              <svg
                className='w-10 h-10 lg:w-16 lg:h-16'
                viewBox='0 0 64 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M24 16L40 32L24 48'
                  stroke='#1F2937'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0'>
          <p className='text-base leading-normal text-gray-600 dark:text-white mt-2'>
            {size}
          </p>
          <h1 className='text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white'>
            {title}
          </h1>
          <p className='text-base leading-normal text-gray-600 dark:text-white mt-2'>
            {price}
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
    </div>
  );
};

export default ProductDetailInfo;
