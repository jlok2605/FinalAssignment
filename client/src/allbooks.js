import React, { useState, useEffect } from "react";
import Bookinfo from './bookinfo'
import SearchBar from "./searchbar";

function Books ({ user }){
    const [books, setBooks] = useState([]);
    const [borrowedBooks, setBorrowedBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

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
        fetchBorrowedBooks();
    }, [user]);

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
        .then(() => {
            alert('Book borrowed successfully');
            fetchBorrowedBooks();
        })
    };

    const handleReturnBook = async (bookId) => {
        fetch(`borrowed_books/${bookId}`, {
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then((json) => {
            alert(json?.message);
            fetchBorrowedBooks();
        })
    };

    return(
        <div>
            <h1>Books</h1>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <div id="Books">
                {books.filter(book => {
                    return Object.values(book).some(value => {
                        return typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase());
                    }) && book.quantity > 0
                })
                .map((book, index) => {
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

    function fetchBorrowedBooks() {
        if (!!user) {
            fetch(`/borrowed_books/${user?.user_id}`)
                .then(response => response.json())
                .then(json => { setBorrowedBooks(json); });
        }
    }
}

export default Books;
