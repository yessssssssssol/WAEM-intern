import React, { useState, useEffect } from 'react';
import { API } from '../../config';
import ProductMainCard from '../../components/ProductMainCard/ProductMainCard';
import ImageSlide from './ImageSlide';
import SearchBar from '../../components/SearchBar/SearchBar';

const Main = () => {
  const [productMainCard, setProductMainCard] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    fetch(`${API.MAIN}`)
      // fetch('./data/productList.json')
      .then((response) => response.json())
      .then((data) => setSearchProduct(data));
  }, []);

  useEffect(() => {
    fetch(`${API.MAIN}`)
      // fetch('./data/product.json')
      .then((response) => response.json())
      .then((data) => setProductMainCard(data));
  }, []);

  const searchBook = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredBook = searchProduct.filter((product) =>
    product.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className='w-full'>
      <div className='mt-1'>
        <ImageSlide />
        <SearchBar searchBook={searchBook} searchKeyword={searchKeyword} />
        <div className='container mx-auto my-10 flex flex-wrap justify-center content-start'>
          {filteredBook.map((productMainCard) => (
            <ProductMainCard
              key={productMainCard.id}
              productMainCard={productMainCard}
            />
          ))}
        </div>
      </div>
      {/* <div className='container mx-auto my-10 flex flex-wrap justify-center content-start'>
        {productMainCard.map((productMainCard) => (
          <ProductMainCard
            key={productMainCard.id}
            productMainCard={productMainCard}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Main;
