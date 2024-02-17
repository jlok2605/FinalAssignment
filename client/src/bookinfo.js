import React from 'react';
import "./bookcontainer.css"

function BookInfo({ book, user, isBorrowed, borrowedBook, handleBorrowBook, handleReturnBook }) {
    return (
        <div className="book-container">
            <img src="../bookcover.jpg" alt="book" id="bookcover" />
            <div id="book-information">
                <h6>Title: {book.title}</h6>
                <h6>Author: {book.author}</h6>
                <h6>Genre: {book.genre}</h6>
                <h6>Year Published: {book.yearpublished}</h6>
                { (user?.user_id && !user?.is_admin) ? isBorrowed ?
                    <button onClick={() => handleReturnBook(borrowedBook.id)}>Return book</button>
                    : <button onClick={() => handleBorrowBook(book.id)}>Borrow book</button>
                    : <p>Please sign in before borrowing a book</p>
                }
                { (user?.user_id && user?.is_admin) && 
                    <div>
                        <button onClick={() => {}}>Edit book</button>
                        <button onClick={() => {}}>Delete book</button>
                    </div>
                }
            </div>
        </div>
    );



}
export default BookInfo;