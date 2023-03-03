import React, { useState, useEffect } from 'react';
import { API } from '../../config';
import { useParams } from 'react-router-dom';
import KakaoMap from '../../components/KakaoMap/KakaoMap';
import ProductDetailInfo from './ProductDetailInfo';

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    // fetch(`http://172.20.10.4:3000/product/${productId}`);
    fetch(`${API.PRODUCTDETAIL}/${productId}`)
      // fetch(`./data/product.json`)
      .then((res) => res.json())
      .then((res) => setProduct(res[0]));
  }, [productId]);

  return (
    <div className='my-10 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 font-sans'>
      <div
        id='viewerBox'
        className='font-sans lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900 shadow-xl rounded-lg'
      >
        <ProductDetailInfo product={product} />
        <KakaoMap product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;
