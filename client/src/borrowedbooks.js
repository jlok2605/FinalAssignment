import React, { useState, useEffect } from 'react';
import "./borrowedbooks.css"

function BorrowedBooksList({ userId }) {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    if(!!userId){
      fetch(`/borrowed_books/${userId.user_id}`)
        .then(response => response.json())
        .then(json => {
            setBorrowedBooks(json); 
            console.log(json); 
        })
      }}, [userId]);


  return (
    <div>
      <h2>User's Borrowed Books</h2>
      <table>
        <tr>
          <th>Book Title</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
        {borrowedBooks?.map(book => (
          <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td><button>Return</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default BorrowedBooksList;
