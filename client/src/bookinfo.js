import React from 'react';
import "./bookcontainer.css"

function BookInfo({ book, isBorrowed, borrowedBook, handleBorrowBook, handleReturnBook }) {
    return (
        <div className="grid-container">
            <div className="book-container">
                <img src="../bookcover.jpg" alt="book" id="bookcover" />
                <div id="book-information">
                    <h5>Title: {book.title}</h5>
                    <h5>Author: {book.author}</h5>
                    <h5>Genre: {book.genre}</h5>
                    <h5>Year Published: {book.yearpublished}</h5>
                    {isBorrowed ?
                        <button onClick={() => handleReturnBook(borrowedBook.id)}>Return book</button>
                        : <button onClick={() => handleBorrowBook(book.id)}>Borrow book</button>
                    }
                </div>
            </div>
        </div>
    );



}
export default BookInfo;