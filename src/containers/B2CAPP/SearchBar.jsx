import React from 'react';

function SearchBar() {
  return (
    <form className="flex grow shrink gap-2 items-center self-stretch py-2.5 pl-3 my-auto md:bg-white rounded-2xl min-h-[44px] md:min-w-[240px] md:w-[415px] max-md:max-w-full">
      <img loading="lazy" src="/icons/search_icon.svg" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <label htmlFor="searchInput" className="sr-only">Search</label>
      <input
        type="search"
        id="searchInput"
        placeholder="Search..."
        className="self-stretch my-auto bg-transparent border-none outline-none w-full pr-1 hidden md:block"
        aria-label="Search"
      />
    </form>
  );
}

export default SearchBar;