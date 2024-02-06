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
                        <a href = '/logout' className="tags" id = 'logout'>Log Out</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
} 