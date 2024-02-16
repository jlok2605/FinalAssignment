import React, { useState, useEffect } from "react";
import Bookinfo from './bookinfo'
import SearchBar from "./searchbar";

function Books (props){
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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
    },[props.user])

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
                {filteredBooks.map((book, index) => <Bookinfo book={book} key={index} user={props.user}/>)}
            </div>
        </div>
    )
}

export default Books;
