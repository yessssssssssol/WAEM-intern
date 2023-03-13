import React, { useState, useEffect } from 'react';
import { API } from '../../config';
import { useParams } from 'react-router-dom';
import EditProductDetail from './EditProductDetail';
const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`${API.PRODUCTDETAIL}/${productId}`)
      .then((res) => res.json())
      .then((res) => setProduct(res[0]));
  }, [productId]);

  return (
    <div className='my-10 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 font-sans'>
      <div
        id='viewerBox'
        className='font-sans lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900 shadow-xl rounded-lg'
      >
        <h1 className='pt-4 text-2xl font-bold text-center text-second'>
          상품 정보 수정
        </h1>
        <p className='text-main flex justify-center text-sm'>
          책 제목과 내용, 가격만 수정 가능합니다.
        </p>
        <EditProductDetail product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;
