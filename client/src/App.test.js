import react from 'React'
import {useEffect, useState} from 'react'

useEffect (()=> {
  fetch ('/books')
  .then (response => response.json())
  .then (json => {setBooks(json)
  })
})
function App (){
  const [books, setBooks] = useState ([]);
  return (
    <div className='App'>
      <h1>Books:</h1>
    </div>
  )

}