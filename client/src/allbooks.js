import React, { useState, useEffect } from "react";
import Bookinfo from './bookinfo'
import SearchBar from "./searchbar";

function Books ({ user }){
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [borrowedBooks, setBorrowedBooks] = useState([])

    useEffect (()=> {
        fetch ('/books',{
            method: "GET",
            "Content-Type": "application/json"
        })
        .then (response => response.json())
        .then ((response) => {
            setBooks(response);
        })
    },[])

    useEffect(() => {
        if (!!user) {
            fetch(`/borrowed_books/${user?.user_id}`)
            .then(response => response.json())
            .then(json => {console.log(json); setBorrowedBooks(json)});
        }
    }, [user]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        const filtered = books.filter(book => 
            book.title.toLowerCase().includes(term.toLowerCase())
        );
    };

    return(
        <div>
            <h1>Books</h1>
            <SearchBar onSearch={handleSearch}/>
            <div id="Books">
                {books.map((book, index) => {
                    console.log("THIS IS THE BOOK", book)
                    const isBorrowed = !!(borrowedBooks?.find((item) => item.book_id === book.id));
                    console.log("CHECKING THIS BOOK HGMMMMM", book?.book_id)
                    console.log("IS THIS BORROWED????", isBorrowed)
                    return (<Bookinfo book={book} key={index} user={user} isBorrowed={isBorrowed}/>)
                })}
            </div>
        </div>
    )
}

export default Books;
