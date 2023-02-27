import React, { useState, useEffect, useNavigate } from 'react';
import ProductMiniCardDetail from './ProductMiniCardDetail';

const ProductMiniCard = () => {
  const [productList, setProductList] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    // fetch(`http://172.20.10.4:3000/product/${productId}`)
    fetch(`./data/product.json`)
      .then((res) => res.json())
      .then((res) => setProductList(res));
  }, []);

  const deleteProduct = (e) => {
    // productItem.current.remove();
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
    e.stoppropagation();
    e.preventDefault();

    //   fetch('#', {
    //     method: 'DELETE',
    //   })
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));
  };

  const editProduct = (e) => {
    console.log('hi');
  };

  return (
    <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
      {productList.map((product) => (
        <ProductMiniCardDetail
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
          editProduct={editProduct}
        />
      ))}
    </div>
  );
};

export default ProductMiniCard;
