import React, { useState } from 'react';


function AdminFunction({ bookId }) {
    const [confirmDelete, setConfirmDelete] = useState(false);
    const handleDelete = () => {
        fetch(`/books/${bookId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    console.log('Book deleted');
                } else {
                    console.error('Failed to delete book')
                }
            })
    }
    return (
        <div>
            <button onClick={() => setConfirmDelete(true)}>Delete</button>
            {confirmDelete && (
                <div>
                    <p> Are you sure you want to delete this book?</p>
                    <button onClick={handleDelete}>Yes</button>
                    <button onClick={() => setConfirmDelete(false)}>No</button>
                </div>
            )}
            <Link to={`/books/${bookId}/update`}>
                <button>Update</button>
            </Link>
        </div>

    )
}
