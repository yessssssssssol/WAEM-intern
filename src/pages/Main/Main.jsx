import React, { useState } from 'react';
import ProductMainCard from '../../components/ProductMainCard/ProductMainCard';

const Main = () => {
  const [productMainCard, setProductMainCard] = useState([]);
  fetch(
    'https://my-json-server.typicode.com/legobitna/hnm-react-router/products/'
  )
    .then((response) => response.json())
    .then((data) => setProductMainCard(data));

  return (
    <div className='w-full'>
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
