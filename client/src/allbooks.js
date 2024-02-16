import React, {useState, useEffect} from "react";
import Bookinfo from './bookinfo'

function Books (props){
    const [books, setBooks] = useState ([]);

    useEffect (()=> {
        console.log(props.user)
        fetch ('/books',{
        method: "GET",
        "Content-Type": "application/json"
      })
      .then (response => response.json())
      .then ((response) => setBooks(response))
    },[props.user])

    return(
        <div>
            <h1>Books</h1>
            <div id = "Books">
                {books.map((book,index) =><Bookinfo book = {book} key = {index} user ={props.user}/>)}
            </div>
        </div>
    )
}

    export default Books;