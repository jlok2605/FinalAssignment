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

    const handleBorrowBook = async (bookId) => {
        fetch('/borrowed_books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                book_id: bookId, 
                user_id: user?.user_id
            })
        })
        .then(response => response.json())
        alert('Book borrowed successfully');
    };

    const handleReturnBook = async (bookId) => {
        fetch(`borrowed_books/${bookId}`, {
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then((json) => {
            alert(json?.message)
        })
    };

    return(
        <div>
            <h1>Books</h1>
            <SearchBar onSearch={handleSearch}/>
            <div id="Books">
                {books.map((book, index) => {
                    const borrowedBook = borrowedBooks?.find((item) => item.book_id === book.id);
                    const isBorrowed = !!borrowedBook
                    return (
                        <Bookinfo 
                            book={book} 
                            user={user} 
                            isBorrowed={isBorrowed} 
                            borrowedBook={borrowedBook}
                            handleBorrowBook={handleBorrowBook}
                            handleReturnBook={handleReturnBook}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Books;
