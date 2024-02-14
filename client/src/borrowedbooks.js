import React, {useState, useEffect} from 'react'

function BorrowedBooksList () {
    const [borrowedBooks, setBorrowedBooks] = useState([])
    useEffect(() => {
        fetch(`/borrowed_books/${user_id}`)
            .then(response => response.json())
            .then(data => setBorrowedBooks(data));
    }, []);
    return (
    <div>
        <h2>Your books</h2>
        <ul>
            {borrowedBooks.map(book => (
                <li key={book.id}>{book.title} by {book.author}</li>
            ))}
        </ul>
    </div>
    )
}

export default BorrowedBooksList;