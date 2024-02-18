import React, { useState } from 'react';
import "./bookcontainer.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function BookInfo({ book, user, isBorrowed, borrowedBook, handleBorrowBook, handleReturnBook, handleAdminDelete }) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="book-container">
            <img src="../bookcover.jpg" alt="book" id="bookcover" />
            <div id="book-information">
                <h6>Title: {book.title}</h6>
                <h6>Author: {book.author}</h6>
                <h6>Genre: {book.genre}</h6>
                <h6>Year Published: {book.yearpublished}</h6>
                {(user?.user_id && !user?.is_admin) ? isBorrowed ?
                    <button onClick={() => handleReturnBook(borrowedBook.id)}>Return book</button>
                    : <button onClick={() => handleBorrowBook(book.id)}>Borrow book</button>
                    : <p>Please sign in before borrowing a book</p>
                }
                {(user?.user_id && user?.is_admin) &&
                    <div>
                        <button onClick={handleShow}>Edit book</button>
                        <button onClick={() => { handleAdminDelete(book.id, book.title) }}> Delete book</button>
                    </div>
                }
            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label htmlFor='title'>Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                            Title
                        <label htmlFor='title'>Author</label>
                        <input
                            type="text"
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                        <label htmlFor='genre'>Genre</label>
                        <input
                            type="text"
                            id="genre"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );



}
export default BookInfo;