import React from 'react';

const UserInfoCard = () => {
  return (
    <div>
      <div className='relative max-w-md mx-auto md:max-w-2xl mt-16 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16'>
        <div className='px-6'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full flex justify-center'>
              <div className='relative'>
                <img
                  src='https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true'
                  className='shadow-xl rounded-full align-middle border-none absolute m-16 ml-20 lg:ml-16 max-w-[150px]'
                />
              </div>
            </div>
            <div className='w-full text-center mt-20'>
              <div className='flex justify-center lg:pt-4 pt-8 pb-0'>
                <div className='p-3 text-center'>
                  <span className='text-xl font-bold block uppercase tracking-wide text-slate-700'>
                    3,360
                  </span>
                  <span className='text-sm text-slate-400'>Photos</span>
                </div>
                <div className='p-3 text-center'>
                  <span className='text-xl font-bold block uppercase tracking-wide text-slate-700'>
                    2,454
                  </span>
                  <span className='text-sm text-slate-400'>Followers</span>
                </div>

                <div className='p-3 text-center'>
                  <span className='text-xl font-bold block uppercase tracking-wide text-slate-700'>
                    564
                  </span>
                  <span className='text-sm text-slate-400'>Following</span>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center mt-2'>
            <h3 className='text-2xl text-slate-700 font-bold leading-normal mb-1'>
              Mike Thompson
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
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm.
                </p>
                <a
                  href='#'
                  className='font-normal text-slate-700 hover:text-slate-400'
                >
                  Follow Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
