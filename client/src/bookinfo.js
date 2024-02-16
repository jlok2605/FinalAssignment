import React,{useState, useEffect} from 'react';
import "./bookcontainer.css"

function BookInfo({ book, key, user, isBorrowed }){
    const handleBorrowBook = async () => {
        try {
            await fetch('/borrowed_books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
            })
            .then(response => response.json())
            
            setIsBorrowed(true);
            alert('Book borrowed successfully');
        } catch (error) {
            console.error('Error borrowing book:', error.message);
        }
    };

    const handleReturnBook = async () => {
        try {
            const response = await fetch(`borrowed_books/${borrowedBookId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to return book');
            }
            setIsBorrowed(false);
            alert('Book returned successfully');
        } catch (error) {
            console.error('Error returning book:', error.message);
        }
    };

    return (
        <div className="row">
            <div className="col">
                <img src="../bookcover.jpg" alt="book" className="img-fluid" />
            </div>
            <div className="col">
                <div className="book-information">
                    <h5>Title: {book.title}</h5>
                    <h5>Author: {book.author}</h5>
                    <h5>Genre: {book.genre}</h5>
                    <h5>Year Published: {book.yearpublished}</h5>
                    { isBorrowed ? 
                        <button onClick={}>Return book</button> 
                        : <button onClick={}>Borrow book</button>
                    }
                </div>
            </div>
        </div>
    );



}
export default BookInfo;