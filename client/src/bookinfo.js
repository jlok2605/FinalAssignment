import React from 'react';
import BorrowButton from "./borrowbutton"
import "./bookcontainer.css"

function BookInfo(props){
    const book = props.book
    const user = props.user


    return (
            <div className="row">
                <div className="col-md-4">
                    <img src="../bookcover.jpg" alt="book" className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <div className="book-information">
                        <h5>Title: {book.title}</h5>
                        <h5>Author: {book.author}</h5>
                        <h5>Genre: {book.genre}</h5>
                        <h5>Year Published: {book.yearpublished}</h5>
                        <BorrowButton bookId={book.id}/>
                    </div>
                </div>
            </div>
        );



}
export default BookInfo;