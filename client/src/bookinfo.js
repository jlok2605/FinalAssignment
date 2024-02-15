import React from 'react';
import BorrowButton from "./borrowbutton"
import "./bookcontainer.css"

function BookInfo(props){
    const book = props.book


    return (
        <div id="books">
            <img src = "../bookcover.jpg" alt = "book" id="bookcover"></img>
            <div className="bookinformation">
                <h5 key = "title">Title: {book.title}</h5>
                <h5 key = "author">Author: {book.author}</h5>
                <h5 key = "genre">Genre: {book.genre}</h5>
                <h5 key = "yearpublished">Year Published: {book.yearpublished}</h5>
                <BorrowButton bookId={book.id}/>
            </div>
        </div>
    )


}
export default BookInfo;