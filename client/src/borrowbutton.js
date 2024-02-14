import React, {useState} from 'react';


function BorrowButton({ bookId }) {
    const [isBorrowed, setIsBorrowed] = useState (false)
    const handleBorrowBook = async () => {
        try {
            const response = await fetch('/borrowed_books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ book_id: bookId , user_id: 3}),
            });

            if (!response.ok) {
                throw new Error('Failed to borrow book');
            }

            setIsBorrowed(true);
            alert('Book borrowed successfully');
        } catch (error) {
            console.error('Error borrowing book:', error.message);
        }
    };
    const handleReturnBook = async() =>{
        try {
            const response = await fetch(`borrowed_books/${bookId}`,{
                method: 'DELETE',
            });
            if (!response.ok){
                throw new Error('Failed to return book');
            }
            setIsBorrowed(false);
                alert('Book returned successfully')
            } catch (error) {
                console.error('Error returning book:', error.message)
            }
        }
    
    const handleClick = isBorrowed ? handleReturnBook : handleBorrowBook;
    const buttonText = isBorrowed ? 'Return book' : 'Borrow book'; 
    return (
        <button onClick={handleClick}>{buttonText} </button>
    );
}

export default BorrowButton;
