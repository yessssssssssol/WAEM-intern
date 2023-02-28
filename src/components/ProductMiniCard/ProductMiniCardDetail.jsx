import React from 'react';

const ProductMiniCardDetail = ({ product, editProduct }) => {
  const { title, price, status, region, city, address, product_image, id } =
    product;

  const deleteProduct = (e) => {
    // productItem.current.remove();
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
    // e.stoppropagation();
    // e.preventDefault();

    fetch('http://172.20.10.4:3000/product', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className='hover:bg-gray-50 grid grid-cols-8 '>
      <div className=' gap-3 px-2 py-2 h-full items-center font-normal text-gray-900 '>
        <div className='relative h-14 w-10'>
          <img
            className='h-full w-full object-cover object-center'
            src={product_image}
            alt='thumbnail_image'
          />
        </div>
      </div>
      <div className='col-span-2 font-medium text-gray-700 py-4 text-left'>
        {title}
      </div>
      <div className='py-4'>
        <span className='inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600'>
          <span className='h-1.5 w-1.5 rounded-full bg-green-600'></span>
          {status}
        </span>
      </div>
      <div className='col-span-2 py-4'>
        {region} {city} {address}
      </div>
      <div className='py-4'>
        <span className='items-center py-2 text-xs font-bold text-second text-right'>
          {parseInt(price).toLocaleString()} 원
        </span>
      </div>
      <div className='py-4'>
        <div className='flex justify-nowrap'>
          <button onClick={deleteProduct}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='h-5 w-5'
              x-tooltip='tooltip'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
              />
            </svg>
          </button>
          <div onClick={editProduct}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='h-5 w-5'
              x-tooltip='tooltip'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMiniCardDetail;
