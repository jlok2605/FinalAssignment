import React, {useState, useEffect} from "react";
function Books (){
useEffect (()=> {
    fetch ('/books')
    .then (response => response.json())
    .then ((response) => setBooks(response))
  },[])

  const [books, setBooks] = useState ([]);
  return (
    <div className='App'>
      <h1>Books:</h1>
      <div id ='books'>
        {books.map((book,index)=><BookInfo book = {book} key = {index}/>)}
      </div>
    </div>
  )


}