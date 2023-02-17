import React, { useState, useEffect, useCallback, useRef } from 'react';
import { API } from '../../config';
import UploadImg from './UploadImg';
import DragDrop from './DragDrop';

const CreateProductDetail = () => {
  const [city, setCity] = useState('');
  const [centre, setCentre] = useState('');
  const [cityList, setCityList] = useState([]);
  const [centreList, setCentreList] = useState([]);
  const [category, setCategory] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [files, setFiles] = useState([]);
  const dragRef = useRef(null);
  const fileId = useRef(0);

  const [createProduct, setCreateProduct] = useState({
    productTitle: '',
    productPrice: '',
    productInfo: '',
  });
  const { productTitle, productPrice, productInfo } = createProduct;

  // useEffect(() => {
  //   handleProductInfo();
  // }, [createProduct]);

  const handleProductInfo = (e) => {
    const { name, value } = e.target;
    setCreateProduct((prev) => ({ ...prev, [name]: value }));
    console.log(productInfo);
  };

  useEffect(() => {
    fetch('./data/category.json')
      .then((res) => res.json())
      .then((data) => {
        setCategoryList(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${API.SIGNUP}`)
      .then((res) => res.json())
      .then((data) => {
        setCityList(data.city);
      });
  }, [city, centre]);

  useEffect(() => {
    fetch(`${API.SIGNUP}`)
      .then((res) => res.json())
      .then((data) => {
        setCentreList(data.address.filter((item) => city == item.city_id));
      });
  }, [city, centre]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCentreChange = (e) => {
    setCentre(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const onChangeFiles = useCallback(
    (e) => {
      if (files.length < 5) {
        let selectFiles = [];
        let tempFiles = files;

        if (e.type === 'drop') {
          selectFiles = e.dataTransfer.files;
        } else {
          selectFiles = e.target.files;
        }

        for (const file of selectFiles) {
          tempFiles = [
            ...tempFiles,
            {
              id: fileId.current++,
              object: file,
            },
          ];
        }
        setFiles(tempFiles);
      } else {
        alert('사진은 최대 5장 입니다.');
        console.log(files);
      }
    },
    [files]
  );
  const onClickCreateProduct = (e) => {
    e.preventDefault();
    e.persist();

    let formData = new FormData();
    console.log('file : ', files);
    files.map((file) => {
      formData.append('images', file.object);
    });
    // title, price, content, category_id
    formData.append('title', JSON.stringify(productTitle));
    formData.append('price', JSON.stringify(parseInt(productPrice)));
    formData.append('content', JSON.stringify(productInfo));
    formData.append('categoryId', JSON.stringify(parseInt(category)));
    formData.append('regionId', JSON.stringify(parseInt(1)));
    formData.append('cityId', JSON.stringify(parseInt(city)));
    formData.append('addressId', JSON.stringify(parseInt(centre)));

    fetch(`${API.CREATE}`, {
      method: 'POST',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiJ9.OQ.8YXeAtXK3ux3nVjRj9eYS7U_U1h2ygG7TWxyMrHesmc',
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
      });
  };

  console.log(productTitle);
  /*
  const previewImg = () => {
    const file = document.querySelector('input[type=file]').files[0];
    const preview = document.querySelector('#imgBox');
    const reader = new FileReader();
    reader.onLoad = () => {
      const dataURL = reader.result;
      preview.src = `${dataURL}`;
    };
    console.log('reader : ', reader);
    console.log('file : ', file);
    console.log('files : ', files);
    console.log('reader.result : ', reader.result);

    if (file) {
      reader.readAsDataURL(file);
      console.log('reader.result : ', reader.result);
    }
  };
  */

  return (
    <div className='w-full font-sans my-24 container mx-auto'>
      <div className='w-full justify-center px-6 my-12'>
        <div className='mt-5 md:col-span-2 md:mt-0'>
          <form action='#' method='POST'>
            <div className='shadow sm:overflow-hidden sm:rounded-md'>
              <div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
                <h3 className='pt-4 text-2xl text-center'>상품 등록하기</h3>
                <div className='w-full'>
                  <div className='col-span-1'>
                    <label
                      htmlFor='title'
                      className='block text-sm text-gray-700 font-bold'
                    >
                      Title
                    </label>
                    <div className='mt-1 flex rounded-md shadow-sm'>
                      <input
                        type='text'
                        name='productTitle'
                        onChange={handleProductInfo}
                        className='block w-full flex-1 rounded-md border-gray-300 focus:border-[#333333] focus:ring-[#333333] sm:text-sm'
                        placeholder='Title'
                      />
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                  <div className='col-span-2'>
                    <label
                      htmlFor='company-website'
                      className='block text-sm font-bold text-gray-700'
                    >
                      Price
                    </label>
                    <div className='mt-1 flex rounded-md shadow-sm'>
                      <input
                        type='text'
                        name='productPrice'
                        onChange={handleProductInfo}
                        className='block w-full flex-1 rounded-md border-gray-300 focus:border-[#333333] focus:ring-[#333333] sm:text-sm'
                        placeholder='Price'
                      />
                    </div>
                  </div>
                  <div className='col-span-1'>
                    <label
                      htmlFor='company-website'
                      className='block text-sm font-bold text-gray-700'
                    >
                      Category
                    </label>
                    <div className='mt-1 flex rounded-md shadow-sm'>
                      <select
                        name='category'
                        value={category.id}
                        onChange={handleCategoryChange}
                        className='block w-full flex-1 rounded-md border-gray-300 focus:border-[#333333] focus:ring-[#333333] sm:text-sm'
                        placeholder='Title'
                      >
                        {categoryList.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                  <div className='col-span-1'>
                    <label
                      htmlFor='company-website'
                      className='block text-sm font-bold text-gray-700'
                    >
                      시
                    </label>
                    <div className='mt-1 flex rounded-md shadow-sm'>
                      <select
                        name='price'
                        className='block w-full flex-1 rounded-md border-gray-300 focus:border-[#333333] focus:ring-[#333333] sm:text-sm'
                      >
                        <option>서울특별시</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-span-1'>
                    <label
                      htmlFor='company-website'
                      className='block text-sm font-bold text-gray-700'
                    >
                      구
                    </label>
                    <div className='mt-1 flex rounded-md shadow-sm'>
                      <select
                        value={city}
                        onChange={handleCityChange}
                        className='block w-full flex-1 rounded-md border-gray-300 focus:border-[#333333] focus:ring-[#333333] sm:text-sm'
                      >
                        {cityList.map((city) => (
                          <option key={city.id} value={city.id}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='col-span-1'>
                    <label
                      htmlFor='company-website'
                      className='block text-sm font-bold text-gray-700'
                    >
                      동
                    </label>
                    <div className='mt-1 flex rounded-md shadow-sm'>
                      <select
                        value={centre.id}
                        onChange={handleCentreChange}
                        className='block w-full flex-1 rounded-md border-gray-300 focus:border-[#333333] focus:ring-[#333333] sm:text-sm'
                      >
                        {centreList.map((centre) => (
                          <option key={centre.id} value={centre.id}>
                            {centre.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='productInfo'
                    className='block text-sm font-bold text-gray-700'
                  >
                    Product Info
                  </label>
                  <div className='mt-1'>
                    <textarea
                      name='productInfo'
                      rows={3}
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#333333] focus:ring-[#333333] sm:text-sm'
                      placeholder='Product Info'
                      defaultValue={''}
                      onChange={handleProductInfo}
                    />
                  </div>
                </div>
                <div>
                  <label className='block text-sm font-bold text-gray-700'>
                    Product photo(Max 5 pictures)
                  </label>

                  <DragDrop
                    files={files}
                    setFiles={setFiles}
                    onChangeFiles={onChangeFiles}
                    dragRef={dragRef}
                    fileId={fileId}
                  />
                </div>
              </div>
              <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                <button
                  type='submit'
                  className='inline-flex justify-center rounded-md border border-transparent bg-[#333333] py-2 px-4 text-sm font-bold text-white shadow-sm hover:bg-[#111111] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  onClick={onClickCreateProduct}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProductDetail;
