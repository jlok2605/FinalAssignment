import React, { useState, useEffect } from "react";
import Bookinfo from './bookinfo'
import SearchBar from "./searchbar";

function Books ({ user }){
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
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
            setFilteredBooks(response);
        })
    },[])

    useEffect(() => {
        fetch(`/borrowed_books/${user?.user_id}`)
            .then(response => response.json())
            .then(json => setBorrowedBooks(json));
    }, [user]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        const filtered = books.filter(book => 
            book.title.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredBooks(filtered);
    };

    return(
        <div>
            <h1>Books</h1>
            <SearchBar onSearch={handleSearch}/>
            <div id="Books">
                {filteredBooks.map((book, index) => {
                    const isBorrowed = !!(borrowedBooks.find((item) => item.book_id === book.book_id));
                    return (<Bookinfo book={book} key={index} user={user} isBorrowed={isBorrowed}/>)
                })}
            </div>
        </div>
    )
}

export default Books;
