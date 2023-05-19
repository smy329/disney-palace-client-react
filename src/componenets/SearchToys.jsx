import { useState } from 'react';

const SearchToys = ({ searchKey, handleSearch }) => {
  return (
    <div>
      <div className="form-control mb-10">
        <div className="input-group flex justify-center">
          <input
            type="text"
            placeholder="Search…"
            className="input border-2 border-secondary outline-none focus:outline-none w-3/5"
            value={searchKey}
            onChange={handleSearch}
          />
          <button className="btn btn-square bg-primary border-secondary hover:bg-secondary hover:border-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchToys;
