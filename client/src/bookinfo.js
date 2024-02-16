import React,{useState, useEffect} from 'react';
import "./bookcontainer.css"

function BookInfo({ book, key, user, isBorrowed }){
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
                        <button>Return book</button>
                        : <button>Borrow book</button>
                    }
                </div>
            </div>
        </div>
    );



}
export default BookInfo;