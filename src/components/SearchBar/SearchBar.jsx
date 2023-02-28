import React from 'react';

const SearchBar = ({ searchBook, searchKeyword }) => {
  return (
    <div class='w-full mx-auto mt-8 px-28'>
      <form>
        <label
          for='default-search'
          class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'
        >
          Search
        </label>
        <div class='relative'>
          <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
            <svg
              class='w-5 h-5 text-gray-500 dark:text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </div>
          <input
            type='search'
            value={searchKeyword}
            onChange={searchBook}
            id='default-search'
            class='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-second focus:border-main dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-second'
            placeholder='제목 검색'
            required
          />
          {/* <button
            type='submit'
            value={searchKeyword}
            onClick={searchBook}
            class='text-white absolute right-2.5 bottom-2.5 bg-second hover:bg-main focus:ring-4 focus:outline-none focus:ring-second font-medium rounded-lg text-sm px-4 py-2 dark:bg-main dark:hover:bg-second dark:focus:ring-main'
          >
            Search
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
