import React, { useState, useEffect } from 'react';
import { API } from '../../config';
import ProductMiniCardDetail from './ProductMiniCardDetail';

const ProductMiniCard = () => {
  const [productList, setProductList] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    // fetch(`http://172.20.10.4:3000/product/myPage`);
    fetch(`${API.MYPAGEPRODUCT}`)
      // fetch(`./data/product.json`)
      .then((res) => res.json())
      .then((res) => setProductList(res));
  }, []);

  return (
    <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
      {productList.map((product) => (
        <ProductMiniCardDetail key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductMiniCard;
