import React, { useState, useEffect } from 'react';
import ProductMainCard from '../../components/ProductMainCard/ProductMainCard';
import ProductImage from '../ProductDetail/ProductImage';
const Main = () => {
  const [productMainCard, setProductMainCard] = useState([]);
  useEffect(() => {
    fetch('./data/product.json')
      .then((response) => response.json())
      .then((data) => setProductMainCard(data));
  }, []);

  return (
    <div className='w-full'>
      <div className='mt-1'>
        <ProductImage />
      </div>
      <div className='container mx-auto my-10 flex flex-wrap justify-center content-start'>
        {productMainCard.map((productMainCard) => (
          <ProductMainCard
            key={productMainCard.id}
            productMainCard={productMainCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
