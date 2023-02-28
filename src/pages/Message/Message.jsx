import React from 'react';
import Chatting from './Chatting';
import aesop from '../../assets/images/aesop.webp';

const Message = () => {
  return (
    <div class='container w-full my-24 mx-auto shadow-lg rounded-lg flex items-center'>
      <div class='md:flex flex-row justify-between bg-white'>
        <div class='flex flex-col w-2/5 border-r-2 overflow-y-auto'>
          <div class='flex flex-row py-4 px-2 justify-center items-center border-b-2'>
            <div class='w-1/4'>
              <img
                src='https://source.unsplash.com/_7LbC5J-jw4/600x600'
                class='object-cover h-12 w-12 rounded-full'
                alt=''
              />
            </div>
            <div class='w-full'>
              <div class='text-lg font-semibold'>Luis1994</div>
              <span class='text-gray-500'>happy holiday guys!</span>
            </div>
          </div>
        </div>
        <Chatting />
        <div class='flex w-2/5 border-l-2 px-5'>
          <div class='flex flex-col'>
            <div class='font-semibold text-l py-4'>제목</div>
            <img src={aesop} class='object-cover rounded-xl h-64' alt='' />
            <div class='font-semibold py-4'>Created 22 Sep 2021</div>
            <div class='font-light'>제품 설명 적혀있는 곳</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
