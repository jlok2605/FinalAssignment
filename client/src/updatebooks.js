import React, { useState } from 'react';

function UpdateBookForm(props) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [yearPublished, setYearPublished] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/books/${bookId}`, {
            method: 'PATCH', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                author: author,
                genre: genre,
                yearPublished: yearPublished,
                quantity: quantity,
            }),
        })
        .then(response => {
            if (response.ok) {
                console.log('Book updated successfully');
                // Optionally, you can update the state or do something else
            } else {
                console.error('Failed to update book');
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="author">Author:</label>
            <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />

            <label htmlFor="genre">Genre:</label>
            <input type="text" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />

            <label htmlFor="yearPublished">Year Published:</label>
            <input type="text" id="yearPublished" value={yearPublished} onChange={(e) => setYearPublished(e.target.value)} />

            <label htmlFor="quantity">Quantity:</label>
            <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

            <button type="submit">Update Book</button>
        </form>
    );
}

export default UpdateBookForm;