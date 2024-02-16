import React from "react"
import "./navbar.css"
function NavBar( {onLogout}) {

    // Send an AJAX request to the logout endpoint
    function handleLogout(event) {
        event.preventDefault();
        fetch('/logout', {
          method: 'DELETE',
        })
          .then((response) => {
            console.log(response); // Log the response to see its value
            if (response.ok) {
              onLogout();
            } else {
              throw new Error('Logout failed');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }

    return (
        <div>
            <nav className = "nav">
                <a href = '/' className="site-title">Evergreen Knowledge Hub</a>
                <ul className = 'list'>
                    <li>
                        <a href = '/mybooks' className="tags" id = 'mybooks'> My Books</a>
                    </li>
                    <li>
                        <a href = '/search' className="tags" id = 'search'>Search</a>
                    </li>
                    <li>
                        <a href = '#' onClick = {handleLogout} className="tags" id = 'logout'>Log Out</a>
                    </li>
                    <li>
                        <a href = '/books' className = "tags" id = 'books'>All books</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
    }

export default NavBar;