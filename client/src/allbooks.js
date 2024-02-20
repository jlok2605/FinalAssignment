import React, { useState, useEffect } from "react";
import Bookinfo from './bookinfo'
import SearchBar from "./searchbar";
import './bookcontainer.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Books({ user }) {
    const [books, setBooks] = useState([]);
    const [borrowedBooks, setBorrowedBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [quantity, setQuantity] = useState(null)
    const [yearpublished, setYearPublished] = useState(null)



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function addBook() {
        fetch("/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "title": title,
                "genre": genre,
                "yearpublished": yearpublished,
                "quantity": quantity,
                "author_name": author
            })
        })
        .then(response => {
            if (response.ok) {
                alert('Book created');
            } else {
                alert('Failed to create book')
            }
        })
        handleClose()
        fetchBooks()
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    useEffect(() => {
        fetchBorrowedBooks();
    }, [user]);
    function fetchBooks() {
        fetch('/books', {
            method: "GET",
            "Content-Type": "application/json"
        })
        .then(response => response.json())
        .then((response) => {
            const filteredBooks = response.filter(book => book.quantity > 0);
            setBooks(filteredBooks);
        });
    }


    function fetchBorrowedBooks() {
        if (!!user?.user_id) {
            fetch(`/borrowed_books/${user?.user_id}`)
            .then(response => response.json())
            .then(json => { setBorrowedBooks(json); });
        }
    }

    function handleAdminDelete(bookId, bookTitle) {
        const isConfirmed = window.confirm(`Are you sure you want to delete ${bookTitle}?`)

        if (isConfirmed) {
            fetch(`/books/${bookId}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    alert('Book deleted!');
                    fetchBooks()
                } else {
                    alert('Failed to delete book')
                }
            })
        }
    }


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

    return (
        <div>
            <h1>Books</h1>
            <SearchBar setSearchTerm={setSearchTerm} />
            {(user?.user_id&& user?.is_admin) &&
                <button onClick={handleShow}>Add Book</button>
                }
            <div id="Books">
                {books.filter(book => {
                    return Object.values(book).some(value => {
                        return typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase());
                    }) && book.quantity > 0
                })
                    .map((book, index) => {
                        const borrowedBook = user?.user_id ? borrowedBooks?.find((item) => item.book_id === book.id) : null;
                        const isBorrowed = !!borrowedBook
                        return (
                            <Bookinfo
                                book={book}
                                user={user}
                                isBorrowed={isBorrowed}
                                borrowedBook={borrowedBook}
                                handleBorrowBook={handleBorrowBook}
                                handleReturnBook={handleReturnBook}
                                handleAdminDelete={handleAdminDelete}
                            />
                        )
                    })}
            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form style={{display:"flex", flexDirection: "column"}}>
                        <label htmlFor='title'>Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label htmlFor='title'>Author:</label>
                        <input
                            type="text"
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                        <label htmlFor='genre'>Genre:</label>
                        <input
                            type="text"
                            id="genre"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                        <label htmlFor='genre'>Year Published</label>
                        <input
                            type="number"
                            id="yearpublished"
                            value={yearpublished}
                            onChange={(e) => setYearPublished(e.target.value)}
                        />
                        <label htmlFor='quantity'>Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addBook}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Books;
