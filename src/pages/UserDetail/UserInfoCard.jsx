import React from 'react';
import rabbit from '../../assets/images/rabbit.jpeg';
const UserInfoCard = () => {
  return (
    <div className=' w-full font-mono'>
      <section className='relative py-16 bg-blueGray-200 mt-72 font-mono'>
        <div className='container mx-auto relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64'>
          <div className='px-6 w-full'>
            <div className='flex flex-wrap justify-center'>
              <div className='w-full flex justify-center'>
                <div className='relative'>
                  <img
                    src={rabbit}
                    alt='profile'
                    className='shadow-xl -mt-16 rounded-full align-middle border-none lg: w-[150px] h-[150px]'
                  />
                </div>
              </div>
              <div className='w-full text-center '>
                <div className='flex justify-center lg:pt-4 pt-8 pb-0'>
                  <div className='p-3 text-center'>
                    <span className='text-xl font-bold block uppercase tracking-wide text-slate-700'>
                      3,360
                    </span>
                    <span className='text-sm text-slate-400'>Product</span>
                  </div>
                  <div className='p-3 text-center'>
                    <span className='text-xl font-bold block uppercase tracking-wide text-slate-700'>
                      2,454
                    </span>
                    <span className='text-sm text-slate-400'>Like</span>
                  </div>
                  <div className='p-3 text-center'>
                    <span className='text-xl font-bold block uppercase tracking-wide text-slate-700'>
                      564
                    </span>
                    <span className='text-sm text-slate-400'>Chat</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center mt-2'>
              <h3 className='text-2xl text-slate-700 font-bold leading-normal mb-1'>
                Hailey
              </h3>
              <div className='text-xs mt-0 mb-2 text-slate-400 font-bold uppercase'>
                <i className='fas fa-map-marker-alt mr-2 text-slate-400 opacity-75'></i>
                Paris, France
              </div>
            </div>
            <div className='mt-6 py-6 border-t border-slate-200 text-center'>
              <div className='flex flex-wrap justify-center'>
                <div className='w-full px-4'>
                  <p className='font-light leading-relaxed text-slate-600 mb-4'>
                    An artist of considerable range, Mike is the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm.
                  </p>
                  <a
                    href='/'
                    className='font-semibold text-[#333333]  hover:text-slate-400 hover:font-bold'
                  >
                    채팅하기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserInfoCard;
