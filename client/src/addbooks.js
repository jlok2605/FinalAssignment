import React, {useState} from "react";

const submitForm = e => {
  e.preventDefault();

  fetch('/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputValue)
  })
  .then(response => {
    if (response.ok) {
      console.log('Book added successfully');
      setInputValue({
        title: "",
        genre: "",
        yearpublished: "",
        quantity: "",
        author: ""
      });
    } else {
      console.error('Failed to add book');
      
    }
  })
  .catch(error => {
    console.error('Error adding book:', error);
  });
  };

const onValueChange = e => {
  setInputValue({
    ...inputValue,[e.target.name]: e.target.value
  })
}

function Books (){
  const [books, setBooks] = useState ([]);
useEffect (()=> {
    fetch ('/books')
    .then (response => response.json())
    .then ((response) => setBooks(response))
  },[])

  return (
    <div className='New Book Form'>
      <form onSubmit = {submitForm}>
      <input 
        type ="text" 
        name="title" 
        placeholder="Title"
        value={inputValue.title}
        onChange={onValueChange} />
    <br/>    
      <input 
        type ="text" 
        name="author" 
        placeholder="Author"
        value={inputValue.author}
        onChange={onValueChange} />
    <br/>
    <input 
        type ="text" 
        name="genre" 
        placeholder="Genre"
        value={inputValue.genre}
        onChange={onValueChange} />
    <br/>
    <input 
        type ="text" 
        name="yearpublished" 
        placeholder="Year Published"
        value={inputValue.yearpublished}
        onChange={onValueChange} />
    <br/>
    <input 
        type ="number" 
        name="quantity" 
        placeholder="Quantity"
        value={inputValue.quantity}
        onChange={onValueChange} />
    <br/>  
  </form>

    </div>
  )
}

export default Books;
