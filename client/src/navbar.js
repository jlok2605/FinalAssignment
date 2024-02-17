import React,{useState} from "react"
import "./navbar.css"
function NavBar( { user, onLogout }) {

    
    function handleLogout(event) {
        fetch('/logout', {
          method: 'DELETE',
        })
          .then((response) => {
            console.log(response); 
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
                    { user?.user_id ?
                        <a href = '#' onClick = {handleLogout}className="tags" id = 'logout'>Logout</a> :
                        <a href = '/login' className="tags" id = 'login'>Login</a>
                    }
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