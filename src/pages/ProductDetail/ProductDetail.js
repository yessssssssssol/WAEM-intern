import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import ProductDetailInfo from './ProductDetailInfo';

const ProductDetail = () => {
  const [product, setProduct] = useState('');
  // const { productId } = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/legobitna/hnm-react-router/products/1`
    )
      .then((result) => result.json())
      .then((res) => setProduct(res));
  }, []);

  return (
    <div className='my-10 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 font-mono'>
      <ProductDetailInfo product={product} />
    </div>
  );
};

export default ProductDetail;
