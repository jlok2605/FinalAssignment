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
    <div className='App'>
      <h1>Books:</h1>
      <div id ='books'>
        {books.map((book,index)=><BookInfo book = {book} key = {index}/>)}
      </div>
    </div>
  )


}}

export default Books;
