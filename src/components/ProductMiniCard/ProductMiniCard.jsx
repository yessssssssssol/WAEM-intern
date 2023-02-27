import React, { useState, useEffect, useRef } from 'react';
import ProductMiniCardDetail from './ProductMiniCardDetail';

const ProductMiniCard = () => {
  const productItem = useRef();
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    // fetch(`http://172.20.10.4:3000/product/${productId}`)
    fetch(`./data/product.json`)
      .then((res) => res.json())
      .then((res) => setProductList(res));
  }, []);

  const deleteProduct = (e) => {
    console.log(productItem);
    // productItem.current.remove();
    e.stoppropagation();
    e.preventDefault();
  };

  const editProduct = (e) => {};

  return (
    <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
      {productList.map((product) => (
        <ProductMiniCardDetail
          key={product.id}
          product={product}
          productItem={productItem}
          deleteProduct={deleteProduct}
        />
      ))}
    </div>
  );
};

export default ProductMiniCard;
