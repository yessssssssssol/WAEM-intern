import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';
import register from '../../assets/images/register.jpeg';
const SignUp = () => {
  const [city, setCity] = useState('');
  const [centre, setCentre] = useState('');
  const [cityList, setCityList] = useState([]);
  const [centreList, setCentreList] = useState([]);

  const [userInfo, setUserInfo] = useState({
    name: '',
    nickname: '',
    email: '',
    password: '',
    passwordCheck: '',
  });

  const { name, nickname, email, password, passwordCheck } = userInfo;

  const navigate = useNavigate();

  const handleUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

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
        // setCentreList(data.address.filter((item) => city === item.city_id));
        setCentreList(data.address.filter((item) => city == item.city_id));
      });
  }, [city, centre]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCentreChange = (e) => {
    setCentre(e.target.value);
  };

  const onClickCheckEmail = (e) => {
    e.preventDefault();
    fetch(`${API.EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.message === 'EMAIL_ALREADY_EXISTS') {
          alert('이미 사용 중인 이메일입니다.');
        } else {
          alert('사용 가능한 이메일입니다.');
        }
      });
  };

  const onClickSignUp = (e) => {
    e.preventDefault();
    fetch(`${API.SIGNUP}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        name: name,
        nickname: nickname,
        email: email,
        password: password,
        passwordCheck: passwordCheck,
        regionId: 1,
        cityId: city,
        addressId: centre,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.message);
        if (result.message === 'KEY_ERROR') {
          return alert('다시 한번 확인해주세요');
        } else if (result.message === 'PASSWORD_FORMAT_IS_NOT_CORRECT') {
          return alert('비밀번호 양식을 확인해주세요');
        } else if (result.message === 'PASSWORD_DO_NOT_MATCH') {
          return alert('비밀번호가 일치하지 않습니다.');
        } else {
          alert('회원가입에 성공했습니다.');
          navigate('/login');
        }
      });
  };

  return (
    <div className='font-sans'>
      <div className='container mx-auto '>
        <div className='flex justify-center px-6 my-12'>
          <div className='w-full xl:w-3/4 lg:w-11/12 flex'>
            <img
              src={register}
              alt='registerIMG'
              className='w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg shadow-xl '
            />
            <div className='w-full lg:w-7/12 bg-white p-5 shadow-xl rounded-lg lg:rounded-l-none'>
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
                      name='name'
                      onChange={handleUserInfo}
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
                      name='nickname'
                      onChange={handleUserInfo}
                      placeholder='Nick Name'
                    />
                  </div>
                </div>
                <div className='mb-4'>
                  <div className='flex justify-between'>
                    <label
                      className='block mb-2 text-sm font-bold text-gray-700'
                      for='Email'
                    >
                      Email
                    </label>
                    <button
                      className='block text-sm text-green-700 hover:text-gray-700 leading-1'
                      onClick={onClickCheckEmail}
                    >
                      check
                    </button>
                  </div>
                  <input
                    className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    id='email'
                    type='email'
                    name='email'
                    onChange={handleUserInfo}
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
                      name='password'
                      onChange={handleUserInfo}
                      placeholder='특수문자 포함 8자리 이상'
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
                      name='passwordCheck'
                      onChange={handleUserInfo}
                      placeholder='Confirm Password'
                    />
                  </div>
                </div>
                <div className='mb-6 text-center'>
                  <button
                    className='w-full px-4 py-2 font-bold text-white bg-second rounded-full hover:bg-main focus:outline-none focus:shadow-outline'
                    type='button'
                    onClick={onClickSignUp}
                  >
                    Register Account
                  </button>
                </div>
                <hr className='mb-6 border-t' />
                <div className='text-center'>
                  <a
                    className='inline-block text-sm text-main align-baseline hover:text-second'
                    href='/signin'
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
