import React from 'react';

function BorrowButton({ bookId }) {
    const borrowBook = async () => {
        try {
            const response = await fetch('/borrowed_books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ book_id: bookId }),
            });

            if (!response.ok) {
                throw new Error('Failed to borrow book');
            }

            alert('Book borrowed successfully');
        } catch (error) {
            console.error('Error borrowing book:', error.message);
        }
    };

    return (
        <button onClick={borrowBook}>Borrow Book</button>
    );
}

export default BorrowButton;
