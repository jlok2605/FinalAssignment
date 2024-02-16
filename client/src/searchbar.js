import React, { useState } from 'react';

function SearchBar({ data, setData, books }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const filteredData = data.filter(item => item.includes(searchTerm));
    setData(filteredData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
      <BooksList books={books} />
    </div>
  );
}

function BooksList({ books }) {
    if (books === undefined || books === null) {
        return <div>Loading...</div>;
      }
  
    return (
      <div>
        {books.map(book => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    );
  }
  
export default SearchBar;
