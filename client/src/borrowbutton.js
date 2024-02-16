import React, {useState} from 'react';


function BorrowButton({ bookId, userId}) {
    const [isBorrowed, setIsBorrowed] = useState (false)
    const handleBorrowBook = async () => {
        try {
            const response = await fetch('http://localhost:3000/borrowed_books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify({ book_id: bookId , user_id: userId["user_id"]}),
                
            },
            console.log(JSON.stringify({ book_id: bookId , user_id: userId["user_id"]})))

            if (!response.ok) {
                throw new Error('Failed to borrow book');
            }

            setIsBorrowed(true);
            alert('Book borrowed successfully');
        } catch (error) {
            console.error('Error borrowing book:', error.message);
        }
    };
    const handleReturnBook = async(event) =>{
        const borrowedBookId = event.target.dataset.booId
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
        <button onClick={handleClick} data-borrowedBookId>{buttonText} </button>
    );
}

export default BorrowButton;
