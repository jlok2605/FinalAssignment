import React, { useState, useEffect } from 'react';

function BorrowButton({ bookId, userId }) {
    const [isBorrowed, setIsBorrowed] = useState(false);
    const [borrowedBookId, setBorrowedBookId] = useState("");

    useEffect(() => {
        fetch(`/borrowed_books/${userId}`)
            .then(response => response.json())
            .then(json => {
                if (json.length > 0) {
                    let borrowedbook = json.find(book => book.book_id === bookId);
                    if (borrowedbook) {
                        setBorrowedBookId(borrowedbook.id);
                        setIsBorrowed(true);
                    }
                }
            });
    }, [userId, bookId, isBorrowed]);

    const handleBorrowBook = async () => {
        try {
            await fetch('/borrowed_books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
            })
            .then(response => response.json())
            
            setIsBorrowed(true);
            alert('Book borrowed successfully');
        } catch (error) {
            console.error('Error borrowing book:', error.message);
        }
    };

    const handleReturnBook = async () => {
        try {
            const response = await fetch(`borrowed_books/${borrowedBookId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to return book');
            }
            setIsBorrowed(false);
            alert('Book returned successfully');
        } catch (error) {
            console.error('Error returning book:', error.message);
        }
    };

    const handleClick = isBorrowed ? handleReturnBook : handleBorrowBook;
    const buttonText = isBorrowed ? `Return book - ${borrowedBookId}` : 'Borrow book';

    return (
        <button onClick={handleClick} data-borrowedBookId={borrowedBookId}>{buttonText}</button>
    );
}

export default BorrowButton;
