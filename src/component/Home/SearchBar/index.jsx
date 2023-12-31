import React from 'react';
import './styles.css';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span className='clearicon' onClick={clearSearch}>X</span>}
      <button className='btn'>Search</button>
    </form>
  </div>
);

export default SearchBar;
