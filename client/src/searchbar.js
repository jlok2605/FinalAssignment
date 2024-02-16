import React, { useState } from 'react';

function SearchBar({ setSearchTerm }) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = event => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(searchInput);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={searchInput}
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}
  
export default SearchBar;
