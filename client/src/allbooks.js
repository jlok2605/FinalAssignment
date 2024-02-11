import React, {useState, useEffect} from "react";

function Books (){
    const [books, setBooks] = useState ([]);
  useEffect (()=> {
      fetch ('/books')
      .then (response => response.json())
      .then ((response) => setBooks(response))
    },[])}

    return(
        <div>
            <h1>Books</h1>
            <div id = "Books">
                {books.map((book,index) =><Bookinfo book = {book} key = {index}/>)}
            </div>
        </div>

    )

    export default Books;