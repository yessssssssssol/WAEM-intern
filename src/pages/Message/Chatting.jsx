import React from 'react';

const Chatting = () => {
  return (
    <div className='container'>
      <div className='flex w-full h-full px-5 flex-col justify-between'>
        <div className='flex flex-col mt-5'>
          <div className='flex justify-end mb-4'>
            <div className='mr-2 py-3 px-4 bg-second rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white'>
              Welcome to group everyone !
            </div>
            <img
              src='https://source.unsplash.com/vpOeXr5wmR4/600x600'
              className='object-cover h-8 w-8 rounded-full'
              alt=''
            />
          </div>
          <div className='flex justify-start mb-4'>
            <img
              src='https://source.unsplash.com/vpOeXr5wmR4/600x600'
              className='object-cover h-8 w-8 rounded-full'
              alt=''
            />
            <div className='ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              at praesentium, aut ullam delectus odio error sit rem. Architecto
              nulla doloribus laborum illo rem enim dolor odio saepe,
              consequatur quas?
            </div>
          </div>
          <div className='flex justify-end mb-4'>
            <div className='mr-2 py-3 px-4 bg-second rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
              repudiandae.
            </div>
            <img
              src='https://source.unsplash.com/vpOeXr5wmR4/600x600'
              className='object-cover h-8 w-8 rounded-full'
              alt=''
            />
          </div>
          <div className='flex justify-start mb-4'>
            <img
              src='https://source.unsplash.com/vpOeXr5wmR4/600x600'
              className='object-cover h-8 w-8 rounded-full'
              alt=''
            />
            <div class='ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white'>
              happy holiday guys!
            </div>
          </div>
        </div>
        <div className='py-5'>
          <div className='w-full bg-gray-100 py-2 px-1 rounded-xl'>
            <input
              className='w-5/6 bg-gray-100 border-none'
              type='text'
              placeholder='type your message here...'
            />
            <button className='w-1/6 font-semibold text-second hover:text-main'>
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatting;
