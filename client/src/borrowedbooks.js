import React, { useState, useEffect } from 'react';
import "./borrowedbooks.css"

function BorrowedBooksList({ user }) {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  function fetchBorrowedBooks(userId) {
    fetch(`/borrowed_books/${userId}`)
      .then(response => response.json())
      .then(json => {
        setBorrowedBooks(json);
      });
  }

  useEffect(() => {
    console.log(user?.user_id ? true : false)
    if (user?.user_id) {
      fetchBorrowedBooks(user?.user_id);
    }
  }, [user]);

  function handleReturn(id) {
    fetch(`/borrowed_books/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        alert(json?.message)
        fetchBorrowedBooks(user?.user_id)
      })
  }

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
            <td><button value={book.id} onClick={(e) => handleReturn(e.target.value)}>Return</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default BorrowedBooksList