import React, { useState, useEffect } from 'react';
import register from '../../assets/images/register.jpeg';
const SignUp = () => {
  const [city, setCity] = useState('');
  const [centre, setCentre] = useState('');
  const [cityList, setCityList] = useState([]);
  const [centreList, setCentreList] = useState([]);

  useEffect(() => {
    fetch('./data/city.json')
      .then((res) => res.json())
      .then((data) => {
        setCityList(data);
      });
  }, [city, centre]);
  useEffect(() => {
    fetch('./data/centre.json')
      .then((res) => res.json())
      .then((data) => {
        setCentreList(data.filter((item) => city === item.city_id));
      });
  }, [city, centre]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCentreChange = (e) => {
    setCentre(e.target.value);
  };

  /*
  const onClickCheckEmail = (e) => {
    e.preventDefault();
    fetch('#', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === '사용 불가능한 이메일입니다.') {
          alert('이미 사용 중인 이메일입니다.');
        } else {
          alert('사용 가능한 이메일입니다.');
        }
      });
  };
*/

  return (
    <div className='font-mono'>
      <div className='container mx-auto '>
        <div className='flex justify-center px-6 my-12'>
          <div className='w-full xl:w-3/4 lg:w-11/12 flex'>
            <img
              src={register}
              alt='registerIMG'
              className='w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg'
            />
            <div className='w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none'>
              <h3 className='pt-4 text-2xl text-center'>Create an Account!</h3>
              <form className='px-8 pt-6 pb-8 mb-4 bg-white rounded'>
                <div className='mb-4 md:flex md:justify-between'>
                  <div className='mb-4 md:mr-2 md:mb-0'>
                    <label className='block mb-2 text-sm font-bold text-gray-700'>
                      Name
                    </label>
                    <input
                      className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='Name'
                      type='text'
                      placeholder='Name'
                    />
                  </div>
                  <div className='md:ml-2'>
                    <label
                      className='block mb-2 text-sm font-bold text-gray-700'
                      for='nickName'
                    >
                      Nick Name
                    </label>
                    <input
                      className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='nickName'
                      type='text'
                      placeholder='Nick Name'
                    />
                  </div>
                </div>
                <div className='mb-4'>
                  <label
                    className='block mb-2 text-sm font-bold text-gray-700'
                    for='Email'
                  >
                    Email
                  </label>
                  <input
                    className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    id='email'
                    type='email'
                    placeholder='Email'
                  />
                </div>
                <div className='mb-4 md:flex md:justify-between'>
                  <div className='mb-4 md:mr-2 md:mb-0'>
                    <label className='block mb-2 text-sm font-bold text-gray-700'>
                      지역
                    </label>
                    <select className='w-36 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'>
                      <option value='region'>서울특별시</option>
                    </select>
                  </div>
                  <div className='md:ml-2'>
                    <label className='block mb-2 text-sm font-bold text-gray-700'>
                      구
                    </label>
                    <select
                      value={city}
                      onChange={handleCityChange}
                      className='w-36 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    >
                      {cityList.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='md:ml-2'>
                    <label className='block mb-2 text-sm font-bold text-gray-700'>
                      동
                    </label>
                    <select
                      value={centre.id}
                      onChange={handleCentreChange}
                      className='w-36 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    >
                      {centreList.map((centre) => (
                        <option key={centre.id} value={centre.id}>
                          {centre.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className='mb-4 md:flex md:justify-between'>
                  <div className='mb-4 md:mr-2 md:mb-0'>
                    <label className='block mb-2 text-sm font-bold text-gray-700'>
                      Password
                    </label>
                    <input
                      className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='password'
                      type='password'
                      placeholder='Password'
                    />
                  </div>
                  <div className='md:ml-2'>
                    <label className='block mb-2 text-sm font-bold text-gray-700'>
                      Confirm Password
                    </label>
                    <input
                      className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='c_password'
                      type='password'
                      placeholder='Confirm Password'
                    />
                  </div>
                </div>
                <div className='mb-6 text-center'>
                  <button
                    className='w-full px-4 py-2 font-bold text-white bg-gray-900 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline'
                    type='button'
                  >
                    Register Account
                  </button>
                </div>
                <hr className='mb-6 border-t' />
                <div className='text-center'>
                  <a
                    className='inline-block text-sm text-gray-500 align-baseline hover:text-gray-800'
                    href='/login'
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
