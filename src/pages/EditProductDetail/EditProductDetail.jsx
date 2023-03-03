import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';
import rabbit from '../../assets/images/rabbit.jpeg';
const EditProductDetail = ({ product }) => {
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

  const [createProduct, setCreateProduct] = useState({
    productTitle: '',
    productPrice: '',
    productInfo: '',
  });
  const { productTitle, productPrice, productInfo } = createProduct;

  const handleProductInfo = (e) => {
    const { name, value } = e.target;
    setCreateProduct((prev) => ({ ...prev, [name]: value }));
    console.log(productInfo);
  };

  const navigate = useNavigate();
  const goToUser = () => {
    navigate('/userdetail');
  };

  const editProduct = (e) => {
    e.preventDefault();
    e.persist();

    let formData = new FormData();
    formData.append('title', JSON.stringify(productTitle));
    formData.append('price', JSON.stringify(parseInt(productPrice)));
    formData.append('content', JSON.stringify(productInfo));
    formData.append('categoryId', JSON.stringify(parseInt(category)));

    fetch(`${API.CREATE}`, {
      method: 'fetch',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiJ9.OQ.8YXeAtXK3ux3nVjRj9eYS7U_U1h2ygG7TWxyMrHesmc',
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message !== 'PRODUCT_REGISTER_SUCCESS') {
          return alert('다시 입력해주세요');
        } else {
          alert('상품 등록에 성공하셨습니다.');
          navigate('/');
        }
      });
  };

  return (
    <div className='mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-stretch justify-center lg:space-x-8'>
      <div className='lg:w-1/2 flex justify-between items-stretch  px-2 py-20 md:py-6 md:px-6 lg:py-24'>
        <div className='flex items-center w-full h-full]'>
          <div className='w-[300px] h-[400px]'>
            <img
              className='w-full h-full'
              src={product_image[0]}
              alt='product_image'
            />
          </div>
        </div>
      </div>
      <div className='lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0'>
        <p className='flex justify-end text-sm leading-normal text-gray-900 dark:text-white mt-2'>
          {region} {city} {address}
        </p>
        <div className='flex flex-row justify-end w-full h-8 mt-4 mb-8'>
          <div className='flex flex-row justify-center items-center shadow hover:bg-gray-400/10 h-[35px] w-[85px] border-solid cursor-pointer'>
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
        <input
          placeholder={title}
          name='productTitle'
          onChange={handleProductInfo}
          className='text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white cursor-pointer'
        />
        <textarea
          placeholder={content}
          name='productInfo'
          onChange={handleProductInfo}
          className='text-base leading-normal text-gray-600 dark:text-white mt-2'
        ></textarea>
        <input
          placeholder={parseInt(price).toLocaleString()}
          name='productPrice'
          onChange={handleProductInfo}
          className='text-base leading-normal text-gray-600 dark:text-white mt-2 cursor-pointer'
        />
        <p className='text-3xl font-medium text-gray-600 dark:text-white mt-8 md:mt-10'></p>
        <div className='flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16'>
          <button
            onClick={editProduct}
            className='w-full md:w-3/5 border border-gray-800 text-base font-medium leading-none  uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-[#333333] text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200'
          >
            Edit
          </button>
          <button
            onClick={goToUser}
            className='w-full md:w-2/5 border border-gray-800 text-base font-medium leading-none text-gray-800 dark:text-white uppercase py-6 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-transparent dark:border-white  focus:ring-gray-800 hover:bg-[#333333] hover:text-white dark:hover:bg-gray-800 '
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProductDetail;
