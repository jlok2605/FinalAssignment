
import {useEffect, useState} from 'react'
function App (){
useEffect (()=> {
  fetch ('/books')
  .then (response => response.json())
  .then (json => {setBooks(json)
  })
})

  const [books, setBooks] = useState ([]);
  return (
    <div className='App'>
      <h1>Books:</h1>
    </div>
  )

}

export default App;
