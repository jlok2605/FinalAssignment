import React, {useState, useEffect} from "react";
function Books (){
  const [books, setBooks] = useState ([]);
useEffect (()=> {
    fetch ('/books')
    .then (response => response.json())
    .then ((response) => setBooks(response))
  },[])
const addBook = (book) => {
  setBooks((currentState) => {
    return [...currentState,book]})

  return (
    <div className='New Book Form'>
      <form onSubmit = {submitForm}>
      <input 
        type ="text" 
        name="Title" 
        placeholder="Title"
        value={inputValue.title}
        onChange={onValueChange} />
    <br/>    
      <input 
        type ="text" 
        name="Author" 
        placeholder="Author"
        value={inputValue.author}
        onChange={onValueChange} />
    <br/>
    <input 
        type ="text" 
        name="Author" 
        placeholder="Author"
        value={inputValue.author}
        onChange={onValueChange} />
    <br/>
    <input 
        type ="text" 
        name="Author" 
        placeholder="Year Published"
        value={inputValue.yearpublished}
        onChange={onValueChange} />
    <br/>
    <input 
        type ="number" 
        name="Quantity" 
        placeholder="Quantity"
        value={inputValue.quantity}
        onChange={onValueChange} />
    <br/>    
    
    
    

      </form>

    </div>
  )
}}

export default Books;
