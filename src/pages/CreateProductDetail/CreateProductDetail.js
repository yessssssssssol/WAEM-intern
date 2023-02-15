import React from 'react';

const CreateProductDetail = () => {
  return (
    <div className='w-full my-24 container mx-auto'>
      <div className='w-full justify-center px-6 my-12'>
        <div className='mt-5 md:col-span-2 md:mt-0'>
          <form action='#' method='POST'>
            <div className='shadow sm:overflow-hidden sm:rounded-md'>
              <div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
                <div className='w-full'>
                  <div className='col-span-3 sm:col-span-2'>
                    <label
                      htmlFor='title'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Title
                    </label>
                    <div className='mt-1 flex rounded-md shadow-sm'>
                      <input
                        type='text'
                        name='title'
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
                      className='block text-sm font-medium text-gray-700'
                    >
                      Price
                    </label>
                    <div className='mt-1 flex rounded-md shadow-sm'>
                      <input
                        type='text'
                        name='price'
                        className='block w-full flex-1 rounded-md border-gray-300 focus:border-[#333333] focus:ring-[#333333] sm:text-sm'
                        placeholder='Price'
                      />
                    </div>
                  </div>
                  <div className='col-span-1'>
                    <label
                      htmlFor='company-website'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Category
                    </label>
                    <div className='mt-1 flex rounded-md shadow-sm'>
                      <select
                        type='text'
                        name='Category'
                        className='block w-full flex-1 rounded-md border-gray-300 focus:border-[#333333] focus:ring-[#333333] sm:text-sm'
                        placeholder='Title'
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='productInfo'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Product Info
                  </label>
                  <div className='mt-1'>
                    <textarea
                      id='ProductInfo'
                      name='ProductInfo'
                      rows={3}
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#333333] focus:ring-[#333333] sm:text-sm'
                      placeholder='Product Info'
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Product photo
                  </label>
                  <div className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                    <div className='space-y-1 text-center'>
                      <svg
                        className='mx-auto h-12 w-12 text-gray-400'
                        stroke='currentColor'
                        fill='none'
                        viewBox='0 0 48 48'
                        aria-hidden='true'
                      >
                        <path
                          d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <div className='flex text-sm text-gray-600'>
                        <label
                          htmlFor='file-upload'
                          className='relative cursor-pointer rounded-md bg-white font-medium text-[#111111] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#111111] focus-within:ring-offset-2 hover:text-green-800'
                        >
                          <span>Upload a file</span>
                          <input
                            id='file-upload'
                            name='file-upload'
                            type='file'
                            className='sr-only'
                          />
                        </label>
                        <p className='pl-1'>or drag and drop</p>
                      </div>
                      <p className='text-xs text-gray-500'>
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                <button
                  type='submit'
                  className='inline-flex justify-center rounded-md border border-transparent bg-[#333333] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#111111] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
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
