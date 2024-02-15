import React from "react"
import "./navbar.css"
function logout(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Send an AJAX request to the logout endpoint
    fetch('/logout', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/';
        } else {
            console.error('Logout failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
function NavBar () {
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
                        <a href = '#' onClick = {logout} className="tags" id = 'logout'>Log Out</a>
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