import React from 'react';

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Photo Gallery</h1>
      <input
        type="text"
        placeholder="Search by author name..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />
    </div>
  );
};

export default SearchBar;